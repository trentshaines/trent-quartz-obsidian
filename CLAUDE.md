# Quartz Development Guide

## Build Commands
- `npm run quartz` - Core CLI (aliased to `./quartz/bootstrap-cli.mjs`)
- `npm run docs` - Build and serve docs
- `npm run check` - Run type check and prettier check
- `npm run format` - Format code with prettier
- `npm run test` - Run all tests
- `tsx ./quartz/util/path.test.ts` - Run a single test file

## Code Style
- **TypeScript**: Use strict type checking with explicit return types
- **Imports**: Group imports from same module, external deps first, then internal
- **Functions**: Prefer arrow functions; async/await for async ops
- **Formatting**: 100 char line width, 2-space indent, no semicolons
- **Naming**: PascalCase for components/types, camelCase for variables/functions
- **Components**: React (Preact) functional components with JSX
- **Error Handling**: Try/catch for async, optional chaining and nullish coalescing
- **Types**: Descriptive interfaces/types with generics where appropriate
- **Architecture**: Plugin-based system with transformers, filters, and emitters

## Project Structure
Quartz is a digital garden publishing tool that renders Markdown content as a website.