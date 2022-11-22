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

