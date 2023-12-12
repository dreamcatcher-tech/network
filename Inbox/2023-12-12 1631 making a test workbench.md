
>[!tip] Created: [2023-12-12 Tue 16:31]

>[!question] Targets: 

>[!danger] Depends: 


? make a separate package outside of the main storybook ?

Be able to run in github CI
Be able to run as a jitter in the UI, connected up to the main chain that the CI runs

Things to show:
1. Multiple AI systems, piped different, with different LLMs backing them
	1. combinations of config in a matrix like testing
2. multiple run environments - CI, different peoples browsers, different machine IDs
3. Initiate your own run in the CLI or in a UI
4. Inject and twiddle with the prompts in the config they are in
5. Multiple prompts for the same system
6. leaderboard

Things to measure:
1. prompt responses
2. function calls made
3. artifact changes made or not made
4. stateboard status which should result in props passed in.


Stateboard should show whatever is at the current path, plus some preferences, plus function calls made by HAL.
So prefs are overlaid and are local to the user.
Prefs browser lets them prune their list of preferences.