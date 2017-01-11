# AngularJS

This file contains how I start to learn angularJS together with UI-Router from scratch with a project.  

Along the way, I realize it is important to write modularized code using angular provided lib, service, factory, provider and etc. Here are some notes I learned both angularJS and UI-Router.

1. Directives:  
   When writing jQuery-like code, since there is jQLite (jQuery-like lib), it is best practice to use directives to wrap it up. 
   Not to expose jQuery code inside of angular functions.
   
2. Modularization:  
   Having a pile of files, modularized code becomes critical. Sometimes people put together files based on the file type, like,  
   Services (folder)  
     -service0.js  
     -service1.js  
      
   However, it is BEST practice to modularize the code based on features, like,  
   People (folder)  
     -peopleController.js    
     -peopleService.js
     -peopleUtil.js  
		
