Each customer needs their own custom `.jsx` component for the invoicing templates they each want to use.  The options for inserting this in the running codebase are:
1. Make them fully public if customer is ok
2. Use a wysiwyg editor to generate html that gets wrapped in pdf renderer
	1. store the html in the database
3. Use a private build to wrap the webdos components
4. Develop in a private fork, then split the components out later

## What are Templates ?
They expect a [[Complex]] which contains the current customer, 