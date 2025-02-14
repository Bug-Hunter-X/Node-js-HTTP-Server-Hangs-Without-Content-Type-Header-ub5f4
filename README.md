# Node.js HTTP Server Hanging Issue

This repository demonstrates a subtle bug in a Node.js HTTP server where omitting the `Content-Type` header in the response can cause the server to hang indefinitely.  The issue is resolved by explicitly setting the `Content-Type` header.

## Bug

The original `server.js` file contains the problematic code. Running this server will result in client requests hanging without a response.

## Solution

The `serverSolution.js` file provides the corrected code, which includes setting the `Content-Type` header. This resolves the hanging issue.

## How to reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `node server.js`.
4. Attempt to access the server using a tool like `curl` or a web browser.  Observe that the request hangs.
5. Run `node serverSolution.js`.  The request should now return the expected response.

## Root cause

The root cause lies in how Node.js handles HTTP responses. Without a proper `Content-Type` header, the client might not correctly interpret the response, leading to the server hanging. Adding the header provides crucial information to the client, enabling a smooth communication flow.