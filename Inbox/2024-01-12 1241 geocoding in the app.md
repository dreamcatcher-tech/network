
>[!tip] Created: [2024-01-12 Fri 12:41]

>[!question] Targets: 

>[!danger] Depends: 

Can be completely independent of the customer, since we only care about the address.

Can require to select a given customer before geocoding.

Present the geocoding component, that is prepopulated, and headed up by the customers name.
closing the geocoder reverts back to the last command.  When they select an output, then this dynamically puts the value in the text area, by way of a reference.  We will decompose the reference and add it as an annotation.  So the text field only sees a slug, and then we put the gps coords in later.  Displaying should also treat it the same.

We can render this as a react component in the chat, to indicate what the user said.  These same views would occur when the bulk geocoder is running, where each individual update can be viewed with the chat UI to show how it walked thru different items.  This react element can be used to display the markdown view of the customer.

Geocoding should be able to execute headless when we want to run it on a large number of customers.  Can require human intervention.