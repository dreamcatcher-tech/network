
>[!tip] Created: [2025-03-11 Tue 11:03]

>[!question] Targets: 

>[!danger] Depends: 

```json
"side-effect-function-in-context": {
  "description": "Treats a context object as the module that fulfills the napp function call",
  "parameters": {},
   // if its an array, it means a path in the context
   // requires the shape of the context to be supplied somewhere
   "module": ["db", "some-function"],

      "context": true

    },
```

I'm not sure how the format exactly should go 

The overall idea is that we can treat the context as a form of a module, and so the tool itself may simply just call an object that is on the context, and that is how the tool is fulfilled. This avoids the need to have some extra function code when all it's going to do is call the context object function anyway. 