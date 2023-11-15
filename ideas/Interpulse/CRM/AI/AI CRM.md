
>[!tip] Created: [2023-11-13 Mon 11:34]

>[!question] Targets: 

>[!danger] Depends: 

Handling the basic prompt.

"add a customer please"
Then we expect the LLM to query the filesystem and drill down until it finds something it needs.

Make a function that is called whenever the llm doesn't know what to do - this kicks of the dreamcatcher cycle aka stuck loop.

Prompt the bot with the ability to use CD to go deeper into areas that it thinks sound like what it wants.

Give each bot a function to call the bot of a child in that directory, which may call other nested bots.  This call is a thread that is only the conversation so far between HAL and that bot, and the bot contains within its state the prompts for how to load up gpt4 with its purpose, eg: 'you are a crm, and your primary functions are xyz'.  Rather than HAL figuring out how to navigate this app, HAL only navigates to the app parent, which may in turn navigate its children.

Multibot and multishot prompting - allow each chain to load up its system prompt, and then some example conversations to set the tone ?  Can also load up its own embeddings / files to help with its services.  It is basically some instructions that it uses in conjunction with an LLM to behave in some way.

HAL then is about splitting the users queries into different things, and then passing the user over to the parent chain that it found.  HAL can then check the results that came back, and may lace things in it like notifications, or buttons for next action.

In the chain, it specifies what AI tooling it expects, and then has the schema for what it is allowed to prompt load.  The loader for a given AI is provided as a covenant which is at the same level of interpulse, or is supplied alongside interpulse.  It could be generalized as a covenant.  But it needs to be separate from state - it is so fundamental to behaviour that it should be part of the covenant.
Should it be inside the covenant itself ?

The author is free to tell its components to handle AI related queries any way they like - central control, delegated control, but HAL is always about delegated control.
HAL may handle the chats with each node in the chain, so that they don't actually change the

In the case where an AINode is updated mid conversation, we may possible reset the conversation, or at least insert a system message that indicates upgrade ?  Probably some migration strategy where the bot can be given the prior chats in a context where it knows it was a previous version of it ?



Kicking off the stucks loop for anything
Use embeddings to find a stuck description that sounds like what they want to do.
Turn the users request into a simple text description, and then use embeddings to find stucks.
If no stucks found, use this description as the means of creating a stuck.
The address space for stucks should be flat, but we might use summaries of stucks as a means of indexing to hone in on areas quicker, without needing to access everything.
Category tags can be used to help the LLM do categorization and get access to stucks that embeddings wouldn't give.

Could make schema be a property of the chain, where state is just an implementation of this schema.  Means that description can be interpreted by the AI to know what the purpose of this object is.  Schema could have a children key, which could say what format the names of children should take, or what the format of the children needs to be too, to have strong top down consistency ?
Default is just a plain object, and the description can optionally get filled in.

Making a stuck is a huge milestone for us - this is the packet producer, and it produces stucks at varying different levels.

Winning is being able to use ThreeBox to edit a bot and have it behave differently right in front of you.  Use some tooling in the system to help edit bots rapidly.  Then we can see the prompts and know what people were trying to do.  Goal is that there exists a system that is minimally intelligent and can be used to orchestrate its own improvements.

There may be some standard interfaces that our components require, such as being able to describe the visual elements that are being presented on the stateboard.  If you supply this function, then we will take a screenshot of the canvas and use vision to interpret this.

## How to handle AI threads in interpulse root ?
root should have an immediate child `.ai` which is a special system file that handles AI calls.
Children here are threads.
User starts a new session periodically, upon request, or when a new device connects.
User can recover previous sessions, and can start new ones.

Bot to bot calls are a session where the thread is owned by the path
session have children for bot to bot chats.
So each bot chat is listed by path, and then each of its chats are listed by path as a child
The path is the absolute path or the relative path
Creating a child thread would have required a function call being made
Each object in this tree is a thread representing a conversation happening in the context of the users HAL, in service to the user.
They can be submitted as bug reports, but they remain internal to HAL.
They are HALs internal thought processes.

Each pulse is a part of the conversation that is occuring, so recovery walks the pulses to see where the conversation is at.  The threads are mirrored in openAI, but this is a way for us to visualize them and manage the interactions between all the parts.

No need to do multiple sessions, as we can also put a special marker in that says to start anew.
This would start a new thread with openai, but would
Means there is no point is resuming an old session ?  This could be done by using forking to continue a previous session.
Goal is to avoid having an extra dimension in the filesystem for session number.

These chats can have derivations which contain derived redacted and anonymized data that is shared with everyone to help with stucks.

Artifact holds just the programming to be consumed by the LLM - the life comes from the LLM.  Different LLMs can have different config being stored in the covenants.  Threading seems common to all LLMs, as does conversation in the form of input and output.

The LLM programming should be inate to the chain, and should be like state, where it can be altered as a result of interactions.  The reducer logic need not be bound to the AI behaviour.  Means HAL can reprogram the AI behaviour without altering the covenants.

Description of the object should be at the DMZ level.  
Title would its name as given by its parent.
Making schema be at the chain level means tight control over what it can be, and allows splat merges rather than needing an action.  If there is a logic check and a schema, then you can do anything that meets those requirements.

So should the root also store the prompts that have been entered ?
No seems better to piece the `/.ai/` chain directly, where `.ai` represents HAL, and it can operate on any other chain, including itself.  Is HAL the AI behaviour of `/` ?
UI sends all prompts straight into the .ai object, which represents HAL
If it matches an API action on root, then we might send it straight thru, since it is clear what you want ?

Provide some id in the incoming request, so that all streaming can be intercepted by the UI.

HAL calls should include a path to an arbitrary path, and we will create that item ?  
Should be a child named after the relative path to the artifact we want to converse with.

## presenting the results
When a request goes in, an id is given with the prompt, that is used to hook the streaming results
The crisp should show us which chains have outstanding ai requests, and we can display those ones as the thing to show, all under the starting ID from the user.


## Managing AI threading when processing a database
Need a way to manage looping the whole DB.
? Make a chain per row, and use this as the conversation with the AI ?

