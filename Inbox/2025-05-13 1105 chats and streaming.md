
>[!tip] Created: [2025-05-13 Tue 11:05]

>[!question] Targets: 

>[!danger] Depends: 

if we had a separate app that handled only the chat calling and streaming, then it committed its results by calling the artifact api, we could avoid the gymnastics of having to do all this inside of artifact until we have more resources.

So that app runs the ai sdk and streams back responses, and can assemble queries using middleware maybe ? but then the finished results are saved to artifact.