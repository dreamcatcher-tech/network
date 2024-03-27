
>[!tip] Created: [2024-03-28 Thu 11:47]

>[!question] Targets: 

>[!danger] Depends: 

If the dev supplies a name in the branch action, then provided there is no collision, we should be able to honour it.

Once a branch has closed, the name should be reusable.

Branch open or close status is given by the io file.  This is the canonical spec for the branches.

If there are branches and this file doesn't match, then the execution context is corrupted and we should error the io file.