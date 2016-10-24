/*jshint esversion: 6 */

const express = require( 'express' );
const { json } = require( 'body-parser' );
const app = express();
const port = 4000;

const middleware = require( './controllers/middleware' );
const mainCtrl = require( './controllers/mainCtrl' );

app.use( json() );
app.use( middleware.addHeaders );
mainCtrl( app );






app.listen( port, () => console.log(`listening on ${ port }`) );
