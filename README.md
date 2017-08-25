# OrchestraManager

An app that allows users and administrators to keep track of orchestra personnel.

## User stories
* As a user, I'd like to visit a page to see a list of all orchestra members.
* As a user, I'd like to click an orchestra member's entry in the list to visit their profile page, which should include more details about them.
* As a user, I'd like the option to visit an "About" page that explains what the orchestra is, and what they do.
* As a user, I'd like all data persisted in a database, so it's always there when I need it.
* As an administrator, I want to add new members to the orchestra. (User authentication is not required).
* As an administrator, I want to edit orchestra member profiles, in case I make a mistake, or need to update their details.
* As an administrator, need the option to delete an orchestra member, in case they leave the orchestra.

## Instructions for setup

* If you don't have a free account on Firebase, where the database for this project will need to reside, please do so at [Firebase's website](https://firebase.google.com/).
* Then in the dashboard area of the site, click the *Create a New Project* option, provide `orchestra-manager` as the name, and select your country/region from the dropdown menu.
* You'll then see an *Overview* area; select *Add Firebase to your web app*.
* Firebase should respond with a pop-up window such as `apiKey`, `authDomain`, etc. Copy and paste all that in a temporary area for use in a moment.
* Still in your Firebase console, close the popup window and click *Database* on the left menu, find under "Realtime Database" the *Rules* tab and click on that.
* Change the rules to look like this:
```
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```
...and *Publish*. Then hit the *Data* tab to return to your empty database.
* Clone the repository using the `git clone` command.
* Navigate to the top of your local cloned directory and run:
1. $ npm install
2. $ bower install
3. $ bower install bootstrap --save`
4. $ npm install angularfire2@4.0.0-rc.0 firebase --save
* Create a `src/app/api-keys.ts` file and copy the following into it:
```
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```
You'll want to add the strings that were provided by Firebase that you saved from the popup window in Firebase. You only need the parameters outlined in the `api-keys.ts` file.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Technologies Used
* Angular 2
* Typescript
* Javascript
* HTML
### License

Copyright 2017 Michael Dunlap

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
