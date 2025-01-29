
>[!tip] Created: [2025-01-30 Thu 07:52]

>[!question] Targets: 

>[!danger] Depends: 

Having the client interface not use parameter objects makes it a nicer interface to use.

But the issues is that server side these need to be unrolled from an action payload.

```ts
const action = {
	type: 'branch.fork',
	payload: {
		'@@args': [
			true,
			'some/string/arg'
		]
	},
	scope: { ... }
	files: {
		'some/file': Uint8Array[],
		'other-file': Uint8Array[]
	}
}
```

The standard for napps should be this files array, and we can send all that using multipart form data.  Basically anything that is binary should be sent as a file.