
>[!tip] Created: [2023-02-02 Thu 22:15]

>[!question] Targets: 

>[!danger] Depends: 

Sometimes we want to blockbust part way thru an operation if we have taken too long.  Asking how long has elapsed and then acting on it needs to be deterministic.  To do this, we should reduce the precision of the timers to 100ms, and then we should record each request to get the time, and the response.

The deviation between observed and reported is within a tolerance, and if it is too great we fail the verification.

This can be tied to joule consumption, since this unit will take roughly the same amount of time to complete.