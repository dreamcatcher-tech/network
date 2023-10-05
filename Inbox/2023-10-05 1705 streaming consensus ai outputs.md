
>[!tip] Created: [2023-10-05 Thu 17:05]

>[!question] Targets: 

>[!danger] Depends: 

If multiple solutions are required to reach quorum, but the output may take a while, we want a good UX where they get streamed results back. 

What we can do is stream the results in to the packet, and whenever each solution matches in quorum, this is streamed to the client.  Depending on the use case the client may use the furthest along, with some reputation checks.