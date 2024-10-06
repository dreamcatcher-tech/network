
>[!tip] Created: [2024-10-07 Mon 10:33]

>[!question] Targets: 

>[!danger] Depends: 

- gcp-us-east4
    
    ```
    Exception in queue handler Error: request already executed for commit: 966a52c2ced4980c41ad24e7a99143054f768a1a
        at Executor.execute (file:///src/exe/exe.ts:94:15)
        at eventLoopTick (ext:core/01_core.js:168:7)
        at async execute (file:///src/isolates/artifact.ts:138:21)
        at async file:///src/isolates/artifact.ts:107:27
        at async ext:deno_kv/01_db.ts:200:44
    ```
    
    10/7/2024, 10:26:48 AM
    
- gcp-us-east4
    
    ```
    Exception in queue handler AssertionError: commits are not equal
        at assert (https://jsr.io/@std/assert/1.0.6/assert.ts:21:11)
        at Accumulator.absorb (file:///src/exe/accumulator.ts:131:9)
        at Executor.execute (file:///src/exe/exe.ts:102:27)
        at eventLoopTick (ext:core/01_core.js:168:7)
        at async execute (file:///src/isolates/artifact.ts:138:21)
        at async file:///src/isolates/artifact.ts:107:27
        at async ext:deno_kv/01_db.ts:200:44 {
      name: "AssertionError"
    }
    ```