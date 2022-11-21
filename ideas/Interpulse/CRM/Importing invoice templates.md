Each customer needs their own custom `.jsx` component for the invoicing templates they each want to use.  The options for inserting this in the running codebase are:
1. Make them fully public if customer is ok
2. Use a wysiwyg editor to generate html that gets wrapped in pdf renderer
	1. store the html in the database
3. Use a private build to wrap the webdos components
4. Develop in a private fork, then split the components out later

## What are Templates ?
They expect a [[Complex]] which contains the current customer, 

## Notes
2. Storybook for each invoice template
3. Storybook for the manifest list of collections
4. Storybook of the complete manifest including invoices for all sectors
5. Opener code to trigger the browsers PDF renderer

Can we make the trigger code work for invoices in standalone mode ?

### Rewriting existing invoices
The customer has existing invoices that are intricately designed and fit for purpose.  We may be able to parse these items and then inject our text directly in them, to avoid having to design our own each time they want changes.  We could merge a whole string of pdf files into the manifests

1. Generate Manifest pdf pages, or use a monospaced font text page
2. Load the invoice template pdf using [pdf-lib](https://github.com/Hopding/pdf-lib#features)
3. Replace text in the template with instance values
4. Copy invoices to the end of the manifest pdf each time it is modified
5. render the blob in the browser window

Problem is accessing the text in the pdf - this is not supported by pdf-lib

### Using an image backdrop
We can take a screenshot of the existing invoices, and then use [react-pdf](https://react-pdf.org/) with css to write the text we need over the top.

This will increase the size of the file, but 

### Receive the invoices printed straight from moneyworks
If we were to receive all the invoices from moneyworks in a jumbled order, then we could make a pdf that joined them all together.  So we generate the manifest checklist in order, then the user uploads all the invoices from moneyworks, then a single large pdf is generated with all the invoices inside.

This means we do not have to handle invoice and bank balance data immediately.  The only thing we would need to handle is sectors, run order, customer collection dates.  These could all be imported into a large json object and loaded directly in the browser.  This may circumvent the blockchain initially, just to get up and running.

### Generate invoices as HTML
Then use the system print preview to 

## Decision
We can either use the existing invoices, or we can strip down what the invoices contain, and work