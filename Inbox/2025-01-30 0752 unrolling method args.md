
>[!tip] Created: [2025-01-30 Thu 07:52]

>[!question] Targets: 

>[!danger] Depends: 

Having the client interface not use parameter objects makes it a nicer interface to use.

But the issues is that server side these need to be unrolled from an action payload.

```ts
const action = {
	type: 'branch.fork',
	params: {
		arg1: true,
		arg2: 'some/string/arg'
	},
	params: [
		{ 
			key: value,
			key1: value1
		}
	]
	scope: { ... }
	files: {
		'some/file': Uint8Array[],
		'other-file': Uint8Array[]
	},
	sequence: 2342,
	signature: 'f223fasdfqwefxyz'
}
```

The standard for napps should be this files array, and we can send all that using multipart form data.  Basically anything that is binary should be sent as a file.

So if we made a format that allowed for functions to be passed in, for napps ? 

The napps action interpreter would process these.

we need not have payload ?
payload could be always an array, which represents args ?
If payload was not an array, then it is a single object arg.

Issue is if the payload arg needs to be an array ? in this case we'd need to put it inside an array ?

In json-rpc, we can do named p

So openai choosing just a single object is sort of unique.  If we support rpc style calls, we can have many different ranges.

If payload is an array

Or we just call it params