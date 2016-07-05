# Mobile Example using Filmstrip 	

Make sure the Oracle JET command line tooling is updated by running: npm -g install generator-oraclejet

To install this project, clone the project and then run "yo oraclejet:restore" from the root of this project.

You can also open this project directly in NetBeans with a simple project open and point to the directory. The "yo oraclejet:restore" command will still need to be run from the command line even if you open it in NetBeans afterwards.

After the project is loaded and Oracle JET has been added to it, you can build and serve it for whichever platform you like.  As an example, to build and run on an attached (USB tethered) Android phone, do the following:

grunt build --platform=android
grunt serve --platform=android --destination=device



