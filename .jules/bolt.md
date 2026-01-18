## 2024-05-23 - RPGContext Optimization
**Learning:** Context Providers must use `useMemo` for their value prop and `useCallback` for exposed functions to prevent unnecessary re-renders in consumers. Also, singleton event managers (like `RPGManager`) must have cleanup methods (`off`) to prevent memory leaks in React components.
**Action:** Always verify Context Providers are optimized and event listeners are cleaned up in `useEffect`.
