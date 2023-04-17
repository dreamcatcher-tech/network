
>[!tip] Created: [2023-03-01 Wed 11:17]

>[!question] Targets: 

>[!danger] Depends: 

`useStateChange( state => {}` which will configure the dmz to call this function any time the state has changed, using the last action that ran in the reducer.

This function will then be passed the modified state, and can react to it.

The system will serialize calls to this function, so they will not be run in parallel, and prior calls will be awaited.

Could use the same system to subscribe to child state changes and react to those too.