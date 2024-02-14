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
#### Running the project
- Install Dependencies
```
npm/yarn install
```
- Running the current project from the root `index.ts`
```
npm/yarn run start
```
##### Running an individual folder within the Project
- Using `npm`/`yarn`
```
npm config set typescript_practices:project FOLDER_NAME
npm/yarn run start_project
```
