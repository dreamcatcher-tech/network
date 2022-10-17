Being able to 'punch out' some piece of state and refer to a child chain is useful.  But we need a special object, like how IPLD uses [Links](https://ipld.io/docs/schemas/features/links/) which get escaped out of the JSON.

Resisting the urge to allow arbitrary IPLD data in the state, this would require our own implementation.

A child chain is special in that it is a piece of mutable state - it can change over time, and so it is not the same as a strict content based link.  This special escape element could be used to refer to any chain we like using a series of conventions:

```js
child: 'stringWithNoPathing'
peer: '/some/thing/in/the/../same/appComplex'
remote: '/mtab/some other chain'
unmounted: '/dnsServer/someName/some chain'
hashbased: '/raw/Qmasdfwere/something'
```

Then we could also allow referencing a specific pulse in a chain, and specifying the binary of a chain or a specific pulse.