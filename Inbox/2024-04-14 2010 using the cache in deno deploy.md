
>[!tip] Created: [2024-04-14 Sun 20:10]

>[!question] Targets: 

>[!danger] Depends: 

This would work exceptionally well for git data, since it is done by hash and we have an easy backup.
We only ever to writes, never mutations.

```js
const cache = await caches.open("my-cache");  
  
Deno.serve(async (req) => {  
	const cached = await cache.match(req);  
	if (cached) {  
		return cached;  
	}  
	  
	const res = new Response("cached at " + new Date().toISOString());  
	await cache.put(req, res.clone());  
	return res;  
});
```