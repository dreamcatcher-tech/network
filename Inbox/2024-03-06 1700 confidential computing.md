
>[!tip] Created: [2024-03-06 Wed 17:00]

>[!question] Targets: 

>[!danger] Depends: 

Being able to run trusted code on untrusted hardware has been a holy grail for some time.

Leveraging some cpu features, we might be able to to do computation that was guaranteed to be private, such as encrypting data, and only decrypting it if it is being run in the secure enclave in a cpu.

In this way, we can provide strong guarantees that nobody intercepted the data, or witnessed the computation.  Our guarantees inherit from the CPU manufacturer, so it is only as strong as them.  This is still significantly stronger than any other method.

Also the chain of trusted provenance starts at the foundry, which is much stronger than anything implemented after the machine has been assembled.