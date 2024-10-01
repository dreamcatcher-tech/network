
>[!tip] Created: [2024-10-01 Tue 15:38]

>[!question] Targets: 

>[!danger] Depends: 

Calculating the write amplification factor for Pijul vs GIT, we should be able to do several key operations using just GIT, and then mimic the same operations in Pijul using a commit comparator as opposed to implementing that logic in Pijul. 

For each GIT commit, we generate the equivalent change within Pijul and then record all the patches. From this we can determine which one has the best latency for writing and also right amplification factor. We can measure performance under large database sizes, large file counts.

So long as we could maintain a hybrid mode of operating, where git compatibility was maintained along with pijul as the backend, then we can make this work.  Git compatibility is crucial for integration with tools like github and others.

If the git metadata was treated like a patch in pijul, then we can manipulate it any way we like.

