Much of DOS is concerned with presenting the output of shell commands.  This could be genericized if the output from the shell was standardized.

Alternatively there might be a post processor that runs on the shell to turn the commands into something formatted for the CLI, or the UI, 

Ideally the same components that are used to present datum state are used to present shell responses.

## CLI
### Prompt
Prompt will need to be custom written, and is there to parse the full command that is entered.  There is some interactive prompting to help users get the commands completely, and once this is entered, the command is always entered as a single string with all commands specified longhand for readability (eg: `--copyOnWrite` vs `-c`)
### Input Params
If the supplied parameters are less than the minimum required, then an interactive prompter starts up using the [prompts](https://www.npmjs.com/package/prompts) library.  Once the user has supplied all parameters