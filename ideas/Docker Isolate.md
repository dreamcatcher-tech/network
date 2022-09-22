>[!tip] Created: [2022-09-22 Thu 16:04]

>[!question] Targets: [[Isolation]]

>[!danger] Depends: 

Each language that covenants can be supplied in will need its own loader, and a language specific isolation mechanism used.  Speed and memory efficiency are important, hence the fine tuning requirements.

In the meantime, if we made a generic isolate runner than can load docker containers, this would allow for any language at all to be used.  

## Implementation
The docker image would be saved as a binary of the covenant chain.  When required, this container is loaded up, and begins processing requests.  The function inside need only receive json, and send json back out.

These containers should be capable of running side effects too.

Within the same app complex, the same container can be reused, for memory efficiency.  Between trust domains, depending on the engine configuration, 

## Extras
This could be used as a means of container orchestration, since an Interpulse instance is acting like a docker container manager.  Interpulse is acting like a service bus between all the containers, making their activity auditable, replayable, and fault tolerant as actions are guaranteed to get processed.
