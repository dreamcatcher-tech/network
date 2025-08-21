
>[!tip] Created: [2025-08-21 Thu 21:38]

>[!question] Targets: 

>[!danger] Depends: 

so it might be worthwhile to make the resources operations be permanently available, the same as unload is available ?

because if we switch to a mcapp, then that mcapp may present resources, and we might be able to subscribe to them, but if we switch away from it to the list resources toolset, then we would lose those resources.

We can make the reading be done via actual tool calls for now ?

can make the resources calls available iff the mcapp shares resources ?

If we don't allow reading and listing the resources that are part of the mcapp, then we cannot use the clipboard.

but then the clipboard cannot be both pasted from and also modified ?
is there a list of tools that are always permanent ?

can prefix them all with names like

```ts
{
	system_unload
	
	dynamic_read_text
	dynamic_change_directory
}
```

how can we get this list to be solved by an ai, or at least ground over to be optimal ?

so the trick is how can we rapidly reconfigure the systems to take any changes ?
in mcp everything is dynamic, so that part is easy.

clipboard needs only the basics, and anything more you should load up the clipboard management toolset.

have special characters in the descriptions, like
`@@SYSTEM-FUNCTION` and then refer to it as, will unload everything that is not a system function.

do some dynamic tools need to access the clipboard ?

should template reading be bundled into the tool calls of the mcapp ?

otherwise, if we ignore resources completely, then we can probably do everything we need to with just tool calls ? but we can't do the clipboard unless we do resources.

OR

switching to clipboard is perfectly fine, since the model as to type each character of the resource it wants to copy anyway ?
so it would read it, then when using the clipboard, would use the mcapp id, the commit of the resource, and the path, and that is all that is required to be stored to be able to recreate that.

so cut can be done later, after accessing the resource metadata.

we could pass back a resource link from a tool call, and that can be put on the clipboard, or provide a way to make a tool call get back a resource, same as what read would have done if it was available.

So what do we even need the clipboard for if we can remember the contents well enough to put it on the clipboard in the first place ?

clipboards would be transcludes, and we can bundle them up and then include them in a chat.

would a chat be given the specific transclude as a path ? or the raw contents ?

if the tool calls can return resources, or can return resource links, then we don't need to do much else ?
the resource link can be read if you use the resource tool set, and you can also use it to paste down places where a resource is required.  Lets large transfers be handled server side.

if a tool call returns a resource, then this can be used to subscribe.
this seems to be in effect the same as reading resources using generic tools.

So we make the clipboard tooling, and just store resources, where we access resources from mcapps by doing tool calls into them.  This is better than dynamic resources from them.
a mcapp resource will need to be directly subscribed to for updates, rather than those just streaming in.

when pasting to a chat, it can be:
1. passed along as available if the bot wants it, where it can choose to read the resources
2. stuffed into the context window either as chat or as sysprompt

so repos list is an array of repo items.

notifications tooling is just a way that resources can be subscribed to, and it says what tool calls to do when the change occurs, where it passes the resource around, so it is just addressing metadata, and not the full text.

Then that can make decisions on what to do, based on what it received.