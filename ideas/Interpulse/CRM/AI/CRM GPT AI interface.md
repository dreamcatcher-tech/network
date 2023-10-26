
>[!tip] Created: [2023-05-24 Wed 12:17]

>[!question] Targets: 

>[!danger] Depends: 

Make a chatgpt style interface to the system to answer queries and update customer records.

ask for changes, system summarizes what to do, asks your approval.

use an offline chatbot to work without an internet connection ?

Use chatbots adversarially to merge changes between systems ?

Listen in to phone conversations and start to pull up records based on what the customer is saying.  Then suggest things that the operator should say.  Ultimately, might be able to do away with the operator, or have the operator be purely text based ?

Have people watching conversations occur, watching what the machine is planning to say next, then getting involved when they see it going wrong.

Allow for reconfigurable UIs to be made rapidly, and then the customer can train the interface to pick the data they want.  So they can describe a UI layout they want, and name things how they want, and then they can select the examples of the data they want to show up in certain boxes, and optionally some transforms they want on the data.  Then their interface is always generated live for them based on the latest data.

Can also throw up warnings about things that look weird in the app ?

Complex free text queries that are iterated upon: "show me all the customers with a pricing override, but only those that were changed in the last year.  Now remove everyone in hamilton."

This could become the job of SM to prompt for the inputs to be correct, and TT would handle the data model.  This would be cheaper than paying someone to build each report in the tool, particularly as solving the prompts mean solving more general cases which all our products would benefit from.

? Could we embed each customer record, so that anything like something could be returned ?
This might let us answer much more general questions ?

So there would be a local AI chain, and a server side AI chain ?
Server side would be connected to the dreamcatcher, local was simply for their user chain ?
If they sync the local chain with server then we can use it for testing.
