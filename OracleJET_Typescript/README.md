#Oracle JET and Typescript#
This project is setup using the Oracle JET command-line tooling. It is an example of the JET QuickStart template, configured to use Typescript.

##Installing##
Make sure that you have the Oracle JET CLI installed
```javascript
  npm install -g generator-oraclejet
```  

Install TypeScript
```javascript
  npm install -g typescript
```

Clone this project and then run the following yeoman command from the project root and then compile the typescript files
```javascript
  yo oraclejet:restore
  tsc
```  

You should now be able to run the project from any server calling index.html. If you have the node http-server library installed, you can start the server with no caching enabled and open the index.html file in the default browser by typing...
```javascript
  http-server -c-1 -o
```  
  
