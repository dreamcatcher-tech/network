
>[!tip] Created: [2024-08-07 Wed 13:30]

>[!question] Targets: 

>[!danger] Depends: 

Git can achieve the same by doing squash merging.

If pijul was how we stored all the intermediary steps, but git was a periodic export function, this might work more efficiently, without losing any features.

need pijul in wasm or able to be run in deno deploy.

So turns out they run their backend on cloudflare workers using wasm and ts.
So we should be able to use a version and run natively using pijul, but able to create or recreate a git commit at any point.  And we should record when a git version was published, so we can recreate it given the git commit.

We would walk pijul like git.

If these running repos could also store raw pijul or git repos, using the same backend components, that would probably be better ?

So then a project, with all its tickets and history, is still just another pijul repo.