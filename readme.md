# (WIP) Using Jest to test events in a react-typescript project


(-S)
- react
- react-dom

-D
- typescript
- @types/react
- @types/react-dom
- @testing-library/react // This is the testing-library for react; react-testing-library
- jest 
- @types/jest
- @testing-library/jest-dom 
- ts-jest
- webpack 
- webpack-cli 
- ts-loader 
- source-map-loader

TS setup
- tsconfig.json

React build
- webpack.config.js
> npx webpack
- NO HOT RELOAD

App
- index.html
- src/index.tsx


Jest setup
- jest.config.js
- package.json scrips
- tsconfig.json "esModuleInterop": true
- src/globals.d.ts to ensure additional Jest matchers are available for all test files
