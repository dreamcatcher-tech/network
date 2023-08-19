
>[!tip] Created: [2023-07-22 Sat 21:23]

>[!question] Targets: 

>[!danger] Depends: 

Often we want a crisp or its actions before it has loaded, and do not want to trigger an error.
A hook could be used where it resolves as soon as the crisp in question is available, if ever.

Would return a value once the crisp had become something we want.

```js
const actions = useActions( crisp, '../some/other/crisp')
```
```js
const state = useState( crisp, '../some/other/crisp/state')
```

Consumers of this can simply do an if check to see if the thing they want is there or not.