
>[!tip] Created: [2025-03-09 Sun 13:51]

>[!question] Targets: 

>[!danger] Depends: 

I think the use case we want to support is that you call something like `artifact.fibers.functions` and give it a napp name. What you expect to get back is some type-checked functions. 

If we use the exports of the package to export the schema in isolation, then we can be assured that in the browser-side bundle, no server-side code will be pulled in. This would need to be a check when publishing the naps that the nap schema itself was able to be imported by the client unencumbered.

So I'm thinking that the nap modules should export a named export at the root called "napp". This is the pure Zod schema with nothing else imported. This is the default convention.

This is a test to ensure that all of the schemas that we're about to publish have modules that can be resolved 

If we make the registry be pure Zod schemas and then we run a server-side check to ensure that we can resolve all the modules that are referenced by the registry itself, then we maintain a separate list which is the static imports that the system needs to fulfill every possible dynamic import as specified in the Zod schemas. 

This test would be a check by reading the full import file, and checking that all the resolved module names from the schemas, using the module resolution algorithm, were included in the import specification.  We could also easily auto generate this file.

Module resolution algorithm:
- if null, then use the napp name directly, and look for the napp export or the napp export on the default export.
- if stated, can be just a string, so do a dynamic import of it.

So basically, we can have a good set of defaults where we just lay out the schema and provide a way to access the schema definition using a dynamic import. Within that, the modules if we don't mention the module, the module is equal to the napp path. If we do mention the module, that needs to be figured out at runtime. 


The only benefit of a dynamic import is that it could potentially be statically importable without having to write it separately in the registry file.  But it does mean we lose the ability to know the path to the module, so we can pull that in ? or we just depend on the path to the zod schema, as use that as the base path to work from.

To get the typing information, we need to do a static import of each of these zod schemas anyway. 

```ts
export const napp = { 
	name: '@artifact/example-napp', 
	runtime: 'deno', // or 'rust', 'python', etc. 
	// Optional explicit module. If omitted, defaults are assumed. 
	module: { 
		package: 'npm:lodash', // optional; defaults to napp itself 
		export: 'someNamedExport', // optional; defaults to 'default' if omitted
		path: ['deep','nested','path'] // optional
	}, 
	tools: { /* Zod schema definitions */ }, 
}
```

Module could be just a string or it could be this object. Omitting the package will default it to the NAPPS package specifier. Omitting the export will still have the path. 

Why not just have the registry be the napp path and the resolved import of the schema? 
Then server-side, we list out all the modules that need to be ingested. This is perfect type safety.

server side is just the same as the registry, but lists out all the modules that are required by the registry.
They may as well just be statically registered, and then we just look them up from the table.