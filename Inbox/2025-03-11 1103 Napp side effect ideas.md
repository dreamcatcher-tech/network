
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

What if I want to pass in part of the context as function args, without writing code ? eg: isomorphic-git, we could make a napp wrapper, but the context is part of what we want to pass.
This might need code to avoid being pointlessly general.