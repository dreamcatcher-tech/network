
>[!tip] Created: [2025-03-01 Sat 09:24]

>[!question] Targets: 

>[!danger] Depends: 

Or, in other words, how to know if a piece of supplied Napp code was waiting on an Artifact function or waiting on something else. 

This technique involves using Node.js's built-in `async_hooks` module to monitor and trace asynchronous operations (particularly promises) at runtime. The approach enables external observation of a function’s progression through multiple async steps, providing transparency into which async operation a function is currently awaiting.

**Overall Architecture:**

1. **Async Hook Initialization**
    
    - Initialize an `async_hooks` instance to globally observe async lifecycle events (`init`, `promiseResolve`, `destroy`).
2. **Metadata Association**
    
    - Maintain a mapping (`Map`) from async IDs (unique identifiers assigned by Node.js to each async resource) to custom metadata.
    - Metadata typically includes details such as function names, async step numbers, or descriptive identifiers.
3. **Instrumentation of Async Functions**
    
    - Wrap the function(s) you wish to observe with instrumentation logic to record or increment "steps" each time the function awaits a new promise.
    - This instrumentation updates metadata associated with the currently executing async context, ensuring clarity about progression through async calls.
4. **Event Emission for External Observation**
    
    - Emit custom events via an event emitter whenever:
        - A promise (async resource) is initialized (the function begins awaiting a new async operation).
        - A promise resolves (the function finishes awaiting and moves forward).
    - External listeners subscribe to these events, providing a real-time view into the function's progress.

**Benefits:**

- Offers precise, runtime visibility into async operation flow without modifying core logic significantly.
- Facilitates detailed debugging, tracing, and introspection.

**Considerations:**

- Slight performance overhead; primarily suitable for debugging or tracing scenarios.
- Requires careful management of metadata and cleanup to avoid memory leaks.

This architecture provides a robust and transparent way to track the exact progress and dependencies of asynchronous operations within Node.js applications.