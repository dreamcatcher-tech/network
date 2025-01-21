
>[!tip] Created: [2024-10-22 Tue 17:01]

>[!question] Targets: 

>[!danger] Depends: 

Can use webcomponents to isolate the dom and then render each component in a separate compartment.

Or wrap each component function inside a compartment that acts like a proxy for the component, and ensure that the io is not poisoned in some way.

So each component is in a component, and is called by the react renderer normally, but then the components are unable to interfere with each other.