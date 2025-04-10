
>[!tip] Created: [2025-04-10 Thu 19:27]

>[!question] Targets: 

>[!danger] Depends: 

```ts
import { context, trace } from "npm:@opentelemetry/api@1";
```

This means we can use the context of the span to also provide the context for the effect, and hopefully be able to retain debug source code.