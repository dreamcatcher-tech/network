Demand is the general name for running different Selectors on the data held within a single Project and with all linked Projects.  It’s aim is to summarize:

1. Upstream Realised Demand - A list of other Project’s Outputs that you use in your Project.  This is available through running displayDependencies(Selector) within the Project’s Outputs.
2. Upstream Potential Demand - A list of Wishes or Issues which a Project has raised Weak Linking to Outputs within other Projects.  Amounts to Outputs that this Project would consider to use if the Wishes or Issue associated with them are completed. 
3. Downstream Realised Demand - a Selector run by a Project on all other Projects who include any of its Objects in their Outcomes/Dependencies.  This amounts to running displayDependencies(Selector) on all linked Projects, and filtering for this Project.  The aim is to give an indication of how the market is using this Project’s Outputs, and allow that Project to navigate to those Projects, (Permissions allowing), to see the context in which their Outputs are being used.
4. Downstream Potential Demand - a list of Wishes or Issues which are linked to this Project, proposing additions or changes to its data, including Outputs.  The aim is to provide data on which features or changes the market is demanding, allowing the Project to prioritise and possibly meet that Demand.
Some of the expected uses of this information:

1. Upstream Realised Demand Table
    1. To judge the criticality of an Output.  Based on the Stack Rank (a measurementAlgo written to rank best to worst alternatives) of alternatives presented, is there a viable alternative to the one that is currently being used?  
2. Upstream Potential Demand Table
    1. To influence the development roadmap of other Project’s Outputs that you use because they’re ‘good enough’, but lack certain features you would value.
    2. To discover other features that are being proposed by other Projects, and which if incorporated into your Project would enhance it.  Once discovered, to add your voice to the call for them to be developed by either Upvoting or Weak Linking your own Wish to them.
3. Downstream Realised Demand Table
    1. To assess the uptake of your Output in other Projects, thereby giving you a performance metric.
    2. A view on how your Output is being assessed by other Projects.  Ie what factors are commonly being used in the decision?  Are they the same as the ones you’re optimising for?
    3. This Project’s rate of innovation - being the time from when it was Potential, to when you entered a feature branch, to when you entered master
4. Downstream Potential Demand Table
    1. To discover and prioritise other Projects’ Wishes linked to this Project..
    2. To discover new features or requirements that, if added, would result in your Output being more widely used.
5. All tables
    1. To judge the competition to your Output by running the Demand Selector against all aspects of another Projects.
    2. By using the ability of Dreamcatcher to provide previous states, questions such as “we used to have many Projects depending on our Output, and had revenue.  Now they’ve all moved to a competitor. Why?”  Depending on the information filled in for potential Demand over time, it should be obvious about what was missed.

