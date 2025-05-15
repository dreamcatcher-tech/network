
>[!tip] Created: [2025-05-16 Fri 09:02]

>[!question] Targets: 

>[!danger] Depends: 

The problem with Vibe Coding seems to be eventually turning it into a publishable, safe, scalable application that can be multi-user. What we would propose is a system of widgets where you could vibe code an individual widget and begin immediately using it. You could assemble them together; they could be naturally dry and they're very simple to piece together and arrange both manually and for an AI to present a multi-widget board. The key is to use iframes to load HTML pages which allows us to avoid all the pains of bundling and support any web framework. 

During development, a dev server version would be running for instantaneous feedback. The widget would become drivable by an operator or a web browser agent who would perform the checks on the widget to make sure that it assembled correctly. 

The key is that once it's done, it stays very small. It's isolated. It's controlled. And the bleed or the diffuse crumbling that occurs when we try to package it up into a larger app, that gets avoided. So it becomes this large library of reusable little tools that can do practically anything. 

This principle extends out to napps which supply raw logic as well as widgets, and the two might be bundled together. 

If we used Artifact as the CDN, then a page could use Artifact to pull down its assets. This can mean that we can externalize modules from the bundler but also run them using only Artifact without contacting the outside world. 