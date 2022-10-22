There are polygons that have been encoded in json.  How to import them into the server side app ?

As part of the DOS startup sequence, we could import the file if required.

1. Set an environment variable with a path to the json file of geometry.  At boot, load this up.  Do the same for vite.  Check the file hasn't changed from what we expected.  

Import the geometry directly into the browser, and display it based on a global variable attached to `window`.  This would provide the least hassle, until we can get editing sorted.  No, since need to do polygon calculations inside a reducer.

