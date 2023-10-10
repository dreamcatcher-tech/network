
>[!tip] Created: [2023-10-09 Mon 14:40]

>[!question] Targets: 

>[!danger] Depends: 

With some customers, they may be comfortable with ms word, and want to convert that to be an email format.

We could make a converter that just takes the raw images, interprets it using gpt

This service we could put live now, and people can chat to tweak their results.  Can be used for converting PDF into html or other forms, which is historically hard.

Feedback the results via an image and get the prompt to be a description of what the difference between the output is and the input, so that the image rattles round a bit.

As debug output, we should see the image change as it gets tweaked.  This should help the customer realize what is going on and interject to change their goals, like saying what doesn't matter, so that the solution will resolve.

Can auto show it in different formats, and let the customer tweak those.

Can make the service be callable via api or via web gui where the GUI can be used to step into an automated result and tweak it before passing it down the pipeline again.  If the tweaks are regular, we can help craft a regular prompt that will automatically intercept the pipeline and correct these calls.  Can then trigger all prior jobs to rerun, except for external calls, or can do a selection.

The injection of processing steps can be described by a human and can involve doing anything, like IFTTT on steroids.  Low code workflows are displayed, but these can be edited by NLP or GUI and new blocks can be created using NLP.  The new blocks can go into a testing pipeline where simulated inputs, or all prior inputs, can be set to run.

In agreemail, we could make the finding of errors be NLP and have the changes be run thru NLP to do rapid bulk edits.