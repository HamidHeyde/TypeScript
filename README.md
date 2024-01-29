### Environment Setup
#### Editor
- Install `vscode` > `ctrl + p`
```
> Shell Command: Install code command in the Path
```
- Install `prettier` extension and apply following `user` settings in :
  - check `Format on save`
  - `Tab Size: 2`

#### TypeScript
- Install `typescript` in development mode
```npm
yarn add typescript -D
```
- Install `ts-node` in development mode
```npm
yarn add ts-node -D
```
- Install `typescript configuration` file
```npm
npx tsc --init
```

#### Running The Project
- Install Dependencies
```
npm/yarn install
```
- Using `ts-node`
```
ts-node ./FOLDER_NAME/index.ts
```
- Using `npm`/`yarn`
```
npm config set typescript_practices:project FOLDER_NAME
npm/yarn run start
```
