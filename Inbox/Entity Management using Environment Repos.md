
This document outlines a design for managing DIDs (Decentralized Identifiers) and repositories in a system that avoids Git submodules while maintaining flexibility, atomic ownership changes, and a clean separation of environment-level and repository-level data.

## Key Components

### 1. Top-Level KV Structure

- **`did/<didValue>`**: A pointer doc that maps each DID to its "home" environment repository's public key.
- **`repos/<pubkey>`**: A flat namespace where each repository is stored, keyed by its public key.

#### Example Layout:

```
did/<didValue> = <envRepoPubKey>
repos/<envRepoPubKey>/*  # The environment repo .git data
repos/<childRepoPubKey1>/*  # Child repo .git data
repos/<childRepoPubKey2>/*  # Additional child repo data
```

### 2. Environment Repository

Each DID has a "home" environment repository, which:

- Stores environment-level data (e.g., billing info, user preferences, etc.).
- References other repositories using a JSON file or `.git/config` entry.
- Is stored as a regular Git repository under `repos/<envRepoPubKey>`.

#### Example File in the Environment Repository:

- `env-config.json`:

```json
{
  "did": "did:example:alice",
  "repos": [
    "pubkeyRepo1",
    "pubkeyRepo2"
  ],
  "billing": {
    "plan": "premium",
    "credits": 1000
  }
}
```

- Alternatively, this data can be stored in `.git/config` under a custom section.

### 3. Child Repositories

- Each additional repository is independent and keyed by its public key under `repos/<pubkey>`.
- No submodules are used; instead, the environment repository contains references to these child repositories in the form of a simple JSON file or `.git/config`.

## Workflow and Operations

### A) Discovering a DID’s Environment

1. Query `did/<didValue>` to retrieve the `envRepoPubKey`.
2. Open the environment repository stored under `repos/<envRepoPubKey>`.
3. Read `env-config.json` or `.git/config` to access environment-level data and child repository references.

### B) Adding or Removing Child Repositories

1. Modify the `repos` array in `env-config.json`.
2. Commit the changes to the environment repository.

### C) Changing Ownership of a DID

1. **Atomic Update**: Update the `did/<didValue>` pointer to point to a new `envRepoPubKey`.
2. The new environment repository immediately becomes active.
3. Optionally freeze or retire the old environment repository to prevent unauthorized use.

### D) Managing Child Repositories

- Child repositories remain independent and unchanged during ownership transitions.
- They are always referenced by their public keys, ensuring consistent access regardless of the environment repository changes.

## Advantages of This Approach

### Simplicity

- **Flat Keyspace**: All repositories are keyed by their public keys, ensuring a uniform structure.
- **No Submodules**: Avoids the complexity and potential confusion of Git submodules while maintaining references to child repositories.

### Flexibility

- **Environment Repository**: Acts as a single source of truth for environment-level data, versioned with Git commits.
- **Atomic Ownership Changes**: Re-pointing the `did/<didValue>` key ensures instant updates with minimal operations.

### Scalability

- **Independent Repositories**: Each repository is fully independent, making it easy to scale without nested dependencies.
- **Clear Separation**: Environment data and repository data are clearly separated, reducing overhead and potential conflicts.

## Potential Gotchas

1. **Pointer Consistency**: Ensure the `did/<didValue>` pointer is updated atomically to avoid inconsistencies during ownership changes.
2. **Environment Repo Size**: Avoid bloating the environment repository with too much data; keep it focused on config and references.
3. **Access Policy for Old Environments**: Define whether old environment repositories should be archived, deleted, or marked read-only after ownership changes.

## Conclusion

This design provides a clean and scalable way to manage DIDs and their associated repositories without relying on Git submodules. By leveraging a simple pointer-based mechanism and storing environment-level data in a dedicated repository, the system ensures flexibility, atomicity, and maintainability.