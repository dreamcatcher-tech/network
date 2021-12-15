A Wish captures early thoughts on any change to any [Object](Object.md).  E.g. the change could relate to:

1. Improving any part of an existing Project
1. Work that in the view of the Contributors to the Wish should be carried out.
1. An idea that does not currently warrant becoming an Issue or a Dream, but which the author is willing to share and explore with the Dreamscape.

The Wish process is aimed at clarifying the thought before action is taken.  This can be through gaining Comments from others, deduplicating and merging those Comments to hone them and through gaining a sense of demand and agreement for that change (through Upvotes). A Wish can Weak Link to any Object, indicating that that Object is the subject of the change (Upstream Demand).  Likewise, a Wish can be Weak Linked itself, indicating Downstream Demand for the change.

At the point where anyone with Permissions to read the Wish believes it’s been worked through enough, it can be Forked via a Pull Request to become either a Dream, or an Issue.  This is a one-way Active Fork, where the Branch Issue or Dream is updated when the Origin Wish is updated. These changes can be rejected by the Branch.  In the Branch Object a Weak Link is created linking back to the Origin.

Other Projects can Fork a Wish into their own structure.

The whole point of Wishes is that they're free-form, and can be built on informally. They’re not closely controlled by any one Person (although the originator is always known), but intended as a mechanism for inviting many to contribute, deduplicate and combine ideas and amplify those concepts which are voted as most valuable. 

The lifecycle of a Wish is as follows:

## Creating a Wish that you want fulfilled

1. A Wish is created by a Project with a title and description of what it is asking for.  Optionally keywords can be added which can be used to search for it, as well as a tweet, which is a description in 160 chars or less.  Privacy settings in the Wish can limit who can see it in any search, and if visible, what parts are still hidden, such as the author.
2. If there are any other Project’s Dreams, Outputs or Issues that may possibly help fulfil this Wish, the Wish can indicate this by Weak Linking out to that other Project’s data with Link Tags giving further information.  Depending on the Permissions of the Weak Linked Object, this Weak Link will appear in the Inbox for that Project, where further action can be taken.  
3. Likewise, if there are any other Project’s Dreams, Outputs or Issues that may make use of what this Wish is proposing, they can be Weak Linked to the Wish, again with suitable Link Tags.  
4. A measurementAlgo can be added to the Wish to give a more precise definition of what is being asked for, as well as a comparison to other similar possible solutions.


## Building a Wish

5. Anyone with Permission can add a Comment to a Wish.
6. Other Projects who can read this Wish can Weak Link to it.
7. Wishes can be merged.  Currently this happens manually, where a Person discovers a similar Wish and proposes a Pull Request to merge them.  This can be with any Wish, not just those in the same Project. On merging, Upvotes and Comments are combined.
8. At any point a Pull Request can be raised to close a Wish to further updates.  That does not inhibit others from Forking it later, but does stop merging back to this Wish.
9. Anyone can raise a Pull Request to propose a change to the description or fields in a Wish.

## Creating an Issue or a Dream from a Wish

10. It may be that a Wish gets large enough to warrant its own Project.  In this case, the process is to create a new Project, setting its Dream as a Fork of the originating Wish.  In addition, an existing Project can Fork a Wish into its own list of Dreams. A Project which is created in this way can therefore trace back to its originating Wish, and by doing so can discover other Projects that Wish may have spawned.
11. Likewise it may be that once a Wish gets actionable the Project wants to create an Issue to get the work done.  In this case the Project creating the Issue Pull Requests against itself to Fork that Wish into the Issue.  An external Project can also Fork a Wish into their own Wishes/.  That Pull Request can include a request to close the original Wish.
12. The originating Project can opt to generate an Issue from its own Wish automatically through the actions of a WishAlgo.  WishAlgos can also be used to automatically Fork a Wish that has Weak Linked a Project into that Project’s Issues.  


## Upstream, Downstream and Bi-Directional Demand

13. A Wish can be Weak Linked from anywhere, and by any number of links.  The direction of those links denotes Upstream Demand and Downstream Demand, and situations where the same Wish has both.  E.g.
    1. Upstream Demand. A Wish that Weak Links to other Objects (outgoing links) is indicating that it is proposing some change to that Object.  I.e. this is upstream demand from this Wish to the Object for the change encapsulated in the Wish’s data.
    2. Downstream Demand. A Wish which attracts incoming links from elsewhere is an indication that others agree with the change proposed, and may make use of it if it’s enacted.  
    3. Bi-Directional. A Wish with both outgoing and incoming Weak Links is showing that there is both Upstream and Downstream Demand for that change.  That is, if the change is made on to the Object targeted by the outgoing link, not only may the Wish make use of it, but if it does, Downstream Objects may make use of it.  

## Attribution for Contributions

14. The value of a Wish comes from inviting any and all inputs into making it as specific as useful, and in showing whether it’s worth the work.  Therefore, the data as to who has contributed to a Wish that later becomes a Project, or solves a problem through an Issue, is searchable by AttributionAlgos.
15. Anyone who is interested can use the original Wish Object to find any other Project or Issue who has made use of it.  With the history of contributionsGovernor for example, they can then raise a Pull Request against those Projects to ask for those contributions to be recognised (if they haven’t already been.)  The option is also there for third parties to do the same. 

## An Example of a Wish

The following is a snapshot of three Objects with Comment history and Links, coordinating together. 

```
Proj2/Wishes/Wish01
    ?Description: “We need to make our redWidget red and blue, not just red.  I think that would sell better”
    Comments/
       Commenter1#0: “If we can find something compatible that’s blue, we could combine them and make our widget red and blue”
       Commenter2#0: “I think Proj1’s greenWidget01 is compatible, but it’s not blue.”
       Commenter1#1: “I’ll link their widget and see if they pick up this wish.”
       Commenter2#1: “It’s Proj1 here - saw your wish.  No worries, we can do that.  Have forked to an Issue to get it turned blue.”
       Commenter0#34: “(bot)New fork: Proj2/Wishes/Wish01 #Proj1/Issues/Issue1”
    Links/
       ~Proj2/Outputs/redWidget 
       ~Proj1/Outputs/greenWidget01 
       <~ Proj3/Wishes/Wish03


Proj3/Wishes/Wish03
    ?Description: “We need a red and blue widget to add to our christmas box”
    Comments/
       ?Commenter1#34: “I’ve found a wish for a red and blue widget, but they’re still working on it. Have linked below.”
    Links/
       ~Proj3/Outputs/christmasBox01
       ~Proj2/Wishes/Wish01

Proj1/Issues/Issue1
    ?Description: “Turn greenWidget01 to blue”
    Comments/
       ?Commenter1#1: “This should be easy.  What should we charge for it?”
       ?Commenter2#9: “Do we even have any blue paint?”
    Links/
       #Proj2/Wishes/Wish01
          ?Description: “We need to make our redWidget red and blue, not just red.  I think that would sell better”
          Comments/
             Commenter1#0: “If we can find something compatible that’s blue, we could combine them and make our widget red and blue”
             Commenter2#0: “I think Proj1’s greenWidget01 is compatible, but it’s not blue.”
             Commenter1#1: “I’ll link their widget and see if they pick up this wish.”
             Commenter2#1: “It’s Proj1 here - saw your wish.  No worries, we can do that.  Have forked to an Issue to get it turned blue.”
             Commenter0#34: “(bot)New fork: Proj2/Wishes/Wish01 #Proj1/Issues/Issue1”
          Links/
             ~Proj2/Outputs/redWidget 
             ~Proj1/Outputs/greenWidget01 
             <~ Proj3/Wishes/Wish03
             <~ Proj1/Issues/Issue1
```
