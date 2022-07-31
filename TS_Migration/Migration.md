1. npx typescript --init  //Creates the tsconfig.json file
   Change few things in tsconfig.json 
    ● outDir - to be set. This is where TS files will be compiled to JS files
    ● rootDir - to be set. This is from where TS files will be picked up
    ● Uncomment moduleResolution

2. npm i -D typescript @types/node @types/express

3. Change the directory of start script

4. Add Build Script : tsc -p tsconfig.json

5. Run the build script

6. Install ts-node-dev

7. Remove tsc dependency
