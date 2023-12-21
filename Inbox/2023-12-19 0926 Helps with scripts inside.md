
>[!tip] Created: [2023-12-19 Tue 09:26]

>[!question] Targets: 

>[!danger] Depends: 

If we format the helps as something executable, then we could run the scripts in a sandbox and assess the result and the cost of execution.  Allows us to run untrusted code instantly, and if we like the result, use it.  Have a pattern of exploration then once the full discourse is ready, the net changes are presented to Dave to click a button to commit the changes.

statechart workflow for the whole stuckloop with key parts as modules.

Special permissions like unfettered network access would need user approval.

Alternatively we could make the helps just be plain language, and get interpreted, and allow the LLM to execute multiple commands simultaneously.

Helps could include what models they had been tested on, and could run on gpt3.5 for speed and cheapness.

Could have sections, like set of instructions, checks for 'do you have a crm installed'

Nesting would be "do you have  crm installed ?" if not, then you need to use the search for CRM help, which guides HAL thru making a CRM decision.  Or it could be if you have multiple CRMs installed, you need to pick which one you mean.

"Ensure you have a crm installed"

There appears some format that helps have that the AI can generate, humans can read, and the AI can consume.  AI should be able to deduce what the help is, after it has been walked thru the process by a human, to reduce down what was required.

List of requirements, so we can provide the set of commands and environment conditions that are required.  The checklist is there so that the bot can go off and solve these problems first if needed.
eg: I want to create a schedule.  Get the day required, check all customers for this day are routed.
So the routing requirement would trigger if not everything was in order before we started, so we'd walk thru how to solve that problem with the user.

Give the helps a scope in the form a chroot jail, so it is given the deepest path it needs to operate in, then list out the commands it needs access to, which get loaded up.
These commands could be loaded up 

Reports back on the Help could provide an error from executing the help.
The help could be executed by a bot, and that is the function call: `execHelp( helpfile )` 
This is run by a bot which interprets and gives feedback and returns back success of fail.
Then the top level bot looks at the net change in artifact, and determines if the goal was met.

Each time a change in code occurs, we rerun the testing of all the goals in the system, and regen the helps to be able to provide instant solution of the problems, so the docs are all updated automatically, in parallel.

> The goals are brilliant in that they define the testing boundaries of the system.  

If we are trying a goal that doesn't match well, we can flag to the user that the match is bad and they are in danger zone.

Also when users try to do new things, we can automatically catch that and put it on the list of features we need to add.  Start by replying that this feature is being worked on and giving some progress update and asking for money.  Then when it is released, we update the help to reflect the new features.  So the feature request and feedback system is all directly inband with the user input.  The testing methods are aligned with this exact same system.

Basically, so long as we can do all the goals, and have a process for expanding, then how we got to the goal is unimportant, and users will approach in all possible ways early, so quickly the system will stabilize and be fruitful.

Helps should say the expected outcome too, so they contain some integrity inside ? or the goal is given a definition of done.  So just firing the commands might not be enough.  Every time the help went awry, we would have to update done.  The scenarios under which are help failed need to included in the test suite that accompanies the help.  This set of tests is built up over time as more depth of experience in accrued, and includes regression tests.

If we want to show a datum with restricted fields, or a collection with only a few columns, then the AI needs to make a function call that is targeted at the view config function, to change how the data is shown.  This might get stored as the users preferences, in which case the help context includes the users unique preferences, so their derivative of help is used here.  Need a way to bundle user preferences in with the GAG.

And then the GAG gets updated with thanks and tweaks based on usage, so it can be edited and improved each time it runs, goalspace is continually expanded, and reinforced based on success.

All the AI programming should be within the helps, run inside a jitter, as no point running in conventional tools.  The code construction and the usage should be blurred together, because we want to soften the bounds between users and devs.

Helps could load up an assistant which could make arbitrary AI calls.