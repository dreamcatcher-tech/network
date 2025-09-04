
>[!tip] Created: [2025-09-04 Thu 12:17]

>[!question] Targets: 

>[!danger] Depends: 

So the model needs to know about the concept of a face ?

this could be framed as a job ?

the face can be viewed, and even interacted with.

It can receive jobs to do ?

or rather, the face can receive calls or messages in ?

message the face, and then you will get a response.

starting a new face vs starting a read only view of a face, vs starting a writeable view of a face.

could present 'face commands' where the server can expose different commands that a face can be started with ?

or the start face just takes a shell command, and the bot is expected to get this right.

open the face with it, and you get back the faceid.

then you send in messages, and once the message result is back, you get that back.
await would need an agent path, a face_id, and a message_id.

these feel very codex specific - maybe having something general is out of reach ?
commands and args are very easy ?
list commands can give easy instructions for the llm to follow and get the latest info.


so the sequence goes:
1. list_face_kinds - gives a list of all the acceptable commands to start a face with and their options, and if you get it wrong we will error with this list to help you
2. create_face - pass in the kind id
3. destroy_face

would the face kinds be part of the workspace manifest ? seems like it has to be ?
default would be just codex ?
another could be just plain old bash, or zsh ?

starting a new face can list the kinds ?
a bash kind would allow any command with any args ?
basically it can be as open as we allow, or it can be very narrow.
the args schema checking need not be in the mcp tool calls themselves - it could be within the function.

so we're seeing the common command purposes with the CoW principle, where there is no update, only creation, and they're always nested:
1. list_
2. create_
3. destroy_

We can then define the system in terms of levels:
1. computers
2. agents
3. faces
4. tasks

We should be able to make a mermaid ER diagram that shows this relationship ?

probably the status at east level could be the same ?

status:
1. starting
2. running
3. error
4. finished

? what of having defaults ? so if you send a task in, and do not spec much, it will start a new agent, then a new face, then a new task of default kind ?

computer kinds - not sure - we only have one for now
agent kinds are what the docker images are, and are named conveniently.  Named for purpose.
face kinds for now are bash and 
