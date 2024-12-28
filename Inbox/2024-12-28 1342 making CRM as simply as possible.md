
>[!tip] Created: [2024-12-28 Sat 13:42]

>[!question] Targets: 

>[!danger] Depends: 

Run a nextjs app locally, and have a local version of deno deploy ?

use ngrok to access this application, so we can call on it to do things, rather than requiring it to have a webhook to artifact ?  Lets us tunnel it and browse the app too.

Use artifact as the db ?  yes, since we can download that.

This will avoid needing any kind of auth.

Run a local app, and run the cli on the same hardware.

run a local version of artifact, using artifact purely as a database.
no authentication, since running on localhost.

make the searchable widget so they can select the customer record of choice.
make a display widget tied directly to the fields of the xml file that populates a customer widget.
in browser, download all the customer records to the browser storage, and then build up an index locally ?
or make an index on artifact, download the index, pull each record as required.

could use llms to generate the view of the customer form the xml record ?