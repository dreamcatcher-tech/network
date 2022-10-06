Much of DOS is concerned with presenting the output of shell commands.  This could be genericized if the output from the shell was standardized.  If we treated arrays as lines, and objects as columns, then we can default format all responses from shell.

Alternatively there might be a post processor that runs on the shell to turn the commands into something formatted for the CLI, or the UI, 

Ideally the same components that are used to present datum state are used to present shell responses.

We should hook the CLI UI component for each command that we want to format specially, such as ls giving colors to different types of file item.

If the shell [[Covenant]] was called by a remote chain, then a line should still be printed to the terminal too.  So the terminal should be watching the shell chain, and when it detects any actions on 

## CLI

### Prompt
Prompt will need to be custom written, and is there to parse the full command that is entered.  There is some interactive prompting to help users get the commands completely, and once this is entered, the command is always entered as a single string with all commands specified longhand for readability (eg: `--copyOnWrite` vs `-c`)

### Pathing
If a parameter is called `path`, or has some other indicator in the schema, such as having the path regex applied to it, then we will auto complete for valid paths.

### Input Params
If the supplied parameters are less than the minimum required, then an interactive prompter starts up using the [prompts](https://www.npmjs.com/package/prompts) library.  Once the user has supplied all parameters, the full command is entered in.  If they supplied a partial command, then the interactive params are tacked on the end.  This means that if we supply the command into the shell via code or via terminal or via UI, they all present the same.

### Auto Complete
This is manually supplied by interrogating the `api` object.  We can supply params, help,

### Validation
We can provide base validation error messages based on schema, or we can supply a dedicated message to give a friendlier output.  This error message can be used in json-schema-form too.