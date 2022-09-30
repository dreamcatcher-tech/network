>[!tip] Created: [2022-09-30 Fri 13:49]

>[!question] Targets: 

>[!danger] Depends: 

## Principles
### Developers should never use chainIds
All references to chains should be done by paths.  Some basic reference chains will likely be provided by default, much as a browser comes with some basic certificate authorities pre-installed.

Generally a developer should never have to write code that touches a chainId.