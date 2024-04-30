
>[!tip] Created: [2024-05-01 Wed 11:04]

>[!question] Targets: 

>[!danger] Depends: 

In HAL, sessions can be created by an anonymous user, where the machine then authenticates, and the user becomes authenticated.  How then should HAL allow access to the previous sessions ?

listing a users sessions could include all the sessions that all the users machines created ?
Sessions could be listed by machine ?

What if a user claimed a machine and then kicked a machine, how would the user recover the sessions the machine created ?

Is it sufficient to expect the software using artifact to go clean up all the hal sessions once the user passed auth ?

Make a trigger for when branches are moved over to any given branch, so it can do something based on the children.  Trigger would simply call an isolate with the incoming branch names.
Could register an array of actions to take, so different apps can trigger different things.

Give HAL a flush machines command.

