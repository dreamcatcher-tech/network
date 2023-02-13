
>[!tip] Created: [2023-02-14 Tue 11:21]

>[!question] Targets: 

>[!danger] Depends: 

Implicit hash equality of all items, so that reference equality is content equality too.
Use some fancy lookup tricks to find equivalent objects quickly.

Make it so async await is handled implicitly, so there is no need to wait for the promises.  Instead, getting a handle to the promise needs to be explicit. Like `asPromise( interchain('PING') )` 