
>[!tip] Created: [2024-01-07 Sun 20:40]

>[!question] Targets: 

>[!danger] Depends: 

If we can fire up a dev suite and provide a filesystem module, then we can do AI based development with testing inside the chain.

This would mean that we could supply covenants that were developed entirely inside the repo.

Either run in a webcontainer, or run a testing suite that can run entirely in the browser.
With AI help would should be able to make this very easily.

In a webcontainer we could have the latest full blown git, and run it inside a layered ram based FS.

Or we can wasm the git binary.

Even just being able to run jest in the browser would mean we could do testing.  Best tho, the testing could be happening off browser, on server infrastructure, in a highly parallel way.  So we can edit files and have massive compute executing tests on them for us.  Then when they're ready to publish, we just save, since we have been running the CI pipeline constantly, rather than some different version on a local machine.

The deployment pipeline, being on our global blockchain, means rapid instant deploy to be immediately picked up by edge infrastructure and hosted worldwide.  We are true global infrastructure, and your dev experience need never leave the browser, where you tests perform better than on your local machine, and one click deploys everything without any platform time, since all your CI tests were always running, and now your prod version is live.  

Find a bug ?  Fork the infrastructure at that exact time.  Add to the repro queue.