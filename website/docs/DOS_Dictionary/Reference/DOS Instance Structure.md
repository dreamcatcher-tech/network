Each DOS instance is related to one and only one user, although a user can have multiple instances.

The structure is a hierarchical folder structure, with each level of the tree containing an Object, the functions available to that Object and the data stored within the schema of that Object.

The default tree on spinning up the instance is as follows:
    
    /   /* The root of this instance:user pair */
	
        bank/  {purchase() displayBalance()}
        addresses 
            /* your friends and networks of friends */
            smax_example_address
        appStore/   
        catalogue/
            /* A required App that allows App discovery */
            app1/ 
                /* An example of a listed install bundle for an app */
            app2/ 
                /* As above, and so forth... */
        tools/
            appStoreRegistry/ 
                /* A required App to make install bundles available to others from this user */
            apps/  
                /* The location for all available apps */
                myApp/  
                    /* The location of an installed app */
                        -> /net/spynet.com:/dos/something
                dreamcatcher/ 
                    /* an installed app with sub-Objects */
                    projects/ 
                        /*A sub-Object to Dreamcatcher (in this example) */
                crm/  
                    /*Another installed app, and so forth… */
                 
                app1/
                    net/
                        -> /net/app1.rhubarb.com:/usage
        files/
            memoirsOfAScotsman.txt // covenant: textfile covenant, binary: data 
        share/
            -> /files/memoirsOfAScotsman.txt 
        dev/  
            /* location of chainID’s of running UI instances for this user */
            tty1/ /* An example of a running browser instance */
            tty2/ /* An example of a running mobile app instance */

        net/ { search() }
            spynet.com:/dos/something
            tartan.net:/incoming/email
            app1.rhubarb.com:/usage -> /apps/app1/net

        governance/
            governor/ (self) // stgithub -> s & t -> self
