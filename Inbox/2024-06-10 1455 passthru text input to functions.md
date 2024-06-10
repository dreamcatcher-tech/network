
>[!tip] Created: [2024-06-10 Mon 14:55]

>[!question] Targets: 

>[!danger] Depends: 

If a file attachment is used, we can pass it straight thru to an isolate.

If a separate text input window is used, like part of the stateboard, then we can pass things straight thru without the ai having to copy it into the function.

The AI can then wire up different functions, eg:
enter in a json schema doc
run the schema checker and get the ai involved if something needs fixing
then run in the converter into a zod ts file
get the ai involved and possibly modify the original schema if problem
then output a file.
So in this case, the AI only called functions with references, passing thru the value.

General format for passing by reference and then getting involved to modify the value if there are errors in the ref function call.
Any time the AI is calling a funciton, it should create a file, so it gets passed by reference from that point on.

File attachment should pop up a speeddial that has a file, a text window, a url which will pass the whole webpage in.

Output of functions should use this general pass by reference method too, which allows large chunks of text to be hoisted up with very little token generation.