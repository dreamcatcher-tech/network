
>[!tip] Created: [2024-11-22 Fri 09:44]

>[!question] Targets: 

>[!danger] Depends: 

Using endo or SES compartments might be not needed if we can run code in wasm.

WASM has a text mode that might be able to be used if we could transform the ts code into wasm ?

Endo must be having their own solution for this problem of running untrusted code and importing it.

Ultimate is to run it inside a deno lambda function as a web worker using deno containment.

This could allow processing many napps at once in a single lambda using multiple workers.

So, if we could use the napp.json to create the function signature, and then we loaded wasm from jsr, or a .ts file, then deno should be able to run it as wasm, giving us isolation ?

Or, as part of the registry, we might compile into wasm and run some optimizer on it ?  makes the module a single cacheable unit, gives it isolation in the browser, can make it runnable dynamically too without fussing around with import graphs ?

https://deno.com/blog/v2.1#first-class-wasm-support