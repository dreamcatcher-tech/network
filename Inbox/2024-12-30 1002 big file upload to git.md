
>[!tip] Created: [2024-12-30 Mon 10:02]

>[!question] Targets: 

>[!danger] Depends: 

If we get the client to upload directly to an S3 bucket, then we do not need to process it ourselves.

Then when it has loaded, we would check it, or process it, but using high bandwidth this should be fast.

If we could get the object hashed as sha1 then this would be perfect - we can look at its size and know that we sent it uncompressed ? 