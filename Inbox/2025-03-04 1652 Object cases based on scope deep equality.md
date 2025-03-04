
>[!tip] Created: [2025-03-04 Tue 16:52]

>[!question] Targets: 

>[!danger] Depends: 

Similar to [[2025-03-04 1612 Deduplication of hash objects using weak refs]]

### Weakly Referenced Cache Summary

**Objective:** Cache objects based on deeply-equal scope objects so that identical scope objects reuse the same cache. Allow these caches to be garbage-collected automatically when no strong references remain.

**Implementation Strategy:**

- Use a **string-based hash** representation of scope objects for equality comparison.
- Store caches in a `Map<string, WeakRef<Cache>>` keyed by these hashes.
- Use **`WeakRef`** to allow caches to be garbage collected naturally.
- Utilize **`FinalizationRegistry`** to automatically remove entries from the registry upon garbage collection.

**Example:**

```typescript
class Database {
  private cacheRegistry = new Map<string, WeakRef<Cache>>();
  private finalizationRegistry = new FinalizationRegistry<string>((hash) => {
    this.cacheRegistry.delete(hash);
  });

  getCache(scope: Record<string, any>): Cache {
    const hash = JSON.stringify(scope);
    const existingRef = this.cacheRegistry.get(hash);
    const existingCache = existingCache?.deref();

    if (existingCache) return existingCache;

    const newCache: Cache = {};
    this.cacheRegistry.set(hash, new WeakRef(newCache));
    this.finalizationRegistry.register(newCache, hash);

    return newCache;
  }
}
```

**Benefits:**

- Efficient memory usage and automatic cleanup.
- No manual memory management.
- Reliable reuse of caches for deeply-equal scope objects.

Might be able to use these general libraries: https://www.npmjs.com/package/weakref
