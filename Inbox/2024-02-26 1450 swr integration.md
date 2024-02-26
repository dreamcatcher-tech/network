
>[!tip] Created: [2024-02-26 Mon 14:50]

>[!question] Targets: 

>[!danger] Depends: 

If we want to mock the useSWR hook, we need to inject it somehow.

options are:
1. context
2. props
3. wrap presentation components in useSWR components
4. provide a default but allow a prop to be passed that can be mocked

Subscription to patches
Should be able to control this using interactions, so we can step the system thru different results.
Server should just hold the connection open until a change occurs that is newer than what was asked for.