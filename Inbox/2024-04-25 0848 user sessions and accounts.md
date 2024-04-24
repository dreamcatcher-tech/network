
>[!tip] Created: [2024-04-25 Thu 08:48]

>[!question] Targets: 

>[!danger] Depends: 

- someone comes in anonymously
	- for the first time
	- returning
	- refreshes the tab
- someone becomes authenticated via github
	- their work is transferred to their authenticated home account

In a remote repo like the CRM, how will users safely authenticate with it.

Users needs read permissions to the repo and write permissions, where writes should go thru a session chain.

Would the users want to have multiple sessions open with multiple repos ?
Their clients seem simpler if all session activity came into a single chain, and then that was relayed out to a direct connect

If the session / network chain with the CRM was used by multiple user sessions, then the USER looks like a single entity fo the CRM even tho the SESSIONs may be different.