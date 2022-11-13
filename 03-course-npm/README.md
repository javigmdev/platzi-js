# NPM (Node Package Manager)



## Initialize project with npm
---
To set up a new or existing npm package (package.json)
```
npm init
```
*package.json*: contains all metadata about the project such as description, license, dependencies and scripts

<br>

Generate project without having it ask any questions
```
npm init -y
```



<br>

## Installation commands
---

Install the package on the project, as a production dependency (default):
```
npm install moment
npm i moment
```
Install the package on the project, as a development dependency
```
npm i eslint --save-dev
npm i eslint -D
```
Install the package on the project, as a production dependency
```
npm i react --save
npm i react -S
```
Installs the package on the system, without associating it to the project.
```
npm i -g cowsay
```
Install optional dependency
```
npm i eslint -o
```
Conflicts can occur when you have packages that use the same dependency with different versions. To avoid this you can simulate an installation with:
```
npm i react-dom --dry-run
```
Install a specific version of package:
```
npm i json-server@0.15.0
```
Install the lastest version of package:
```
npm i json-server@latest
```
Install all dependencies from package.json file:
```
npm install
```
<br>

## List installated packages
---

Project dependencies list:
```
npm list
```
System dependencies list:
```
npm list -g
```
<br>

## Scripts property of package.json
---
NPM scripts are terminal commands that perform a set of actions. Their purpose is to provide an effortless way to execute repetitive tasks, like:

* Running a linter tool on your code
* Executing the tests
* Starting your project locally
* Building your project
* Minify or Uglify JS or CSS (Cascading Style Sheets)

Example:
1. index.js
```
console.log('Hello World!');
```
2. package.json
```
 "scripts": {
    "start": "node src/index.js",
    "node": "node src/index.js && node src/index.js"
  },
```
3. execute script
```
npm run node

> npm-init@1.0.0 node
> node src/index.js && node src/index.js

Hello World!
Hello World!
```

<br>

## NPX (Node Package Execute)
---
It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above
Example: create a react project
```
npx create-react-app react-npm
```

<br>

## Dependencies update
---
*npm outdate*: check if any installed packages are currently outdate

```
npm outdate

Package                          Current   Wanted   Latest  Location                                      Depended by
@babel/core                       7.15.0   7.15.0  7.18.13  node_modules/@babel/core                      react-base
@babel/plugin-transform-runtime   7.15.0  7.18.10  7.18.10  node_modules/@babel/plugin-transform-runtime  react-base
@babel/preset-env                 7.15.0   7.15.0  7.18.10  node_modules/@babel/preset-env                react-base
@babel/preset-react               7.14.5   7.14.5   7.18.6  node_modules/@babel/preset-react              react-base
babel-loader                       8.2.2    8.2.2    8.2.5  node_modules/babel-loader                     react-base
css-loader                         6.2.0    6.2.0    6.7.1  node_modules/css-loader                       react-base
eslint                            7.32.0   7.32.0   8.23.0  node_modules/eslint                           react-base
eslint-config-airbnb              18.2.1   18.2.1   19.0.4  node_modules/eslint-config-airbnb             react-base
eslint-config-prettier             8.3.0    8.3.0    8.5.0  node_modules/eslint-config-prettier           react-base
```
To update a package to the latest version:
```
npm i json-server@latest
```

<br>

## Audit
---
*npm install* shows package vulnerabilities:
```
npm i

up to date, audited 992 packages in 4s

102 packages are looking for funding
  run `npm fund` for details

15 vulnerabilities (2 moderate, 10 high, 3 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues, run:
  npm audit fix --force

Run `npm audit` for details.
```
*npm audit*: submits a description of the dependencies configured in your project to your default registry and asks for a report of known vulnerabilities.
```
npm audit
# npm audit report

ansi-html  <0.0.8
Severity: high
Uncontrolled Resource Consumption in ansi-html - https://github.com/advisories/GHSA-whgm-jr23-g3j9
fix available via `npm audit fix --force`
Will install webpack-dev-server@3.11.3, which is outside the stated dependency range
node_modules/ansi-html
  webpack-dev-server  2.0.0-beta - 4.7.2
  Depends on vulnerable versions of ansi-html
  Depends on vulnerable versions of chokidar
  Depends on vulnerable versions of selfsigned
  node_modules/webpack-dev-server

ansi-regex  4.0.0 - 4.1.0 || 5.0.0
Severity: high
Inefficient Regular Expression Complexity in chalk/ansi-regex - https://github.com/advisories/GHSA-93q8-gq69-wqmw
Inefficient Regular Expression Complexity in chalk/ansi-regex - https://github.com/advisories/GHSA-93q8-gq69-wqmw
fix available via `npm audit fix`
node_modules/ansi-regex
node_modules/cliui/node_modules/ansi-regex
node_modules/yargs/node_modules/ansi-regex

async  2.0.0 - 2.6.3
Severity: high
Prototype Pollution in async - https://github.com/advisories/GHSA-fwr7-v2mv-hh25
fix available via `npm audit fix`
node_modules/async

eventsource  <1.1.1
Severity: critical
Exposure of Sensitive Information in eventsource - https://github.com/advisories/GHSA-6h5x-7c5m-7cr7
fix available via `npm audit fix`
node_modules/eventsource

...

15 vulnerabilities (2 moderate, 10 high, 3 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues, run:
  npm audit fix --force

```
Get the detailed audit report in JSON format:
```
npm audit --json
```
Scan your project for vulnerabilities and automatically install any compatible updates to vulnerable dependencies:
```
npm audit fix
```
Have audit fix install SemVer-major updates to toplevel dependencies, not just SemVer-compatible ones:
```
npm audit fix --force
```
If the last two commands do not fix all the vulnerabilities, update the packages with vulnerabilities to the latest version

<br>

## Delete dependencies
---
To delete a dependency:
```
npm uninstall <package_name>
```
It is also posible to delete it from the package.json. After editing the package.json it is recommended to install the project again:
1. Delete node_modules
```
rm -rf node_modules
```
2. Install
```
npm install
```
<br>

## Build
---
To create a build directory with a production build of our app:
```
npm run build
```
To see the output of *npm build*:
```
npm run build --dd
```
<br>

## package-lock.json
---
To show a message with deprecated libraries or that they will not have updates:
```
npm ci
npm WARN deprecated babel-eslint@10.1.0: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated

added 787 packages, and audited 788 packages in 5s

109 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```
and sync package-lock.json with package.json
<br>
<br>
*package-lock.json*: file generated automatically when packages or dependencies are installed in the project. Its purpose is to keep a history of installed packages and to optimize the way project dependencies and the contents of the node_modules folder are generated
