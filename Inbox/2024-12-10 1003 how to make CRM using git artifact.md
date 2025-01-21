
>[!tip] Created: [2024-12-10 Tue 10:03]

>[!question] Targets: 

>[!danger] Depends: 

design how the UI will work first.

make git be some kind of crud based file update service that takes direct write and read requests in.
Merges back to the source repo.

If all the LLM work happened in vercel, and artifact was receiving function calls only, what is the api that would get used ?

Need some kind of an API in to use it like a database, where tool calls result in system level api calls, which are the apis that would be available to all napps ?  basically the crud operations plus historical history.