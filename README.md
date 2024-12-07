# Node.js Uncommon Error: Cannot find module 'express'

This repository demonstrates an uncommon error encountered when using Express.js within a nested node_modules folder structure. The error, "Cannot find module 'express'", can occur even when Express.js is properly installed.

## Problem

When your project has nested node_modules folders or when the express package is installed in a nested dependency this issue can occur.  Node.js's module resolution algorithm may not locate the correct express module if it is not installed at the top level of the project.

## Solution

The recommended solution involves either restructuring the project to avoid nested node_modules or ensuring express is installed at the top level of your project.