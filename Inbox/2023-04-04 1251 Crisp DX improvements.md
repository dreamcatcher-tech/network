
>[!tip] Created: [2023-04-04 Tue 12:51]

>[!question] Targets: 

>[!danger] Depends: 

Remove all the checks for isLoading and isLoadingChildren instead returning null if something is not present.

`.getTarget()` to get the child that is the current target of the `wd`

`.getSelectedChild()` should not throw errors, but return null if nothing is selected.