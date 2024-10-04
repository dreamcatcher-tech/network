
>[!tip] Created: [2024-10-05 Sat 01:48]

>[!question] Targets: 

>[!danger] Depends: 

Should we have a test watcher that determines if the expectation has already failed, but at each lap around the execution loop that would otherwise let it keep going.

Could run longthread in stepper mode, where an agent needs to allow it to perform another loop, or has it failed.

Also run allows near endless continuation, but router does not, so may have to specify the runner sometimes ?

Run may include a parameter for how many loops we will allow it ?