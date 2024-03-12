
>[!tip] Created: [2024-03-12 Tue 12:34]

>[!question] Targets: 

>[!danger] Depends: 

Should all serial actions require a commit to resolve ?
Multiple serial requests can be started in a single commit, but they should not be allowed to complete more than one at a time.
Merge replies can come in any amount.


So side effects would be holding exelock busy.

Is execlock useless, given that one commit per action is required, so the commiter would be responsible for dispatching the next action ?

If we do not do a commit for each serial action, then we weaken repeatability, since the actions could interfere with each other.

Also doing accumulations in band causes problems since the filesystem might change right out from under the origin action, which reduces predictability.

Can we back out of this choice later, without serious damage ?
It is simpler to require a single commit per action.