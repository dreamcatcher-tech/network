
>[!tip] Created: [2024-01-02 Tue 11:27]

>[!question] Targets: 

>[!danger] Depends: 

So we can move formData back into state, schema gets set whenever the template gets updated, and at the same time the API gets set as well.

This is so that API can be determined by doing a read only.

The API can refer to a path, so that it can point to its parent action.
The API is a json schema, which supports reference in schemas, so we just make a reference to the parent or the template thing.

But does this matter so much in an NL world ?

It matters when it comes to making function calls in and out of the objects that do mechanical things.

General pattern of calling something that runs some AI is to return back the conversations that were had with the user, or at least a summary.  The conversation could be provided by the system and is always returned with any calls that allow conversation with the user.