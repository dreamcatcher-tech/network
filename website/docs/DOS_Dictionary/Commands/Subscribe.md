A function that executes on a block being produced by another chain.  The block triggers the event, but whether or not the function carries out any action is dependent on that function.

Filling data in the instance generated depends on one of three contexts:
Data is prompted from a UI
Data is passed using parameters in the command line.
Data is partially passed in the command line, in which case the missing data is prompted for on the command line.
The process of querying the user for more information can take place in the UI and the cli simultaneously.

E.g. using the example template below:


    cd /apps/myApp
    ./add --name 'helloApp' --myData { name:‘keyOne', amount: 666 } 

NB, this uses the example template in template.
Where ‘--name’ is a top-level field of this Object type, and ‘myData’ is a top-level field of a Branch of that Object.

Following this command:

    ls

Returns: 
     
    {‘helloApp’, 1}
