
>[!tip] Created: [2025-08-22 Fri 09:00]

>[!question] Targets: 

>[!danger] Depends: 

from https://www.stainless.com/changelog/mcp-dynamic-tools

Large APIs with many endpoints can be difficult for LLMs to work with effectively when all endpoints are exposed as individual tools. The generated MCP server now provides a "dynamic tools" mode to address this issue.

When you specify _--tools=dynamic_ to the MCP server, instead of exposing one tool per API endpoint, it exposes just three powerful meta-tools:

1. _list_api_endpoints_ - Discovers available endpoints, with optional filtering by search query
2. _get_api_endpoint_schema_ - Gets detailed schema information for a specific endpoint
3. _invoke_api_endpoint_ - Executes any endpoint with the appropriate parameters

This approach allows the LLM to dynamically discover, learn about, and invoke endpoints as needed, without requiring the entire API schema to be loaded into its context window at once. The LLM will use these tools together to search for, look up, and call endpoints on demand.
