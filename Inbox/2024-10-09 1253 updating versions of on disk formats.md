
>[!tip] Created: [2024-10-09 Wed 12:53]

>[!question] Targets: 

>[!danger] Depends: 

io.json and the thread format change some times but we have old versions on disk.

state schemas update also.

If we had a schema wrapper, then whenever we want to read something that is that particular version, we supply the raw object, and pass it in to the wrapper, and we get back the latest version.

Transforms can include code as well.

These are like knex migrations.

Versioned code includes types of that code.
Versioned code needs to be in a special folded, named in a way that we can import the version we want.

Can only go forward with this method.

We can confirm the upgrades since the types and zod parser will confirm it.

If there are errors in the migrations, then we can release patched update path code, and try again.

Code filenames correspond to the version numbers, which get stamped on to the objects when they are accessed via the schema.

If we don't have the exact version, then it will try using nearest one, as that might work.

Ideally the git commit would be used as the version number, and so we would just go back in history to get the parser from that time, and then look for the pointer to the next version to upgrade.

Interface would be that we can put any object in, and we get back the latest version, type checked and schema checked.

Plus an easy way to define what the latest is by just defining the new version.

To get the latest version, we would just call the prior

Really each version only needs to point to the prior version, which can manage the appropriate upgrade for us.

This avoids a wrapper function.
Wrapper could be used to ensure that the version links are all sane.  Could also know rapidly when an invalid version has been passed in.

Pieces of info you need to supply to do the upgrade could be surfaced at each migration, and so we can produce a top level type that has a range of info that it needs to have put in so it can be upgraded.