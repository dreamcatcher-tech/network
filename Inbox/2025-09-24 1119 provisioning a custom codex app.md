
>[!tip] Created: [2025-09-24 Wed 11:19]

>[!question] Targets: 

>[!danger] Depends: 

give it the graphics.

change the EXAMPLE PROMPTS to suggest things to the user.
```rust
const EXAMPLE_PROMPTS: [&str; 6] = [
    "Explain this codebase",
    "Summarize recent commits",
    "Implement {feature}",
    "Find and fix a bug in @filename",
    "Write tests for @filename",
    "Improve documentation in @filename",
];
```

set the agent instructions, which seem easier than changing the system prompts.

give it the docs to peruse.