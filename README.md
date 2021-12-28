This Deno module exports a function ``serve_file_as_ReadableStream`` in TypeScript and JavaScript, which takes a file path string relative to the folder from which it's executed, returning a ``Response`` with the corresponding body and headers for the specified file.

Compile to JS:
``deno bundle ../src/lib/mod.ts ../src/lib/mod.js``