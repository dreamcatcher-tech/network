The sole method of affecting change in the Dreamcatcher and the fundamental means of Project to Project communication. Pull Requests can propose:

- Forks and Merges between Objects of the same type.
- Forks and Merges of Projects.
- That one Issue or a collection of Issues have been completed, for consideration by the Governance for validation or rejection.
- That a Wish should be created.
- That a Wish should be Forked into an Issue.
- That a Wish should be Forked into a Dream into an existing Project, or should create a new Project with that Dream.
- That a change should be made to any projectAlgo, including Governance and Attribution.
- That an Output should be added or removed from a Project.
- That a change should be made to a Milestone

A Pull Request can also consist of proposed changes to any field in a Project.

A Pull Request can only Target one Object at a time, but that Object may have children which are subject to the Pull Request to. The decision about whether to allow the Pull Request is always the Governance of the Target Project, ie the Project which will end up being changed because of the Pull Request.

A Pull Request can include conditions, including events in other Projects such as the acceptance of a certain Pull Request in a different Project. This allows chaining of conditions to permit arbitrary complexity.

A Pull Request can be opened by any Project.

When a Pull Request is ready to be submitted, the author creates a Weak Link to the Target. This Weak Link will appear in the Inbox of the Project being targeted, and begins the negotiations aiming to get it accepted by the Target.

The Target can reject it out of hand, in which case the fact of the rejection is recorded in the inbox, and a Weak Link back to the Pull Request is created to notify the author. The author can then choose to modify the Pull Request unilaterally and resubmit, or kill it.

If the Target chooses not to reject it out of hand, a symLink is created from it to the Pull Request. This allows the Target to submit the Pull Request to its Governance (with the result being recorded in the Pull Request), to comment with the author on the Pull Request, to alter the details of the Pull Request, and to accept or reject it.

If a Pull Request is rejected by the Target. On this event the author is notified by the Pull Request that it has been rejected, and is killed. To resubmit the Pull Request, anyone can Fork it and begin the process again.

If a Target accepts a Pull Request, it is submitted to that Target’s Governance for final approval, and is executed if approved by the Project. At this point the Pull Request notifies the author of the acceptance, and is killed.

A Project Pull Requesting on itself follows a shorter cycle. In this case, the Pull Request is immediately submitted to the Governance of the Project from its own outbox. A Project may choose to set the Governance to automatically accept internal Pull Requests of this type.
