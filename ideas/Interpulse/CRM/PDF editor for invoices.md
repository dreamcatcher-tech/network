The CRM needs to produce invoices in PDF form.  Ideally we would have a nice friendly inline wysiwyg editor so staff could produce the invoices themselves, but an intermediate step that could have equivalent results is possible.  

The editor should also handle email drop generation, but this can be separated and made as pure html if needed.


## React Construction
By using [react-pdf](https://react-pdf.org/repl) we can provide a reply that lets the pdf forms be generated in code using react components.  This is the cleanest and most efficient way of coding and generating pdfs, but the downside is that it is not very friendly for the staff to use.  This is a great middle ground between making a fully staff usable editor and providing the templates in compile time code.

## Markdown to PDF
Secondly, we might use markdown to generate an html page, and then render that in pdf.  This is a heavier option as some [libraries](https://www.npmjs.com/package/markdown-pdf) use a headless browser to render and print the pdf.

## Pandoc from docx
We can get the staff to make their template in ms word, upload the docx, with some template strings such as {{customer-name}} and then generate HTML from that.

We should check what mailchimp and other popular mail generators use, and see if we can copy any of their tooling.