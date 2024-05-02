
>[!tip] Created: [2024-05-02 Thu 17:11]

>[!question] Targets: 

>[!danger] Depends: 

Use all of a persons emails as a RAG, so we pull in several that look similar.
Use parallel gpt assessments to determine similarities.
Once we have them, we use them directly in the prompt to guide the response generation.

This means that we can show the user what emails of their were used.

They can tell us when these emails are wrong and select other ones using the search nearness.

We can build a semantic index first, where we categorize the topics and types and other data to make the emails more vector searchable.