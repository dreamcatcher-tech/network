If we made a post processing step that stores the pulse as a crushed CID, then we could allow this result to be persisted in AsyncTrails.  Whenever it is retrieved ready for execution, we could intercept this call and re-inflate the pulse.

Having the pulse is becoming useful to dev apps - eg: used 3 times in shell.