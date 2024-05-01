
>[!tip] Created: [2024-05-01 Wed 09:53]

>[!question] Targets: 

>[!danger] Depends: 

Using a hardware decryption service to access secure keys ?

Decryption key as an env var ?

Isolate boots, needs to get encryption keys.

Store the keys per repo ?

Key provider should perform some checks on the requester.

At the very least, we should have a key in the env vars, and this is used to encrypt the contents stored in the system.  The hashes would need to remain unencrypted ?

Or, we could store the file contents as encrypted before being added to git.
This means the hashes are of encrypted contents.

If all PII has a random seed inserted in it every change, then it masks info about that data.  This effectively salts the PII so it cannot be compared in any way.

Then the git structure works on plain files, but the storage is encrypted.

Add the encryption layer inside of kv_toolbox.

Layers are required in the database, so that we can do key cycling.
Layers can be used to do gc and packing for git, but also for rotating keys in the case of compromise.  When gc is performed, we should rotate the keys anyway.

Ideally we would have keys that could be set on a per repo basis.
If each repo had an encrypted .env.vault type of thing, then only authorized actors could read it ?
