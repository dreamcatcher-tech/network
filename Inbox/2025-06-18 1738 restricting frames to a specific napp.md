
>[!tip] Created: [2025-06-18 Wed 17:38]

>[!question] Targets: 

>[!danger] Depends: 

rather than giving read write to the fs we could restrict a frame to only being able to call a certain napp, and even then, only some actions on it.

the napp is expressly defined by its name, or possibly its name and a path.

how to install the same app in multiple locations in the fs ?


rw might still be overridden if a napp is installed at that location.  These would act like commit hooks that would throw if attempts were made to overwrite a locked location.