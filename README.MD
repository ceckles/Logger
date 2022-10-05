# LOGGER
A project I setup to testing out how to log, format and process event, errors etc... logs for debug and suport in a production and dev env with a live tail view with logtail which is a free log processing service.

# Install
this is a nodejs project so you need to have nodejs installed on your machine. for more info on how to install nodejs on your machine go to [nodejs.org](nodejs.org)
1. clone the repo
2. Open project folder in your IDE(Visual Studio Code, Atom, Sublime Text, etc...)
3. run `npm install`  in terminal to install all the dependencies
4. create .env file in the root of the project and add the following
```bash
# ENV be prod or dev prod will send logs to logtail and save locally dev will only save locally
LOCATION_ENV=prod
#your log token from logtail
LOG_Token=
```
5. run `npm start` to start run basic of base error test.(after you sign up for logtail and get token)


# logtail
I used logtail for the real time log processing:
1. Create a logtail account
2. Click Connect to a source
3. Name Souce
4. Select Platform for this project I used Node.js
5. Copy the token and paste it in the .env file
5. Click live tail of your source from the list in center.
[logtail](https://betterstack.com/logtail)