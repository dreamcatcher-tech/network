
>[!tip] Created: [2025-06-20 Fri 15:14]

>[!question] Targets: 

>[!danger] Depends: 

whilst we want a core set of tests that we maintain, we should also run generative tests, if we are publishing a library.

These are higher than e2e, since they start an llm cold, and give them the docs and the code, and then the llm exercises the library by trying to build a range of things, and filing issues when it doesn't work.

Its like synthetic user testing, because the issues they generate are genuine, and completely cover blind spots, since if a model couldn't figure it out, clearly you have packaged wrong.

Watch out for unstable conflicts, where choosing one thing can cause another thing to break and then oscillate back.

We could maybe sell this service to library authors, so we can help them design it.

Then we can have agents that will respond to this feedback and propose top level api changes.  This should be done in concert with human overseers, to make sure the model is accurately driving forwards.