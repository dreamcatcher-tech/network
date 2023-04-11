
>[!tip] Created: [2023-03-23 Thu 13:00]

>[!question] Targets: 

>[!danger] Depends: 

Interface that has an async request that inflates the paths we want to read, and then one that reads those paths.
```js
await map.ensure(['key1', 'key2', 'key3'])
await map.ensure('user-*')
const value1 = map.get('key1')
const value2 = map.get('user-34')
const throwError = map.get('key4') // will throw if the map *might* have this
```

By making the links in the internal structure be linkable in pulses, we can make arbitrarily large maps.  We can use this data structure for network, but also expose this to developers for their own data structures in state.

We may allow devs to use the punching out method for keys in the state that they don't want to make be part of the state, because they know they can be efficient with space.

Provide an interface that looks like map, but each key is a child chain.  So updating the children can be done in sync model before a final commit, which updates the children.