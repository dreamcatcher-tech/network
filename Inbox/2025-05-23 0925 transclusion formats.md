
>[!tip] Created: [2025-05-23 Fri 09:25]

>[!question] Targets: 

>[!danger] Depends: 

inside a file, use the citations format that openai uses:

1) `【F:<file_path>†L<line_start>(-L<line_end>)?】`
  - File path citations must start with `F:`. `file_path` is the exact file path of the file relative to the root of the repository that contains the relevant text.
  - `line_start` is the 1-indexed start line number of the relevant output within that file.

  2) `【<chunk_id>†L<line_start>(-L<line_end>)?】`

  - Where `chunk_id` is the chunk_id of the terminal output, `line_start` and `line_end` are the 1-indexed start and end line numbers of the relevant output within that chunk.