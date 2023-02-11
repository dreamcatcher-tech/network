>[!tip] Created: [2022-10-24 Mon 15:15]

>[!question] Targets: 

>[!danger] Depends: 

The storybook story, the UI component, and the covenant should be operated on as a single unit, to encourage development as a tightly coupled bundle.

Whilst there are unit tests on the covenant logic, the UI tests are the ultimate - these are full integration tests, but isolated down to a specific component.

This relationship exists because the object model that humans have in their head should be captured into the application object model almost directly, and so these components can be tested and met with user approval in isolation before being combined into a larger application.


Let people build up their storybooks from a library of things others have made.
Submit your changes back.
Pay attribution.

Do covenant debugging and testing inside the storybook.

Reference other chains, even direct user sessions, and see how this component displays.