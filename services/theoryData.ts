// Theory pages metadata organized by chapter
export interface TheoryTopic {
    id: string;
    title: string;
    file: string;
}

export interface TheoryChapter {
    number: number;
    title: string;
    topics: TheoryTopic[];
}

export const theoryChapters: TheoryChapter[] = [
    {
        number: 1,
        title: 'Basic Concepts',
        topics: [
            { id: '01-00', title: 'Introduction to Basic Concepts', file: '01-00-BasicConcepts.html' },
            { id: '01-01', title: 'Pitch', file: '01-01-Pitch.html' },
            { id: '01-02', title: 'Notation', file: '01-02-Notation.html' },
            { id: '01-03', title: 'Octave Registers', file: '01-03-OctaveRegisters.html' },
            { id: '01-04', title: 'Accidentals', file: '01-04-Accidentals.html' },
            { id: '01-05', title: 'Enharmonic Notes', file: '01-05-EnharmonicNotes.html' },
            { id: '01-06', title: 'Practice Exercises', file: '01-06-BasicConceptsPracticeExercises.html' },
            { id: '01-07', title: 'Alto and Tenor Clef Registers', file: '01-07-AltoAndTenorClefRegisters.html' },
        ]
    },
    {
        number: 2,
        title: 'Major Keys',
        topics: [
            { id: '02-01', title: 'Half Steps and Whole Steps', file: '02-01-HalfStepsAndWholeSteps.html' },
            { id: '02-02', title: 'The Major Scale', file: '02-02-TheMajorScale.html' },
            { id: '02-03', title: 'Major Key Signatures', file: '02-03-MajorKeySignatures.html' },
            { id: '02-04', title: 'Practice Exercises', file: '02-04-MajorKeysPracticeExercises.html' },
        ]
    },
    {
        number: 3,
        title: 'Minor Keys',
        topics: [
            { id: '03-01', title: 'Minor Scales', file: '03-01-MinorScales.html' },
            { id: '03-02', title: 'Minor Key Signatures', file: '03-02-MinorKeySignatures.html' },
            { id: '03-03', title: 'Scale Degree Names', file: '03-03-ScaleDegreeNames.html' },
            { id: '03-04', title: 'Practice Exercises', file: '03-04-MinorKeysPracticeExercises.html' },
        ]
    },
    {
        number: 4,
        title: 'Rhythm',
        topics: [
            { id: '04-01', title: 'Time Signature', file: '04-01-TimeSignature.html' },
            { id: '04-02', title: 'Durational Symbols', file: '04-02-DurationalSymbols.html' },
            { id: '04-03', title: 'Dots and Ties', file: '04-03-DotsAndTies.html' },
            { id: '04-04', title: 'Meter', file: '04-04-meter.html' },
            { id: '04-05', title: 'Tuplets', file: '04-05-Tuplets.html' },
            { id: '04-06', title: 'Common Notation Errors', file: '04-06-CommonRhythmicNotationErrors.html' },
            { id: '04-07', title: 'Practice Exercises', file: '04-07-BasicsOfRhythmPracticeExercises.html' },
        ]
    },
    {
        number: 5,
        title: 'Intervals',
        topics: [
            { id: '05-01', title: 'Introduction to Intervals', file: '05-01-IntervalsIntroduction.html' },
            { id: '05-02', title: 'Identifying Intervals', file: '05-02-HowToIdentifyIntervals.html' },
            { id: '05-03', title: 'Writing Intervals', file: '05-03-HowToWriteIntervals.html' },
            { id: '05-04', title: 'Inversion of Intervals', file: '05-04-InversionOfIntervals.html' },
            { id: '05-05', title: 'Compound Intervals & Transposition', file: '05-05-CompoundIntervalsAndTransposition.html' },
            { id: '05-06', title: 'Practice Exercises', file: '05-06-IntervalsPracticeExercises.html' },
        ]
    },
    {
        number: 6,
        title: 'Triads',
        topics: [
            { id: '06-01', title: 'Introduction to Triads', file: '06-01-TriadsIntroduction.html' },
            { id: '06-02', title: 'Lead Sheet Symbols', file: '06-02-LeadSheetSymbols.html' },
            { id: '06-03', title: 'Inverted Triads', file: '06-03-InvertedTriads.html' },
            { id: '06-04', title: 'Analyzing Chords', file: '06-04-AnalyzingChords.html' },
            { id: '06-05', title: 'Simple Sus Chords', file: '06-05-SimpleSusChords.html' },
            { id: '06-06', title: 'Summary of Triad Construction', file: '06-06-SummaryOfTriadConstruction.html' },
            { id: '06-07', title: 'Practice Exercises', file: '06-07-TriadsPracticeExercises.html' },
        ]
    },
    {
        number: 7,
        title: 'Roman Numerals & Cadences',
        topics: [
            { id: '07-01', title: 'Roman Numeral Chord Symbols', file: '07-01-RomanNumeralChordSymbols.html' },
            { id: '07-02', title: 'Diatonic Chords in Major', file: '07-02-DiatonicChordsInMajor.html' },
            { id: '07-03', title: 'Diatonic Chords in Minor', file: '07-03-DiatonicChordsInMinor.html' },
            { id: '07-04', title: 'Cadences', file: '07-04-cadences.html' },
            { id: '07-05', title: 'Practice Exercises', file: '07-05-RomanNumeralPracticeExercises.html' },
            { id: '07-06', title: 'Secondary Triads', file: '07-06-SecondaryTriadsInMajorAndMinor.html' },
            { id: '07-07', title: 'Interrupted Cadence', file: '07-07-InterruptedCadence.html' },
        ]
    },
    {
        number: 8,
        title: 'Seventh Chords',
        topics: [
            { id: '08-01', title: 'Introduction to Seventh Chords', file: '08-01-SeventhChordsIntroduction.html' },
            { id: '08-02', title: 'IV/5 Sus Chord', file: '08-02-IVover5SusChord.html' },
            { id: '08-03', title: 'Roman Numerals of Diatonic 7ths', file: '08-03-RomanNumeralsOfDiatonicSeventhChords.html' },
            { id: '08-04', title: 'Practice Exercises', file: '08-04-SeventhChordsExercises.html' },
            { id: '08-05', title: 'Dominant & Diminished 7ths', file: '08-05-DominantAndDiminishedSevenths.html' },
        ]
    },
    {
        number: 9,
        title: 'Harmonic Progression',
        topics: [
            { id: '09-01', title: 'Circle of Fifths', file: '09-01-CircleOfFifths.html' },
            { id: '09-02', title: 'Harmonic Rhythm', file: '09-02-HarmonicRhythm.html' },
            { id: '09-03', title: 'Shorter Progressions', file: '09-03-ShorterProgressionsFromTheCircleOfFifths.html' },
            { id: '09-04', title: 'Harmonic Function', file: '09-04-HarmonicFunction.html' },
            { id: '09-05', title: 'Exceptions Created by Sequences', file: '09-05-ExceptionsCreatedBySequences.html' },
            { id: '09-06', title: 'Subtonic VII in Pop Music', file: '09-06-SubtonicVIIinPopMusic.html' },
            { id: '09-07', title: 'Bestseller Progression', file: '09-07-BestsellerProgression.html' },
            { id: '09-08', title: 'i-VII-VI-VII Progression', file: '09-08-i-VII-VI-VII.html' },
            { id: '09-09', title: 'Practice Exercises', file: '09-09-HarmonicProgressionExercises.html' },
        ]
    },
    {
        number: 10,
        title: 'Non-Chord Tones',
        topics: [
            { id: '10-01', title: 'Introduction', file: '10-01-NonChordTonesIntroduction.html' },
            { id: '10-02', title: 'Passing Tones', file: '10-02-PassingTones.html' },
            { id: '10-03', title: 'Neighbor Tones', file: '10-03-NeighborTones.html' },
            { id: '10-04', title: 'Appoggiatura', file: '10-04-Appoggiatura.html' },
            { id: '10-05', title: 'Escape Tone', file: '10-05-EscapeTone.html' },
            { id: '10-06', title: 'Double Neighbor', file: '10-06-DoubleNeighbor.html' },
            { id: '10-07', title: 'Anticipation', file: '10-07-Anticipation.html' },
            { id: '10-08', title: 'Pedal Point', file: '10-08-PedalPoint.html' },
            { id: '10-09', title: 'Suspension', file: '10-09-Suspension.html' },
            { id: '10-10', title: 'Retardation', file: '10-10-Retardation.html' },
            { id: '10-11', title: 'Incomplete Neighbor', file: '10-11-IncompleteNeighbor.html' },
            { id: '10-12', title: 'Practice Exercises', file: '10-12-NonChordTonesPracticeExercises.html' },
            { id: '10-13', title: 'Suspension Writing & Analysis', file: '10-13-SuspensionWritingAndAnalysis.html' },
            { id: '10-14', title: 'Tonic & Dominant Pedals', file: '10-14-TonicAndDominantPedals.html' },
        ]
    },
    {
        number: 11,
        title: 'Melody',
        topics: [
            { id: '11-01', title: 'Motive', file: '11-01-MotiveSection.html' },
            { id: '11-02', title: 'Melodic Alteration', file: '11-02-MelodicAlteration.html' },
            { id: '11-03', title: 'Fragment', file: '11-03-FragmentSection.html' },
            { id: '11-04', title: 'Phrase', file: '11-04-PhraseSection.html' },
            { id: '11-05', title: 'Subphrase', file: '11-05-subphrase.html' },
            { id: '11-06', title: 'Practice Exercises', file: '11-06-MelodicAnalysisPracticeExercises.html' },
        ]
    },
    {
        number: 12,
        title: 'Pop/Popular Form',
        topics: [
            { id: '12-01', title: 'Verse-Chorus Form', file: '12-01-VerseChorusForm.html' },
            { id: '12-02', title: 'AABA Form', file: '12-02-AABAForm.html' },
            { id: '12-03', title: 'ABAC Form', file: '12-03-ABACForm.html' },
            { id: '12-04', title: '12-Bar Blues', file: '12-04-TwelveBarBlues.html' },
            { id: '12-05', title: 'Closed & Open Sections', file: '12-05-HarmonicallyClosedAndOpenSections.html' },
            { id: '12-06', title: 'Practice Exercises', file: '12-06-PopFormPracticeExercises.html' },
        ]
    },
    {
        number: 13,
        title: 'Phrases in Combination',
        topics: [
            { id: '13-01', title: 'Perfect Authentic Cadence', file: '13-01-PerfectAuthenticCadence.html' },
            { id: '13-02', title: 'Sentence Structure', file: '13-02-SentenceStructure.html' },
            { id: '13-03', title: 'Period Form', file: '13-03-PeriodForm.html' },
            { id: '13-04', title: 'Asymmetrical Period', file: '13-04-AsymmetricalPeriod.html' },
            { id: '13-05', title: 'Double Period Form', file: '13-05-DoublePeriodForm.html' },
            { id: '13-06', title: 'Phrase Groups & Chains', file: '13-06-PhraseGroupsAndPhraseChains.html' },
            { id: '13-07', title: 'Elision', file: '13-07-Elision.html' },
            { id: '13-08', title: 'Summary', file: '13-08-SummaryOfPhrasesInCombination.html' },
            { id: '13-09', title: 'Practice Exercises', file: '13-09-PhrasesInCombinationPracticeExercises.html' },
        ]
    },
    {
        number: 14,
        title: 'Texture & Accompaniment',
        topics: [
            { id: '14-01', title: 'Texture Overview', file: '14-01-Texture.html' },
            { id: '14-02', title: 'Chorale Texture', file: '14-02-ChoraleTexture.html' },
            { id: '14-03', title: 'Arpeggiated Accompaniments', file: '14-03-ArpeggiatedAccompaniments.html' },
            { id: '14-04', title: 'Block Chord Accompaniments', file: '14-04-BlockChordAccompaniments.html' },
            { id: '14-05', title: 'Afterbeats & Offbeats', file: '14-05-AfterbeatsOffbeats.html' },
            { id: '14-06', title: '3-2 Clave', file: '14-06-ThreeTwoClave.html' },
            { id: '14-07', title: 'Distinctive Bass Lines', file: '14-07-DistinctiveBassLines.html' },
            { id: '14-08', title: 'Instrumental & Vocal Effects', file: '14-08-InstrumentalAndVocalEffects.html' },
            { id: '14-09', title: 'Orchestral & World Ensembles', file: '14-09-OrchestralAndWorldEnsembles.html' },
        ]
    },
    {
        number: 15,
        title: 'Musical Elements & Analysis',
        topics: [
            { id: '15-01', title: 'The Elements of Music', file: '15-01-The-Elements-of-Music.html' },
            { id: '15-02', title: 'Eine kleine (Analysis)', file: '15-02-Eine-kleine-ii.html' },
            { id: '15-03', title: 'Creating Contrast', file: '15-03-CreatingContrast-5.html' },
        ]
    },
    {
        number: 16,
        title: 'World Music Theory',
        topics: [
            { id: '16-01', title: 'Global Scales & Modes', file: '16-01-GlobalScalesAndModes.html' },
            { id: '16-02', title: 'Indian Classical Structure', file: '16-02-IndianClassicalStructureAndRhythms.html' },
            { id: '16-03', title: 'Arab Takht Structure', file: '16-03-ArabTakhtStructureAndRhythms.html' },
        ]
    },
    {
        number: 17,
        title: 'Vocal Music',
        topics: [
            { id: '17-01', title: 'Word-Setting Techniques', file: '17-01-WordSettingTechniques.html' },
            { id: '17-02', title: 'Popular Song Structures', file: '17-02-PopularSongAndMusicalStructures.html' },
            { id: '17-03', title: 'Choral & Antiphonal Textures', file: '17-03-ChoralAndAntiphonalTextures.html' },
        ]
    },
    {
        number: 18,
        title: 'Dance Music',
        topics: [
            { id: '18-01', title: 'Tango & Salsa Rhythms', file: '18-01-TangoAndSalsaRhythms.html' },
            { id: '18-02', title: 'EDM Structure & Production', file: '18-02-EDMStructureAndProduction.html' },
            { id: '18-03', title: 'Production Techniques & Effects', file: '18-03-ProductionTechniquesAndEffects.html' },
        ]
    },
    {
        number: 19,
        title: 'Film & Game Music',
        topics: [
            { id: '19-01', title: 'Leitmotifs & Programmatic Devices', file: '19-01-LeitmotifsAndProgrammaticDevices.html' },
            { id: '19-02', title: 'Atonality & Chromaticism', file: '19-02-AtonalAndChromaticismInTension.html' },
            { id: '19-03', title: 'Adaptive Music & Loops', file: '19-03-AdaptiveMusicAndLoops.html' },
        ]
    },
    {
        number: 22,
        title: 'Modulation',
        topics: [
            { id: '22-01', title: 'Introduction to Modulation', file: '22-01-ModulationIntroduction.html' },
            { id: '22-02', title: 'Tonicization vs Modulation', file: '22-02-TonicizationVersusModulation.html' },
            { id: '22-03', title: 'Key Relationships', file: '22-03-KeyRelationships.html' },
            { id: '22-04', title: 'Diatonic Pivot Chords', file: '22-04-ModulationsWithDiatonicPivotChords.html' },
            { id: '22-05', title: 'Recognizing Key After Modulation', file: '22-05-HowToRecognizeAKeyAfterAModulation.html' },
            { id: '22-07', title: 'Modulations Without Pivot Chords', file: '22-07-ModulationsWithoutPivotChords.html' },
            { id: '22-08', title: 'Practice Exercises', file: '22-08-ModulationPracticeExercises.html' },
        ]
    },
    {
        number: 24,
        title: 'Binary & Ternary Form',
        topics: [
            { id: '24-01', title: 'Introduction', file: '24-01-BinaryAndTernaryIntroduction.html' },
            { id: '24-03', title: 'Minuet & Trio Structure', file: '24-03-MinuetAndTrioStructure.html' },
            { id: '24-06', title: 'Binary Principle', file: '24-06-BinaryPrinciple.html' },
            { id: '24-07', title: 'Ternary Form', file: '24-07-TernaryForm.html' },
            { id: '24-08', title: 'Rounded Binary vs Ternary', file: '24-08-DistinguishingBetweenRoundedBinaryAndTernary.html' },
            { id: '24-09', title: 'Practice Exercises', file: '24-09-BinaryAndTernaryPracticeExercises.html' },
        ]
    },
    {
        number: 25,
        title: 'Sonata & Rondo',
        topics: [
            { id: '25-01', title: 'Introduction to Sonata', file: '25-01-SonataIntroduction.html' },
            { id: '25-03', title: 'Rondo Form', file: '25-03-RondoForm.html' },
            { id: '25-04', title: 'Rondo Character', file: '25-04-RondoCharacter.html' },
            { id: '25-05', title: 'Sonata & Rondo Forms', file: '25-05-SonataAndRondoForms-6.html' },
            { id: '25-06', title: 'Practice Exercises', file: '25-06-SonataAndRondoPracticeExercises.html' },
            { id: '25-07', title: 'Sonata Form Structural Functions', file: '25-07-SonataFormStructuralFunctions.html' },
        ]
    },
];

// Helper to find a topic by ID
export function findTheoryTopicById(id: string): { chapter: TheoryChapter; topic: TheoryTopic } | undefined {
    for (const chapter of theoryChapters) {
        const topic = chapter.topics.find(t => t.id === id);
        if (topic) {
            return { chapter, topic };
        }
    }
    return undefined;
}

// Get all topics as a flat list
export function getAllTheoryTopics(): { chapter: TheoryChapter; topic: TheoryTopic }[] {
    const result: { chapter: TheoryChapter; topic: TheoryTopic }[] = [];
    for (const chapter of theoryChapters) {
        for (const topic of chapter.topics) {
            result.push({ chapter, topic });
        }
    }
    return result;
}
