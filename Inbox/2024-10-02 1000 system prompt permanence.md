
>[!tip] Created: [2024-10-02 Wed 10:00]

>[!question] Targets: 

>[!danger] Depends: 

So what we could do is switch how a system prompt gets included in the thread to only include it when the agent gets switched to. So that would mean that we could take advantage of the prompt caching but also when the switch occurs that's where the system prompt is displayed in the thread for debugging purposes. Each time the API call is recreated, it is recreated using that system prompt in that same position. As there is no point in putting it right at the end.

