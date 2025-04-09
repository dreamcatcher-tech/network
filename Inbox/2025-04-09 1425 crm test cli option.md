
>[!tip] Created: [2025-04-09 Wed 14:25]

>[!question] Targets: 

>[!danger] Depends: 

If we made an e2e test suite, then when you run the cli with this option, it would choose the configured test deployment url, and would then run the test suite against it, so you can verify the current environment you are running on, and its connectivity to the cloud, and the correct operation in the cloud.

If you run several versions against this, it will error, so we would make a dedicated branch, and then delete it after.

One version should stay there so we can develop the UI against it.

