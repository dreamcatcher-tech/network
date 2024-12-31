
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

Use a UI that is no chat whatsoever ?  Just purely widgets ?

The customer editing widget would require an api backend to make calls into, to do edits, and the do reads from.

The vercel front end would be making calls out to the deno db service.
This could be in the cloud, to make it easy to maintain, and it just has very strict api key access ?

Use a B2 key to secure the deployment.  Use a deno deploy db to host the git system.

Store the gps coords in one of the moneyworks fields, so we can start doing geocoding without having a db going ?

**Phase 1: Basic Data Retrieval and Display**

1. **Deno Connector Service**
    
    - A Deno service that directly reads data from MoneyWorks in its native format.
    - Exposes a minimal API (using ES6 modules) for fetching customer records.
2. **Next.js + React “Search” Component**
    
    - A React component (in Next.js) that queries the Deno service for customer records.
    - Displays basic search results (e.g., name, ID).

**Phase 2: Editing and Writing Back**  
3. **Deno Write-Back Logic**

- Extends the Deno service to handle updates back into MoneyWorks.
- Ensures data integrity and confirms each update with MoneyWorks before finalizing.

4. **Next.js + React “Edit” Component**
    - A detail view of a single customer record.
    - Allows edits to fields, sending updated data through the Deno service to MoneyWorks.

Strategy changes allowing rapid CRM development:

1. **Skipping the Platform for Now**  
    They decide to abandon integrating with their broader platform early on. Instead of using a generic solution, they will directly code a custom connector to MoneyWorks, because their new AI-driven tooling makes custom coding faster and cheaper.
    
2. **Direct MoneyWorks Format**  
    Rather than converting MoneyWorks data to a more “friendly” format, they will keep it in the MoneyWorks schema. This avoids building a translation layer, cuts complexity, and speeds up development.
    
3. **Fast, Minimal UI**  
    They initially plan just a quick read-only browser view of MoneyWorks data. Editing will come later. They emphasize it will be “ugly but works,” deferring any fancy UI to a later phase.
    
4. **Local Deployment First**  
    Rather than hosting in the cloud, they propose running the service on the client’s local machine. This removes authentication hurdles and relies on the office network for security, postponing more robust security measures.
        
5. **New AI-Driven Development Process**  
    They highlight how recent AI tooling makes coding almost trivial compared to previous methods. The shift is to leverage these tools for faster delivery, even if it means dropping parts of their original platform vision.
    
6. **Potential Future Investment Model**  
    Instead of purely charging for software, they raise the idea of a possible investment arrangement. They want to install a working solution first before discussing any long-term financial or partnership details.

what about using a postgres db, like what is already set up in the UI sample for the bots, and just storing the xml directly in the postgres db ?
near zero effort, but completely throw away code.

Can't decide if we should run the web app locally, or run it remotely and just run the api locally, or run the api in the actual cloud.

We could just use files on disk to store the blob objects for now ?
Just delete old ones, and do not use the history functions.