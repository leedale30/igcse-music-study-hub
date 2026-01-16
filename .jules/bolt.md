## 2025-05-23 - Event System Memory Leak
**Learning:** The `RPGManager` singleton implements a custom event system (`on`/`emit`) but was missing an `off` method for removing listeners. This caused `RPGContext` to accumulate event listeners on every mount, leading to memory leaks and multiple executions of handlers.
**Action:** Always verify custom event systems include cleanup methods (`off`, `removeListener`) and ensure consumers (useEffect) use them.
