
>[!tip] Created: [2023-02-01 Wed 10:42]

>[!question] Targets: 

>[!danger] Depends: 

Allow wd to be set to a path that does not exist.
This will be interpreted by the developer to mean something, much as virtual routing works for URLs in web apps.
Achieved by allowing a parameter to override the shell `CD` command to not check the path we just specified.
This should update the url in the browser bar with the virtual path, so that sharing of urls should always have the same result.