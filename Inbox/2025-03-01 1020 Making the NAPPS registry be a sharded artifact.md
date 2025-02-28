
>[!tip] Created: [2025-03-01 Sat 10:20]

>[!question] Targets: 

>[!danger] Depends: 

Each registry update essentially modifies some part of Artifact. Although the entire registry is represented by a single hash, we can shard the registry by napp scope or other logical partitions to enhance performance.

If the volume of updates becomes overwhelming, we have two potential solutions:

1. **Separate Repositories per Scope**:
    
    - Each napp scope could have its own repository.
    - The central source periodically synchronizes with these scoped repositories, tolerating some synchronization delay.
2. **Branching the Central Repository**:
    
    - Allow the central repository to have multiple branches simultaneously, removing the strict requirement of a single master branch.
    - Updates can occur independently on different branches and eventually merge back into master.

### Benefits of Artifact-based Napp Registry:

- **Permanent Availability**:
    - Users can pull the entire registry or selectively import specific paths within the hashed repository (similar to sparse checkouts).
- **Flexible Metadata Management**:
    - Napp metadata (stored as JSON objects) is included directly in the registry.
    - The actual code artifacts can be stored remotely as hashes, subject to format validation, safety checks, and availability verification.
    - The registry service ensures replication and availability of these remote code artifacts.

### Decentralized Hosting and Distribution:

- **Distributed Hosting**:
    - Anyone can host a registry replica, including individual users.
    - We provide baseline support to maintain registry availability.
    - Hash-based replication ensures widespread redundancy, allowing individuals or communities to maintain the packages they value.
- **Local and Network-Level Sharing**:
    - Users who download packages sign a record confirming their action.
    - This signed information facilitates the aggregation of usage statistics.
    - Individuals or local networks offering registry services can monitor package popularity, usage patterns, and traffic levels.

This approach promotes scalability, resilience, and flexible management of napp distribution while empowering decentralized community-driven hosting.