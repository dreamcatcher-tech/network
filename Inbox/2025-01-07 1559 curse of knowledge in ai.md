
>[!tip] Created: [2025-01-07 Tue 15:59]

>[!question] Targets: 

>[!danger] Depends: 

The curse of knowledge in an AI is that it cannot ignore information that is given to it, and it will always affect the outcome somehow.

The dreamcatcher gives us a mount point for components to be very narrowly scoped.


- **Focus & Risks**:
    
    - Each new “responsibility” in a code block or AI prompt increases chance of error (“curse of knowledge”).
    - Overloading context leads to derailment.
- **Mitigation**:
    
    - Develop in small modules.
    - Code to interfaces.
    - Provide clear specifications.
- **Dreamcatcher’s Widget-Based Platform**:
    
    - **Mount Point**: Allows widgets to be dropped in as nearly native React components.
    - **No Full Infrastructure**: No need for separate databases, hosting services like Vercel, or complex routing.
    - **Simplicity**: The widget code focuses on its own utility, rather than deployment or presentation details.
    - **Real-Time Iteration**: Widgets can be viewed and edited on the platform simultaneously, creating fast feedback loops.
- **Outcome**:
    
    - Speeds up development by removing the overhead of conventional full-stack setups.
    - Encourages code generation that aligns with a simplified, component-centric architecture.