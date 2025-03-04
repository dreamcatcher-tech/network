
>[!tip] Created: [2025-03-04 Tue 16:12]

>[!question] Targets: 

>[!danger] Depends: 

### Weak Caching Strategy using WeakRef and FinalizationRegistry

**Use Case:**

- Caching JavaScript objects parsed from binary data identified by hash keys.
- Reuse cached objects if requested again with the same hash.
- Allow cached objects to be garbage-collected without resistance when no strong references exist.

**Solution:** Utilize a combination of:

- **`WeakRef`**: Maintains a weak reference to cached objects, enabling garbage collection.
- **`FinalizationRegistry`**: Automatically cleans the internal cache by removing entries associated with objects after they're garbage-collected.

**Implementation:**

```typescript
class WeakCache<T> {
  private cache = new Map<string, WeakRef<T>>();
  private finalizer = new FinalizationRegistry<string>((hash) => {
    this.cache.delete(hash);
  });

  get(hash: string): T | undefined {
    const ref = this.cache.get(hash);
    const obj = ref?.deref();
    if (!obj) {
      this.cache.delete(hash);
    }
    return obj;
  }

  set(hash: string, obj: T): void {
    this.cache.set(hash, new WeakRef(obj));
    this.finalizer.register(obj, hash);
  }
}
```

**Benefits:**

- Efficiently reuses objects when requested multiple times.
- Automatically frees memory, keeping your cache lightweight.
- No manual memory management or explicit cleanup required.