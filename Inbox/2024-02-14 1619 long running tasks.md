
>[!tip] Created: [2024-02-14 Wed 16:19]

>[!question] Targets: 

>[!danger] Depends: 

we could error the browser if the request takes too long to give a response, so that we can respond to the queue, else the KV will try to redeliver the message repeatedly.

Or, change the design so that it doesn't have long running promises.

If control was handed to the kv store, this is best, with a key watch or something to give the response ?