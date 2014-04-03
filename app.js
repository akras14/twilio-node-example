
// Twilio Credentials 		
var accountSid = ''; 
var authToken = ''; 
var appToken = '';
var YOUR_TWILIO_NUMBER = '';

// Require the twilio and express modules
var twilio = require('twilio');
var express = require('express');
var js2xml = require('js2xmlparser');
 
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

//XML Generated to be used with TWIML App
//https://www.twilio.com/docs/api/twiml
app.get('/callData', function(req, res){
    var phoneNumber = req.query.PhoneNumber;
    var accessCode = req.query.sendDigits;

    if(!phoneNumber || !accessCode){
        res.send(404, "Please provide conference number and access code");
    }

    var callData = {
        "Dial": {
            "@" : {
                "action" : "/forward?Dial=true",
                "callerId": "4158768737"
            },
            "Number": {
                "@": {
                    "sendDigits" : accessCode
                },
                "#" : phoneNumber
            }
        }
    };

    res.header('Content-Type','text/xml').send(js2xml('Response', callData));
});
 
app.listen(1337);
console.log('Visit http://localhost:1337/ to accept inbound calls and make outbound calls!');