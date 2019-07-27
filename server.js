'use strict';
                                                                                  /* First, import any modules you need for your project */
const express = require('express');                                                  /* in this case, we want to import express and store as a constant named express*/
                                                                                
                                                                                   /* Second, initialize the express application from the module you previously loaded above... */
const app = express();                                                                  /* ... and store as a constant named "app" (which we will now use for all our routes and other commands*/

 
let theCount = 0;                                                                  /* storage for the current count*/


app.use(express.static('public'));                                                /* set up your ststic file server to serve files from the "public" folder */


app.get("/the-count", (req, res) => {                                               /* when the user presses the button (i.e. sends a request after pressing the button*/
    console.log('incrementing the count');
    theCount += 1;                                                                    /* increment the counter by 1*/
    console.log(`the count is ${theCount}`);
    res.json({count: theCount});                                                      /* and the response will be a json object with the new count amount.*/
  });



// app.get('/', function(req, res) {                                                 /* Testing route if needed */
//     console.log('This is a working test response... ')
// });

app.listen(3000, function() {                                                       /* listen on port 3000 for incoming requests*/
    console.log(`Your app is listening on port 3000...`);
}); 
    