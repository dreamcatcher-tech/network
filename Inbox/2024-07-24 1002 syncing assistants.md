
>[!tip] Created: [2024-07-24 Wed 10:02]

>[!question] Targets: 

>[!danger] Depends: 

the assistant id needs to be stored somewhere central, like in the root or in a dedicated branch.
Possibly in the machines branch, since it already exists.

In the branch, we have the agent file, so we know we are the only ones with that version.
We should store here the oid of the agent file, and the accompanying assistant id.

Compare the oid of the agent file now, with the oid that is stored.

Needs to detect out of sync agent files with the main branch.

When the user is making modifications to local files, that is what matters.
So the hash of the file, and the hash of the tools matter.

agenthash is the oid of the agent file, and the hash of the tool object, hashed together.
Registry would hold the agenthash mapped to the assistantid