'use strict';

                                                                                  /* First, import any modules you need for your project */
const express = require('express');                                                  /* in this case, we want to import express and store as a constant named express*/
                                                                                
                                                                                   /* Second, initialize the express application from the module you previously loaded above... */
const app = express();                                                                  /* ... and store as a constant named "app" (which we will now use for all our routes and other commands*/


app.use(express.static('public'));                                                /* set up your ststic file server to serve files from the "public" folder */