
>[!tip] Created: [2025-05-29 Thu 10:40]

>[!question] Targets: 

>[!danger] Depends: 

sometimes a function may return an iterator for streaming progress, then return a final value.

this should be supported out of the box ?

## Consuming the final value

The ergonomic `for await…of` loop **throws the final value away**, because the loop ends as soon as `done` is `true`. To grab it you have to stay one step lower-level:

```ts
for await (const n of it) {
  console.log(n);           // Alice, Bob
}

const last = await it.next(); // { value: 2, done: true }
console.log(last.value);      // → 2
```
