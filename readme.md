#Twilio Node Example
Working Example for **Making Inbound and Outbound Call from browser** using Twilio API

*All code is impleneted from the following tutorial, with some minor adjustments:*

[https://www.twilio.com/blog/2013/04/introduction-to-twilio-client-with-node-js.html](https://www.twilio.com/blog/2013/04/introduction-to-twilio-client-with-node-js.html)

---- 
	
##Overview
1. Follow the tutorial above
1. Enter Your personal data in the following variables in `app.js` file

        // Twilio Credentials 		
        var accountSid = ''; 
        var authToken = ''; 
        var appToken = '';
        var YOUR_TWILIO_NUMBER = '';
        

##Diagram
![Simple Workflow Diagram](https://raw.githubusercontent.com/akras14/twilio-node-example/master/diagram/diagram.png)

##Detailed Setup Instructions

1. Signup for a **demo account** at [https://www.twilio.com/](https://www.twilio.com/)
1. Get your **Account Sid** and **AuthToken** from Twilio Dashboard and update `app.js` via `var accountSid = ''; 
        var authToken = '';`
1. Npm Install on your localhost
1. Pipe your app into the real world using [ngrok](https://ngrok.com/) or deploy it on live instance
1. Register a Twiml App under Twilio Dashboard -> Dev Tools -> Twiml Apps
	- Point Voice field to `http://yourappid.ngrok.com/callData` (callData is an internal API call that returns call instructions via XML file)
	- Set request type to HTTP GET
	- Copy App's Sid Token 
1. Update `app.js` with your appToken from the step above `var appToken = '';`
1. Verify a phone number with Twilio (if you haven't already done so during the registration process)
1. Add your verified Twilio number into `app.js` file, `var YOUR_TWILIO_NUMBER = '';` 
1. Run the app via node app.js
1. Visit http://localhost:1337 and enter a phone number to dial