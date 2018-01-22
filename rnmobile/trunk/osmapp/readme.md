OpenSupermall App 2017

Post Checkout Instructions
--------------------------
1) We do not store ios, android and node_modules directories in repo. Please inform us if you need to make custom changes.
2) run "react-native upgrade" after cloning the repo.
3) run "react-native run-android" 
4) In your mobile device, go to developer settings and allow adb debugging. Attach your mobile to your computer
5) If everything goes fine you should see the app on your mobile screen.
6) More information on how to setup can be found at 
	"https://facebook.github.io/react-native/releases/0.23/docs/android-setup.html"
7) Use gradle daemon to reduce build time for android build.
	Run "cd {homedirectory} && cd .gradle"
	Run "nano gradle.properties"
	Add line "org.gradle.daemon=true"
	Save

Commit Instructions
-------------------
1) After creating a new file add it to the repo
   "svn add <filepath>"
2) Commit by files 
   "svn commit -m 'commit message' <src/login/file1.js>  <src/login/file2.js>" 
3) Always update before committing.
	"svn up"

Code Guidelines
---------------
1) Use snakecase as the variable naming convention.
2) Use ES6, so NO "var".
3) Screen width fixed at 80 columns.

Android Implementation Notes
----------------------------
1)Remove top "Navigation Bar"

iOS Implementation Notes
------------------------
1) Keep top "Navigation Bar"

Camera Access
-------------
1) Package used
	"https://github.com/lwansbrough/react-native-camera"
2) Do npm install and then do "react-native link react-native-camera"
3) Reference example code available in <src/scanner/main.js>
4) You need permission to use the camera access. Please ask before starting work on it.

Android SDK License Issue Fix
-----------------------------
1) cd to your SDK/tools/bin folder
2) run
	"./sdkmanager --licenses"
3) Accept all licenses by entering "y"

Server Request Guidelines
-------------------------
1) All request to the server is to be made using "fetch".
2) The base url is available in  <osmapp/config.js>
	"import Config from ./Config.js"
	"url=Config.server_base_url"
3) Please make sure the the server_base_url points to "<domain/rn/app>"
4) The login is managed by JWT. To access secure pages you need to modify the header to include the following parameter.
	"Authorization: Bearer {yourtokenhere}"
5) Token can be obtained by
	"token=await AsyncStorage.getItem('access_token')"

Routing
-------
1) <osmapp/routes.js> is for storing routes.
2) The best way to use is, create routes in your local directory, and then import it in routes.js.
3) Package used
	"https://github.com/aksonov/react-native-router-flux"

Config
------
1) <osmapp/config.js> is for storing global config.
2) To use it do 
	"import Congfig "./config.js"
	"config_item=Config.key"

Package Management
------------------
1) Package installs are audited.
2) Inform the Central Team of the package you wish to use. We will add it to the package.json
3) This is done to prevent multiple people adding the same package and/or people adding multiple package for the same thing.
4) This is also done to make sure all packages are compatible and doesn't break other packages.
5) The version have been frozen. To prevent incompatibility issues updates to packages are not permitted.

Scope Management
----------------
1) All edits to properties, methods, creation parameters, etc., MUST be local to your module.
2) Your scope is "local".

Directory Management
--------------------
1) You can only create directories inside the module you are working on.
2) For now we do not support global directories.
	"Allowed <osmapp/src/foo_module/bar_directory>"
	"Not Allowed <osmapp/src/bar_directory>"
3) Only in cases where the need for global directory cannot be replaced with an alternative,we can allow but only after review.

Global Assets
-------------
1) All assets which are used across modules shall be placed under this directory
2) Such global assets include stylesheets, fonts, images, logos, etc.
