
>[!tip] Created: [2023-05-19 Fri 11:15]

>[!question] Targets: 

>[!danger] Depends: 

Can use S3 as the massive storage unit of the system, where all the pulses go.

Using consistency in S3, we can now set what Latest is viewed as.
Can set latest based on each block producer, so we can allow clients to pull down multiple independent instances and compare the results.

Benefit is unlimited bandwidth, particularly with a cloudflare cache in front of it all.

If we store only the approot, then the number of objects in each bucket should be significantly less.  Particularly if we exhaust each action before commiting the final pulse.

