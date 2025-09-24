
>[!tip] Created: [2025-09-24 Wed 12:22]

>[!question] Targets: 

>[!danger] Depends: 

container is the body of the agent.

each time the computer apps are restarted, they would trip off a background process to check the current image of the agent app.

the agent app is there for us to test that the image works correctly.
Each new image we want to support should have its own app, so we can auto build the image, and deploy a version that is used for testing, without the complications of the computer over the top.

if the bios finds new machine images, it will create new ones, which will be the new hot machines on standby, 

agents should decide when they are idle, and voluntarily enter suspend, or notify the bios so they might be torn down.

codex can resume with the resume selector on last, so the face is configured to reinstantiate, or maybe it just always boots this same way: `codex resume --last`

this means codex is crash consistent.

public agents should be readonly to all but their creator ?