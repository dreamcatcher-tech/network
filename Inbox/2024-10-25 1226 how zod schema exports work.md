
>[!tip] Created: [2024-10-25 Fri 12:26]

>[!question] Targets: 

>[!danger] Depends: 

If you export a zod schema module, then we should check the input json 

zod parameters, returns, and errors which is optional

so the issue is, how to export it as a bag, or as individual items ?

And then what about the types on it ?

when an error is thrown replace it with the message we provide in the schema object.

Options:
- bag of objects passed around
- individual functions

Go with the back, since the napp presents a bag.

The only hard constraint is that the default export of the napp must contain at least all the functions that the `tools` key exports, that are not external napps.

So should the export be a bag of functions that match, or the direct exports ?

zod is sugar on top, and optional.