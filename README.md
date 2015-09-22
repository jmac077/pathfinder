## *PATHFINDER*
Mapping tool for [*EVE ONLINE*](https://www.eveonline.com)

- Project[https://www.pathfinder.exodus4d.de](https://www.pathfinder.exodus4d.de)
- Community[google +](https://plus.google.com/u/0/b/110257318165279088853/110257318165279088853)
- Screenshots[imgur.com](http://imgur.com/a/k2aVa)
- Media[youtube.com](https://www.youtube.com/channel/UC7HU7XEoMbqRwqxDTbMjSPg)
- Licence[MIT](http://opensource.org/licenses/MIT)

##### Beta Information
**This project is still in beta phase and is not officially released! Feel free to check the code for security issues.**

If you are looking for installation help, please check the [wiki](https://github.com/exodus4d/pathfinder/wiki) (DRAFT). More information will be added once the beta is over and the first stable build is released.

## Development Environment
*PATHFINDER* comes along with a simple, [*Gulp*](http://gulpjs.com/) based, build process.
There are two main *Gulp tasks* that should help you.
- `default` task is designed for *"continuous development"* scenario
- `production` task is designed for *"production deployment"* scenario

> If you are **not** planning to change the codebase, you don´t have to do the following steps!

**1. Install [Node.js](https://nodejs.org)(> v.4.0.1) with [npm](https://www.npmjs.com/)**

**2. [Copy/Fork](https://help.github.com/articles/fork-a-repo/) this Repo**
  ```
  $ git clone https://github.com/exodus4d/pathfinder.git
  ```
**3. Install all required `node_modules` for *"continuous development"* from `package.json` (e.g.[Gulp](http://gulpjs.com/))**
  ```
  $ npm install
  ```
**4. Run *Gulp* task `default` with your version `tag` as param. It will do:**
 - clean `dist` folder (./public/js/x.x.x)
 - init file watcher for \*.js changes
 - running [jsHint](http://jshint.com/docs/) on file change
 - copying **raw** *\*.js* files from *./js* to `dist` folder on file change

  ```
  $ gulp default --tag v0.0.10
  ```

## Production Environment
**1. Install all required dependencies (check "Development Environment" steps )**

**2. Run *Gulp* task `production` with your version `tag` as param. It will do:**
 - clean `dist` folder (./public/js/x.x.x)
 - running [jsHint](http://jshint.com/docs/)
 - running [requireJs Optimizer](http://requirejs.org/docs/optimization.html) (see [build.js](https://github.com/exodus4d/pathfinder/blob/master/build.js))
    - minify \*.js files
    - uglyfy \*.js files
    - combine \*.js dependencies
    - generate \.js `source maps`
    - copying **compressed** *\*.js* to `dist` folder for production deployment
  
```
$ gulp production --tag v0.0.10
```
> The `production` task may take some seconds (30+ seconds)!
As a result, you should have all generated \*.js files ready for deployment in the `dist` folder.
The unique version `tag` in this path should ensure that `cache busting` is working correct.

## CSS generation
If you are planning to change/edit any *CSS* styles, you need to install [Compass](http://compass-style.org/),
in order to build the single \*.css file out of the **raw** \*.scss source files.

**1. [Ruby install](https://www.ruby-lang.org/en/)**

**2. [Compass install](http://compass-style.org/install/)**

**3. Start *Compass* file watcher for \*.scss changes in project `root` (see [config.rb](https://github.com/exodus4d/pathfinder/blob/master/config.rb))**
  ```
  $ compass watch
  ```
> This will watch all \*.scss files for changes and generate a compressed \*.css file (./public/css/pathfinder.css).
Don´t worry about `cache busting`. Your current version `tag` will be added to the final path (e.g. ./public/css/pathfinder.css?v.0.0.10)

## Project structure

```
  |-- (0755) app              --> backend [*.php]
      |-- app               --> "Fat Free Framework" extensions
      |-- lib               --> "Fat Free Framework"
      |-- main              --> "PATHFINDER" root
      |-- config.ini        --> config "f3" framework
      |-- cron.ini          --> config cronjobs
      |-- pathfinder.ini    --> config pathfinder
      |-- routes.ini        --> config routes
  |-- (0755) build_js       --> JS build folder and source maps (minified, uglified)
      |-- app               --> "PATHFINDER" core files
      |-- lib               --> 3rd partie extension/library
      |-- build.txt         --> generated build summary
  |-- (0755) js             --> JS source files (raw)
      |-- app               --> "PASTHFINDER" core files (not used for production )
      |-- lib               --> 3rd partie extension/library (not used for production )
      |-- app.js            --> require.js config (!required for production!)
  |-- (0777) logs           --> log files
      |-- ...
  | -- node_modules         --> node.js modules (not used for production) [check "Development Environment"]
      |-- ...
  |-- (0755) public         --> frontend source
      |-- css               --> CSS dist/build folder (minified)
      |-- fonts             --> (icon)-Fonts
      |-- img               --> images
      |-- js                --> JS dist/build folder
      |-- templates         --> templates
  |-- sass                  --> SCSS source (not used for production )
      |-- ...
  |-- (0777) tmp            --> cache folder
      |-- ...
  |-- (0755) .htaccess      --> reroute/caching rules
  |-- (0755) index.php

  --------------------------
  CI/CD config files:
  --------------------------
  |-- build.js              --> "RequireJs Optimizer" config (not used for production )
  |-- config.rb             --> "Compass" config (not used for production )
  |-- gulpfile.js           --> "Gulp" task config (not used for production )
  |-- package.json          --> "Node.js" dependency config (not used for production )
  |-- README.md             --> This file :) (not used for production )
```

## Thanks!
I´m very proud that **you** are using *PATHFINDER*!

It took me month of time in development until this project got into the first *BETA*. If you like it, please help to improve it.
(report bugs, find security issues,...)