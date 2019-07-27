

                                                                                  /* First, import any modules you need for your project */
const express = require('express');                                                  /* in this case, we want to import express and store as a constant named express*/
                                                                                
                                                                                   /* Second, initialize the express application from the module you previously loaded above... */
const app = express();                                                                  /* ... and store as a constant named "app" (which we will now use for all our routes and other commands*/


let theCount = 0;


app.use(express.static('public'));                                                /* set up your ststic file server to serve files from the "public" folder */


app.get("/the-count", (req, res) => {
    console.log('incrementing the count');
    theCount += 1;
    console.log(`the count is ${theCount}`);
    res.json({count: theCount});
  });



// app.get('/', function(req, res) {                                                 /* Testing route*/
//     console.log('This is a working test response... ')
// });

app.listen(3000, function() {                                                       /* listen on port 3000 for incoming requests*/
    console.log(`Your app is listening on port 3000...`);
}); 
    