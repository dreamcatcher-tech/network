
>[!tip] Created: [2024-10-10 Thu 17:21]

>[!question] Targets: 

>[!danger] Depends: 

## Cascading Migrations in Zod Schemas

But we should make the migration of each simply point to the previous one, forming a chain.

The old versions can be moved to a file, or each version can be stored in its own file.

### Overview
When managing multiple versions of an object using Zod schemas, implementing cascading migrations allows each new version to reference and build upon the previous version. This method creates a clear migration path that ensures data integrity and smooth transitions from older to newer schemas.

### 1. Version Dependency Structure
In a cascading migration system, each schema extends the previous one, maintaining the previous version's properties while introducing new ones. This structure allows for seamless migrations through the versions without losing key data.

```javascript
import { z } from 'zod';

// Version 1 Schema
const UserV1 = z.object({
  id: z.string(),
  name: z.string(),
  version: z.literal('v1'),
});

// Version 2 Extending Version 1
const UserV2 = UserV1.extend({
  email: z.string().email(),
  version: z.literal('v2'),
});

// Version 3 Extending Version 2
const UserV3 = UserV2.extend({
  age: z.number().optional(),
  version: z.literal('v3'),
});

// Version 4 Extending Version 3
const UserV4 = UserV3.extend({
  isVerified: z.boolean().default(false),
  version: z.literal('v4'),
});
```

### 2. Migration Logic
The migration function should handle the transition through the version history, allowing each object to upgrade incrementally.

```javascript
function migrateUser(user) {
  const version = user.version;

  if (version === 'v1') {
    const userV2 = { ...user, email: '', version: 'v2' };
    return migrateUser(userV2);
  } else if (version === 'v2') {
    const userV3 = { ...user, age: null, version: 'v3' };
    return migrateUser(userV3);
  } else if (version === 'v3') {
    const userV4 = { ...user, isVerified: false, version: 'v4' };
    return UserV4.parse(userV4);
  } else if (version === 'v4') {
    return UserV4.parse(user);
  }

  throw new Error(`Unknown version: ${version}`);
}
```

### 3. Testing and Validation
Thoroughly test the migration paths to ensure correctness across version upgrades. Here’s an example of how to initiate a migration:

```javascript
const initialUser = {
  id: '123',
  name: 'John Doe',
  version: 'v1',
};

try {
  const finalUser = migrateUser(initialUser);
  console.log('Successfully migrated:', finalUser);
} catch (e) {
  console.error('Migration failed:', e.message);
}
```

### Conclusion
Utilizing cascading migrations in Zod schemas facilitates the effective management of legacy data by ensuring that each version builds on the last. This structured approach not only aids in maintaining data integrity through type validation but also simplifies the process of upgrading and adapting existing data to new requirements.