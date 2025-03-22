
>[!tip] Created: [2025-03-22 Sat 15:17]

>[!question] Targets: 

>[!danger] Depends: 

Allow a section that includes operating systems where a president can select from an operating system that they want and then can be shown what applications are available. For example, for Linux, the registry would be the different package management systems that Linux uses, and you could select one and it would allow you to treat any of the applications that that thing installed as a napp. 

In addition to selecting a programming language, which you would use to pick from a package registry. 

Also allow Docker images to be included as a napp and various Docker registries could be searched in this way. Being able to run an arbitrary Docker image for you means that we would have the maximum flexibility (in fact, we would probably make use of this ourselves). We would have the base image that you supply us, and then on top of that, we would install our own tooling and run it for you. 

You could install our tooling yourself so you can check everything runs correctly, or you could start from one of our base images and add the bits you want on top. This should give you complete freedom. We would use this method ourselves for making new run-time environments. 