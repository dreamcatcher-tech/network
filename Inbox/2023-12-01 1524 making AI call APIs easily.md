
>[!tip] Created: [2023-12-01 Fri 15:24]

>[!question] Targets: 

>[!danger] Depends: 

If there is a good API description, we should be able to generate some JS code that turns that API into something that is consumable in chain land, applying chain best practices.

We can say what changes in actions or interface that we want, and it should code and test that for us. Providing a sandbox in some standard form should let it experiment.  We could build a mock from the API spec to test it without incurring costs.

Chain best practices should be handled by AI that loops thru rules on each function much like the [[ethereum solidity automated checker]] that knows rules and makes fixes.

The general form is a rule checking system that can take on new rules, publish global rules, and execute them against some target system, possibly running checks like an executable test.
