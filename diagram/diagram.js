//Run node diagram.js to generate new diagram
var wsd = require('websequencediagrams');
var multiline = require('multiline');
var fs = require('fs');

var diagram = multiline(function() {/*
	Client -> Server: GET meeting 
	Server -> Twilio Application: Generate Unique Token
	Twilio Application -> Server: Unique Token
	Server -> Client: Render page with Twilio Application Token and Caller ID
	Client-> Twilio Application: Submit call request with CallerID, PhoneNumber, sendDigits(Extension)
	Twilio Application -> Server: Request call instructions (CallerID, PhoneNumber, sendDigits)
	Server -> Twilio Application: Return call Instructions in TwiMLT (XML)
	Twilio Application -> Outside Line: Makes a Call
	Outside Line -> Twilio Application: Answers the Call
	Twilio Application -> Outside Line: Sends Extension
	Outside Line <-> Twilio Application: Sends and Receives Audio
	Twilio Application <-> Client: Pipes Audio In and Out
	Client-> Twilio Application: Hang up Request
	Twilio Application -> Outside Line: Hang up
	Twilio Application -> Client: Call Disconnected
*/});

wsd.diagram(diagram, "modern-blue", "png", function(er, buf, typ) {
    if (er) {
        console.error(er);            
    } else {
        console.log("Received MIME type:", typ);
        fs.writeFile("diagram.png", buf);
    }
});