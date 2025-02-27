
>[!tip] Created: [2025-02-23 Sun 19:26]

>[!question] Targets: 

>[!danger] Depends: 

Make provider be redescribed as schemas.
Move all schema exports to be in a single file, like 'schemas' so they don't get pulled in from all over.

We can just attach a .then to an it-pushable object.  The type is:

```ts
export type AwaitablePushable<T, R> = AsyncIterable<T> & PromiseLike<R>
```
