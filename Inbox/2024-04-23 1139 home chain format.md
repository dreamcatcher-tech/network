
>[!tip] Created: [2024-04-23 Tue 11:39]

>[!question] Targets: 

>[!danger] Depends: 

This should be ulid/ulid/home ?

ulid/ulid/account
Means the account name is always available.
It does not break the PID format which is used for everything.

? what would they sync back to github as ?
ulid/home ?
ulid/home is easy
ulid/account is easy too

ulid/artifact/account
ulid/dreamcatcher-ai/account

ulid/ulid/HAL
sync back to github as accountname/HAL
upstream is defaulted as dreamcatcher-ai/HAL
This is simply tracked in the git repo as being one upstream.

In github, we own the dreamcatcher-ai account name, so they cannot collide with that.

github has special cases for account/account repos, hence why we cannot use those names.

Once we have account login, try pushing the home chain to github, and try merging from upstream HAL as well.

ulid/dreamcatcher-ai/HAL as the home, always ?
Push back to github asks them to fork it into their github account, then

Speed up the initialization of it by doing a straight repo copy from the system version of it.

Preparing a new anon chain includes a copy of the HAL repo.
Would be great if that did not copy any data, and just based it on the commits of this other repo.
Like a passthru filesystem, so when you ask for stuff, it is based on a specific commit of an account on another chain.

Can do the same thing for sharing repos between users.

Asking to provision home automatically does the sync for you, as a new user.

Should session chain be set by system as to what it will be for all users ?