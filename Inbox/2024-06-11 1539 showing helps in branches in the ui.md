
>[!tip] Created: [2024-06-11 Tue 15:39]

>[!question] Targets: 

>[!danger] Depends: 

Fetching the session files seems to be different for while it is running vs when it returns.

When the branch has returned,

What we do know is the commit at the time of the fork.
We can control the pid of this branch too, as it can be strongly set without error.

If we control the pid

We could trace the pid client side by looking at the io.json file in detail ?
We have open branches, so we could just look at each of them ?

Is it true that the return of any branch request will always be executed immediately, in the commit that holds the merge in ?
No.

Can we know exactly what branch name will be created when we execute something ?

If we store a counter each time we branch, then we hard set the branch, then we can know we are collision free.

Reading the io.json in the client, we can interpret exactly what branches were formed and when.

Getting the branches back when they close is not so easy since the io.json is flushed.

So pulling down an io.json years in the future will not yield the branches without walking it backwards, which is annoying and expensive.
So if the session stored the commit that the tool call came back in on, that should be sufficient.