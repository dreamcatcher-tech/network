If a PDF form is made, then we can populate that template with data relevant to the customer.
Might be able to write the manifest lines using pdf-lib, reducing the gymnastics required.

## Interface Options
Loading the template is always async.  Interface has to allow for that.
Sometimes we want to do a single invoice, other times all invoices, or a subset, or the invoices plus the runsheet for each Manifest.

### `useInvoice( templateUrl, customer ) -> [ ...pages]`
Given a template url and a customer complex, return a PdfPage with the form flattened.

### `useManifest( complex ) -> [isReady, pdf]`
Create all runsheets for all sectors in a single pdf

### useInvoiceTemplate()
Loads up the pdf form ready for use

## Uses

### With Manifest
2. Create output pdf using pdf-lib
1. Generate the manifest pdf as a standalone pdf in blob form
3. Load manifest into output pdf using insertPage
4. Load the invoice template pdf from bytestream
5. For each customer:
	1. Make a copy of the document
	2. fill in the form using the given customer
	3. flatten the document
	4. insert each of its pages in the output pdf
5. Repeat for each sector in the collection cycle

### Show a single invoice
1. Load the invoice template
2. Fill in the

## Status during processing
Handling up to 1,000 invoices is slow for the system, so some progress needs to be shown.

## Async Iterators
The PDF generation should be an async iterator so that it can break the main UI thread, and so it can provide updates on progress.  Process is reported in pages generatored

Process:
1. Generate the output pdf.
2. Estimate the total page count as 1 manifest + N invoices
3. For each sector:
	1. generate the manifest
	2. copy each page into output.pdf
	3. update the total page count
	4. generate each invoice, updating the total page count each time
4. Display indeterminate progress while saving the pdf
5. Display total PDF size, name, and buttons to open or download

### Functions:
#### manifestPage( sector ) -> pdf
#### invoice( customer, template ) -> pdf
#### merge( base, donor ) -> pageCount