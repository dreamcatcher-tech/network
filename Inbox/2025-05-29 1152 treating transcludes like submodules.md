
>[!tip] Created: [2025-05-29 Thu 11:52]

>[!question] Targets: 

>[!danger] Depends: 

if we store them in the meta branch, then they can be referred to by any branch.

their management and communication can be independent of any given branch.

so creationg and management requires system level git calls.

but seems better to store them as real objects ? and maybe store deduplicated state for each one in meta ?

we could store as gitlink object, then the system resolves them how it sees fit ?

so if you have the repos in question then it can retrieve it there - a broken link can be healed in a range of ways, and is cryptographically assured to be correct.

the question comes down to should we pull all the objects of each transclude into the repo that points at it, or should we simply keep the repos it points to as copies that remain independent ?

if in the repo, then we rely on the backing object store to be somehow shared between all our repos.  We burden all cloners with pulling in this whole info.

but if we keep them separate, then we can do checks to ensure we have access to what they point to, and we can download copies of these, like cloning a pointed to repo, possibly shallowly.  or each actor maintains a transclude dump where they haul in all the objects that can be used to recreate what the transclude points at, avoiding the full repo clone.  acts like a transclude clone.

so we should register each external reference, so that we can check for availability rapidly. other wise have to walk every file of every branch to see if it is a transclude.

or store trans at a given filesystem path ?
or store for each branch, we have a transcludes list ?

storing them in soul, with massive sharding, means that they can also be communicated without any leakage.

So they should remain flat, in soul, and have pointers to which branches contain them at what commits to allow reverse lookup.

keeps it all portable, contained, text files.