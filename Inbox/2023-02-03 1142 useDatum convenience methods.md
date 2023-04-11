
>[!tip] Created: [2023-02-03 Fri 11:42]

>[!question] Targets: 

>[!danger] Depends: 

Return the state directly.
Include some methods for setting the datum

```js
const [datum, setDatum, meta] = await useDatum( '/some/path', { resolveSchema: true } )
// datum represents the formData
await setDatum( {...datum, changedData: 'changed' } )
const { schema, namePath, uiSchema } = meta
// schema would have been resolved from its reference
```

