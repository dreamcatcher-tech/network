
>[!tip] Created: [2025-07-29 Tue 10:02]

>[!question] Targets: 

>[!danger] Depends: 

might get faster results, without lag etc if we use postgres as the object storage, or present an s3 compatible layer to it ?

then use buckets for actual big binary items, rather than git repos.

have a postgres cluster per region, and allow migration of repos ?

store packs in s3 buckets, which are used to populate the db rapidly.

use these dbs to agree on who is the leader for a given repo.
seems too hard to be fully decentralized from day 1, but if we make good isolated decisions we can solve each layer of problems gradually, rather than all at once.

easiest way to use postgres is to rewrite the iblobstore interface to just use postgres.

treat each region as a totally standlone hosting environment, and let repos migrate in the background based on usage.
makes us responsible for storage ourselves, which seems better.
if we ran our own cache purging to pack down the dbs daily, we could get better cost and perf.
seems better to manage our own storage, rather than rely on these bucket services, which are unpredictable, costsly, and can have their own complexity induced problems.

if we can, internally, treat the hosting as indeepdnent services, then we can easily split to commercially separate.

having a backup and a smooth recovery system seems easier than trying to have bulletproof systems that are huge, slow, expensive.

better yet, run with local servers, and run in consensus in the app, so that the db isn't being laboured with this generalized problem, since the app can optimize best, and we have hash based objects, so we get better recovery guarantees.  

So running in consensus, and have easy ways to migrate to new hosts, then we are running at bare metal everywhere we go, and the app itself is aware of the failures and handles them.  So each piece is super simple, self contained, and works to handle these per user, per purpose little databases that are ultra portable.

Recovering a single piece is easy.

sql is great for speed, and for quick lookups.

can treat a sql serevr as a service, so it runs as part of a napp, so the napp can do quicker things.  time is a spearate thing than recoverability / resiliency.