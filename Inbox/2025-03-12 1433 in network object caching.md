
>[!tip] Created: [2025-03-12 Wed 14:33]

>[!question] Targets: 

>[!danger] Depends: 

We could reduce the reliance on the S3 buckets by allowing each worker in a private network to act as the gateway for a particular sharded subset of all objects that have been read by other running agents.

Based on some tuning parameters like available RAM and available disk, we can pack out the RAM that is not in use and also retreat from it when it becomes under pressure from the application load so that we can avoid making costly S3 calls and also reduce the latency required.

We can not only pull in objects that are held purely in RAM, but we can also spread the pulling-in process across multiple live running nodes. Before a node shuts down one of its last jobs would be to hail Mary lob any objects it can to any other willing recipients that have spare resources available to take them in. 

This would be like a region-local S3 in RAM. 

This tool would be quite useful for anyone deploying Fly.io apps as it is a way of packing the containers more densely to make better use of the resources that are being purchased. 