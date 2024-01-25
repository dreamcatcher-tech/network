
>[!tip] Created: [2024-01-22 Mon 18:37]

>[!question] Targets: 

>[!danger] Depends: 

So if each branch could be referenced in a url, we could easily pass them around between us.

If the location bar in the app included the gitish hash, then we could know we were in a shared repo, and when you paste the link, it opens up your private runner and navigates to the mounted repo.  Without this, nobody would know where to get to you.

If by default, your private repo was at the base of the url, then we could mount either one - yours or the later ones.

The choice would probably be up to the receiving HAL.
It should know it received a URL with some navigation info in it, and it should ask for clarification on what you want to do with it.