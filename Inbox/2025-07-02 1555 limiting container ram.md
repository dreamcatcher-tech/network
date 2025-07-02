
>[!tip] Created: [2025-07-02 Wed 15:55]

>[!question] Targets: 

>[!danger] Depends: 

If we run the main program with `deno run --v8-flags="--max-old-space-size=256" ...` then each worker will be limited to this amount of ram, making it safe to run untrusted code, and know that it won't pop the ram.