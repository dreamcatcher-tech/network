The following is the top level structure of a Dreamcatcher Object.  Dreamcatcher Objects can perform various roles (e.g. representing Ghosts, Users, Projects, Assets, Contracts and so forth.). As such, not all of these top level Objects need be populated with data.  Likewise, populating some (e.g. Evidence) changes the utility of the Object.

## Dreamcatcher Object, Top Level

    Root:/  
        Dreams/
        Addresses/ 
        AppStore/
        Apps/
        Governance/ 			
        Attribution/
        Citations/
        Bank/ 
        Outputs/
        Evidence/
        Milestones/  
        Issues/
        Annotations/
        Comments/
        Contracts/
        Predictions/		
        Wishes/
        Messaging/
        PullRequests/
        Issues/
        Predictions/	
  

## Dreamcatcher Object, Example

    Project:/  
	      ?name: (string),
	      ?description: (string)
    Dreams/ /* these are the founding Wishes */
        Dream01 <# Project35/Wishes/Wish1
        Dream02 <# Project56/Wishes/Wish2
        ...,
    Addresses/ 
	      address01 -> project
	      address02 -> project
	      ...,
    AppStore/
	      catalogue/
		        app1/
		        app2/
	      tools/
		    appStoreRegistry/
    Apps/
	      myApp/
    Governance/ 			
        Algo01/
		        ?covenant: ~> govAlgoLibrary:/stockGovernanceAlgo01 
		        ?Governor: ~> LinusProject
		        ?Weight: 80
	      Algo02/
		        ?covenant: ~> govAlgoLibrary:/stockGovernanceAlgo02
        PassthroughAlgo/
            ?Project: ~> Project01		
            ?Weight: 30	
	      Algo03/
		        ?covenant: ~> Outputs/customGovernanceAlgo01@branch1
		        ?Weight: 49 
    Attribution/
	      Algo01/
		        ?covenant: ~> attributionAlgoLibrary/stockAttributionAlgo01 
			      ?weight: (number)
			      ?fixedParams: {...}
	      Algo02/
		        ?covenant: ~> govProj3$/Project3/Outputs/customAttributionAlgo01@branch2
		        ?weight (number)
		        ?fixedParams: {...}				
    Citations/
        Citation1 ~> Project2
        ?Citation2: “amazon.com/bookIread”
    Bank/ accountHistory: (Selector)}
	      self/
		        currencyName: (string), 
		        currencyBalance: (number)
	      votes/  showUpvotes(Selector), showDownVotes(Selector)
        externalAccount01/ 
            ?BankName: PumpAndDumpBase
            ?Accountname: myname
    Outputs/
	      project1/
        Ghost1:/
    Evidence/
        -> photoEvidenceGhost
    Milestones/  /* The sequence of things that need to happen */
        Milestone1/
            ?completionDate: 24122022
		        -> mileStoneAlgo01
            -> DeadTigerIssue01
            -> Issue01
            -> DeadTigerVegProject/Issues/vegCapture
        Milestone2/
            ?completionDate: 24122023		        
            -> Milestone1
            -> otherProjectWeDependOn/Outputs/tigerSoup
    Issues/
        Issue1/
            #> externalProject/Wishes/Wish434
		        ~> measurementAlgo01
		        ?Description: “Details of issue”
		        -> issue2
		        -> issue3
        Issue2/
	          ?Description: “Details of issue”
            #> Wish20
            -> issue1
            -> issue3
    Annotations/
    Comments/
    Contracts/
        Contract1 ~> ContractwithAlice
        Contract2 ~> ContractwithBob
    Predictions/		
    Wishes
        Wish01/ 
            /* Wish01 has an idea to improve someone else’s widget */
            ?Description: “make it pink please”
            Target1 ~> Project05/Output/Outputs/widget05_01
        Wish02/
            /* Has a request for Project06 to improve it’s speed on one of it’s widgets.  In response Project06 has created an Issue to deal with this Wish */
            ?Description: “Make it faster please”
            ?measurement ~> measurementAlgo(speed=50)
            Target1 ~> Project06/Output/Outputs/widget06_01
                Response <~ Project06/Output/Issues/issue06_01
        Wish03/
            /* Has a request for Project05.  Project05 likes the idea but hasn’t committed to doing it and therefore to making it an issue, so created a Wish within its Wishes to record the fact. Also, turns out there’s more demand.  Project08 also wants it blue and independently created their own Wish, targeting widget05_01. In addition, Project11 created a Wish and targeted Project01/Wishes/Wish02 which is visible to Project05 through the original Project01/Wishes/Wish02 */
            ?Description: “we need this in blue”
            Target1 ~> Project05/Output/Outputs/widget05_01
            IncomingLink <~ Project05/Issues/Wish05_01
        Wish05/
            /* Wish03 has this crazy idea, but didn’t know if anyone would want it.  Turns out Project06, who found it through search, really wants it.  Project06 created a Wish and linked back to it. */
            ?Description: “I think I can crack SSL”
            IncomingLink <~ Project06/Wishes/Wish06_01
        Wish06/
            /* Has a radical idea for a new kind of widget, and just threw it out there.  Project08 liked it a bit, so upvoted it.  But Project07 liked it so much they created an Issue to build it, then linked back to Wish04.*/
	          ?Description: “Radical Idea”
		        upVote(1) <- Project08_upvote
		        IncomingLink <- Project07/Wishes/Wish07_01 
        Wish07/
            /* Has a crazy ass big idea.  It has been upvoted a lot.  There’s been a lot of discussion during which the idea is broken down into smaller bits.  Some have been picked up, others not yet.*/
            ?Description: “Go to Mars”
		        upVote(143) <~ Project08_upvote, Project 09_upvote… 
            Comments/
                ?Commenter1#1: “Hell yes”, “It’s a bit far”, ?Commenter2#5: “We’ll need a starship”, 
                ?Commenter3#57: “We’ll need icecream”
        Wish08/
		        ?Description: “Design Starship”
		        upVote(23) <~ Proj99_upvote, Proj23_upvote…
		        Comments/
            ?Commenter1#2: “Pointy end up, flamey end down”
			      IncomingLink <~ Project59/Wishes/Wish59_01
        Wish09/
		        ?Description: “Make Space Icecream”
		        upVote(234) <~ Project99_upvote, Project23_upvote…
		        Comments “vanilla please”
            Target1 ~> Project85/Output/Outputs/icecream01
            IncomingLink <~ Project85/Output/Issues/icecream01
    Messaging/
        Inbox/
        Outbox/
        Comments/
	          Comments#1
                ?Description: “Disagree.  Forking Issue01 into Dream01 is way too early.”
		            ?link ~> Project85/Issues/Issue01
		            ?link ~> Project86/Dreams/Dream01
            Comments#2
		            ?Description: “Yea, what he said”
			          ?link ~> Project104/Comments/comment455
    PullRequests/
	      pullRequest01/
            meta/ {getName(), getDescription()}
			      name: (string),
			      description: (string)
		        proposers/
			          <- person | project
			          <- person | project
		Issues/
		    <- issues/issue01
		    <- issues/issue02	
		    <- issues/issue07
    Predictions/	
  
  
  
  
  
 
