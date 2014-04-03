
// Twilio Credentials 		
var accountSid = ''; 
var authToken = ''; 
var appToken = '';
var YOUR_TWILIO_NUMBER = '';

// Require the twilio and express modules
var twilio = require('twilio'),
    express = require('express');
 
// Create an express application
var app = express();
 
// Render an HTML page which contains a capability token that
// will grant permission to accept inbound calls to the ID
// "kevin" (this could be any string)
app.get('/', function(req, res) {
 
    // Create an object which will generate a capability token
    // Replace these two arguments with your own account SID
    // and auth token:
    var capability = new twilio.Capability(
        accountSid,
        authToken
    );
 
    // Give the capability generator permission to accept incoming
    // calls to the ID "kevin"
    capability.allowClientIncoming('kevin');
 
    // Give the capability generator permission to make outbound calls,
    // Using the following TwiML app to request call handling instructions:
    capability.allowClientOutgoing(appToken);
 
    // Render an HTML page which contains our capability token
    res.render('index.ejs', {
        token:capability.generate(),
        twilioNumber: YOUR_TWILIO_NUMBER
    });
});
 
app.listen(1337);
console.log('Visit http://localhost:1337/ to accept inbound calls and make outbound calls!');