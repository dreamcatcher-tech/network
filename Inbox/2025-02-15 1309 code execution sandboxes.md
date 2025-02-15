
>[!tip] Created: [2025-02-15 Sat 13:09]

>[!question] Targets: 

>[!danger] Depends: 

Seems important to have this git filesystem underneath, since it allows LLM control to roll forwards and back, which is easier than handling the filesystem directly.

So the artifact commands would be presented as a napp, so the LLM could call it directly.

Provides a kind of thinking space for the LLMs to execute code and rapidly roll forwards and back, and then when they're happy, the code is immediately available for consumption like any other tool, with all the testing and things removed.

Profiling of code in a standard format, no matter what your language would be our goal, so any language you want can be instrumented, plus can easily package it up into napps format for LLM tool calling.

Evals and other tests from the outside can be conducted, as well as 'smart' tests where LLMs try to exercise the napp intelligently, and look at profiling and coverage outputs.

The napp execuction environment is instantly scalable, and thousands of versions can be turned on instantly.

Allow LLM breakpoint stepping, where the tool sets the breakpoint to run to, and when it halts, it gets a dump.  It can set to just simply sample at those points, so it gets n runs and sees the data each time it hit.

The LLM can happily walk breakpoints around since it doesn't cost the human much time at all to get going, then the LLM just grinds away.