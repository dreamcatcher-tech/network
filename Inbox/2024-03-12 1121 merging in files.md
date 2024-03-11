
>[!tip] Created: [2024-03-12 Tue 11:21]

>[!question] Targets: 

>[!danger] Depends: 

api merge files

Should be able to call a single function to forcibly merge the files that change in the branch action.  

```js
await api.mergeFiles( promise )
```

? how to get a reference to the action ?
Could attach it to the promise object that was returned, as an id keyed by a symbol.
So when the promise is passed in, we know how to interpret it.
Can attach a symbol that only we can read, so you have to pass the promise we gave you.

The outcome can have stats attached to it, or allow further interrogation using symbols.