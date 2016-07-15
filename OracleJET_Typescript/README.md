#Oracle JET and Typescript#
This project is setup using the Oracle JET command-line tooling. It is an example of the JET QuickStart template, configured to use Typescript.

###Important Caveat!###
*I am NOT a typescript expert, or even much more than a novice at this point. This project is more of an example on how to get Typescript working with RequireJS and Knockout than anything else.  There is not a specific Oracle JET type definition file at this time.  If anyone out there would like to create one, please do so.*

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
  
##Resources##

* I used a lot of information from David Pizzi's blog post: [STRONG TYPING WITH KNOCKOUTJS AND REQUIREJS](http://blog.scottlogic.com/2015/06/02/StrongTypingWithKnockoutJSAndRequireJS.html)

##Thanks!##
* Special thanks to Laszlo Peter from Oracle for his teams work on using Typescript and Oracle JET on their own product.
