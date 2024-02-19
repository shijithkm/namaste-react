
# What i learned from Episode-02 Ingiting our app ? 🚀

# How to push your code into github ?

git init => This will make your local repo as git repo
git branch -M main => Create the main branch as main from master
git remote add origin https://github.com/shijithkm/namaste-react.git => This will help set origin as github repo
git add * => Helps to add all the files 
git push -u origin main => Helps to push into github


# What is npm ?

https://www.npmjs.com/
npm does not have a fullform it does not stand for package manager 

https://www.npmjs.com/
This is the source code for the three-word thingies that randomly appear in the header of the npmjs.com website.

npm init => This helps to initiate npm for your project 

webpack/parcel ==> This is a bundler used to buldle/packages your app so you can ship to production 
https://create-react-app.dev/ use webpack in the background 

npm install -D parcel
Two types of dependecies 
    1. dev dependency => This required only while dev phase 
    2. normal dependency => This required for prod and dev phase only 
-D means dev dependency 

  "devDependencies": {
    "parcel": "^2.11.0"
  }

  ^ => This is called caret, auto upgrated to latest minor version  
  ~ => This is called tilde, auto upgrated to major minor version  
 
 What is package-lock.json => Its a configuration for npm and it keeps track of exact version which is installed 
 What is integrity in package-lock =>   to maintain the hash which make sure your local and production code is same 
 Trasitive Dependencies => Our project is depend on parcel and parcel is dependend of its own dependencies and so on
 .gitingore => Exclude unwanted code push to git
 What is @ in node_modules => Scoped packages in npm are preceded by an '@' symbol.

 How to use Parcal ?

 npx parcel index.html ==> Execute package 

 Getting react from CDN is not good practice because its take it from CDN and its expensive call and use package.json
 npm install react 
 npm install react-dom

 and 

import React from "react"
import ReactDOM from "react-dom";

After this if you npx parcel index.html throws error

@parcel/transformer-js: Browser scripts cannot have imports or exports.
This is because normal javascript cannot understand this import keyword 
We need to tell browser its not a normal javascript and its a module 

<script type="module" src="./App.js"></script>

You have to use <script type="module"> to include a JS module in your page. Modules are treated differently than regular JS script files by the browser and thus you need to tell the browser that the file you are including is a module and not a regular JS script file

# What all parcel is doing 
- Dev Build
- Local Server
- HMR => Hot Module Replacement (Used by file watching algorithm written in c++)
         Its reducing time in each build becuase parcel is caching it gives you faster build (.parcel-cache)
- Caching
- Image Optimization 
- Minification 
- Bundling 
- Compress
- Consistent Hashing 
- Code Splitting 
- Differencial Bundling => This gives all browser support 
- Diagostic 
- Error Handling 
- Support to create https
- Tree shaking => It remove unused code from your project 
- Different build for dev and prod 
- read more https://parceljs.org/

- Generate production ready build => This create bundle and put it under dist folder 

npx parcel build index.html

When you execute npx parcel build index.html will throws below error because in package.json we mentiond main:"App.js", this is way we should tell the entry point, but in our case entry point is index.html.Error will go once you remove main:"App.js" from package.json

🚨 Build failed.

@parcel/namer-default: Target "main" declares an output file path of "App.js" which does not match the compiled bundle type "html".

  C:\Users\mails\Documents\react\namaste-react\Episode-02 Igniting our app\package.json:5:11
    4 |   "description": "This is Namaste React tutorial ",
  > 5 |   "main": "App.js",
  >   |           ^^^^^^^^ Did you mean "App.html"?
    6 |   "scripts": {
    7 |     "test": "jest"

  💡 Try changing the file extension of "main" in package.json.

  # How to support all the browser ?

  browserslist => this configuration helps you to do that 
  Eg. Support last 10 versions of all the browsers 
    "browserslist":[
    "last 10 versions"  
  ]

  https://browserslist.dev/?q=bGFzdCAxNSB2ZXJzaW9ucw%3D%3D


All above techniques used in create react app 🚀

