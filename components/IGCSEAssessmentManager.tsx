import React, { useState, useEffect } from 'react';
import { IGCSEAssessment, IGCSEComponent, User } from '../types';
import { IGCSE_COMPONENTS, calculateIGCSEGrade, calculatePercentage, validateAssessmentMarks, getGradeColor, getGradeBadgeColor } from '../utils/igcseGrading';
import { z } from 'zod';

interface IGCSEAssessmentManagerProps {
  student: User;
  assessments: IGCSEAssessment[];
  onAssessmentAdded: (assessment: IGCSEAssessment) => void;
  onAssessmentUpdated: (assessment: IGCSEAssessment) => void;
  onAssessmentDeleted: (assessmentId: string) => void;
}

// Validation schema
const assessmentSchema = z.object({
  componentId: z.string().min(1, 'Component is required'),
  marks: z.number().min(0, 'Marks must be 0 or greater'),
  assessmentType: z.enum(['mock', 'coursework', 'final']),
  notes: z.string().optional()
});

const IGCSEAssessmentManager: React.FC<IGCSEAssessmentManagerProps> = ({
  student,
  assessments,
  onAssessmentAdded,
  onAssessmentUpdated,
  onAssessmentDeleted
}) => {
  const [isAddingAssessment, setIsAddingAssessment] = useState(false);
  const [editingAssessment, setEditingAssessment] = useState<IGCSEAssessment | null>(null);
  const [formData, setFormData] = useState({
    componentId: '',
    marks: '',
    assessmentType: 'coursework' as 'mock' | 'coursework' | 'final',
    notes: ''
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setFormData({
      componentId: '',
      marks: '',
      assessmentType: 'coursework',
      notes: ''
    });
    setValidationErrors({});
    setIsAddingAssessment(false);
    setEditingAssessment(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationErrors({});
    setIsSubmitting(true);

    try {
      const component = IGCSE_COMPONENTS.find(c => c.id === formData.componentId);
      if (!component) {
        setValidationErrors({ componentId: 'Invalid component selected' });
        return;
      }

      const marks = parseFloat(formData.marks);
      if (!validateAssessmentMarks(marks, component.maxMarks)) {
        setValidationErrors({ marks: `Marks must be between 0 and ${component.maxMarks}` });
        return;
      }

      // Validate with Zod
      const validationResult = assessmentSchema.safeParse({
        componentId: formData.componentId,
        marks,
        assessmentType: formData.assessmentType,
        notes: formData.notes
      });

      if (!validationResult.success) {
        const errors: Record<string, string> = {};
        validationResult.error.issues.forEach(issue => {
          if (issue.path[0]) {
            errors[issue.path[0] as string] = issue.message;
          }
        });
        setValidationErrors(errors);
        return;
      }

      const percentage = calculatePercentage(marks, component.maxMarks);
      const grade = calculateIGCSEGrade(percentage);

      const assessment: IGCSEAssessment = {
        id: editingAssessment?.id || `assessment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        studentId: student.id,
        componentId: formData.componentId,
        componentName: component.name,
        marks,
        maxMarks: component.maxMarks,
        percentage,
        grade,
        dateAssessed: new Date(),
        assessmentType: formData.assessmentType,
        notes: formData.notes || undefined
      };

      if (editingAssessment) {
        onAssessmentUpdated(assessment);
      } else {
        onAssessmentAdded(assessment);
      }

      resetForm();
    } catch (error) {
      console.error('Error saving assessment:', error);
      setValidationErrors({ general: 'Failed to save assessment. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (assessment: IGCSEAssessment) => {
    setFormData({
      componentId: assessment.componentId,
      marks: assessment.marks.toString(),
      assessmentType: assessment.assessmentType,
      notes: assessment.notes || ''
    });
    setEditingAssessment(assessment);
    setIsAddingAssessment(true);
  };

  const handleDelete = (assessmentId: string) => {
    if (window.confirm('Are you sure you want to delete this assessment?')) {
      onAssessmentDeleted(assessmentId);
    }
  };

  const getAssessmentTypeLabel = (type: string) => {
    switch (type) {
      case 'mock': return 'Mock Exam';
      case 'coursework': return 'Coursework';
      case 'final': return 'Final Exam';
      default: return type;
    }
  };

  const getAssessmentTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'mock': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'coursework': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'final': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-900/20 dark:text-slate-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          IGCSE Assessments - {student.nickname || student.name}
        </h3>
        <button
          onClick={() => setIsAddingAssessment(true)}
          className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Add Assessment
        </button>
      </div>

      {/* Add/Edit Assessment Form */}
      {isAddingAssessment && (
        <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-6 border border-slate-200 dark:border-slate-600">
          <h4 className="text-md font-medium text-slate-900 dark:text-slate-100 mb-4">
            {editingAssessment ? 'Edit Assessment' : 'Add New Assessment'}
          </h4>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Component Selection */}
              <div>
                <label htmlFor="componentId" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Component <span className="text-red-500">*</span>
                </label>
                <select
                  id="componentId"
                  name="componentId"
                  value={formData.componentId}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    validationErrors.componentId
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 focus:ring-sky-500 dark:border-slate-600'
                  } bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100`}
                  disabled={isSubmitting}
                >
                  <option value="">Select a component...</option>
                  {IGCSE_COMPONENTS.map(component => (
                    <option key={component.id} value={component.id}>
                      {component.name} (Max: {component.maxMarks})
                    </option>
                  ))}
                </select>
                {validationErrors.componentId && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {validationErrors.componentId}
                  </p>
                )}
              </div>

              {/* Marks */}
              <div>
                <label htmlFor="marks" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Marks <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="marks"
                  name="marks"
                  value={formData.marks}
                  onChange={handleInputChange}
                  min="0"
                  max={formData.componentId ? IGCSE_COMPONENTS.find(c => c.id === formData.componentId)?.maxMarks : 100}
                  step="0.5"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    validationErrors.marks
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 focus:ring-sky-500 dark:border-slate-600'
                  } bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100`}
                  placeholder="Enter marks"
                  disabled={isSubmitting}
                />
                {validationErrors.marks && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {validationErrors.marks}
                  </p>
                )}
              </div>

              {/* Assessment Type */}
              <div>
                <label htmlFor="assessmentType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Assessment Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="assessmentType"
                  name="assessmentType"
                  value={formData.assessmentType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                  disabled={isSubmitting}
                >
                  <option value="coursework">Coursework</option>
                  <option value="mock">Mock Exam</option>
                  <option value="final">Final Exam</option>
                </select>
              </div>

              {/* Grade Preview */}
              {formData.marks && formData.componentId && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Grade Preview
                  </label>
                  <div className="px-3 py-2 bg-slate-100 dark:bg-slate-600 rounded-lg">
                    {(() => {
                      const component = IGCSE_COMPONENTS.find(c => c.id === formData.componentId);
                      if (component) {
                        const marks = parseFloat(formData.marks);
                        const percentage = calculatePercentage(marks, component.maxMarks);
                        const grade = calculateIGCSEGrade(percentage);
                        return (
                          <div className="flex items-center space-x-2">
                            <span className={`font-bold ${getGradeColor(grade)}`}>{grade}</span>
                            <span className="text-slate-600 dark:text-slate-400">({percentage}%)</span>
                          </div>
                        );
                      }
                      return null;
                    })()
                    }
                  </div>
                </div>
              )}
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                placeholder="Add any notes about this assessment..."
                disabled={isSubmitting}
              />
            </div>

            {/* Error Message */}
            {validationErrors.general && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                <p className="text-sm text-red-600 dark:text-red-400">
                  {validationErrors.general}
                </p>
              </div>
            )}

            {/* Form Actions */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-sky-600 hover:bg-sky-700 disabled:bg-slate-400 text-white px-4 py-2 rounded-lg transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : (editingAssessment ? 'Update Assessment' : 'Add Assessment')}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Assessments List */}
      <div className="space-y-3">
        {assessments.length === 0 ? (
          <div className="text-center py-8 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600">
            <svg className="w-12 h-12 text-slate-400 dark:text-slate-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-slate-500 dark:text-slate-400">No IGCSE assessments recorded yet</p>
          </div>
        ) : (
          assessments.map(assessment => (
            <div key={assessment.id} className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-slate-900 dark:text-slate-100">
                      {assessment.componentName}
                    </h4>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getAssessmentTypeBadgeColor(assessment.assessmentType)}`}>
                      {getAssessmentTypeLabel(assessment.assessmentType)}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400">
                    <span>Marks: {assessment.marks}/{assessment.maxMarks}</span>
                    <span>Percentage: {assessment.percentage}%</span>
                    <span className={`font-bold ${getGradeColor(assessment.grade)}`}>
                      Grade: {assessment.grade}
                    </span>
                    <span>Date: {assessment.dateAssessed.toLocaleDateString()}</span>
                  </div>
                  
                  {assessment.notes && (
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 italic">
                      {assessment.notes}
                    </p>
                  )}
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(assessment)}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 p-1"
                    title="Edit assessment"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(assessment.id)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-1"
                    title="Delete assessment"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default IGCSEAssessmentManager;