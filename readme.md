## Getting Started
We have two task runners:
* GulpJS
* GruntJS

# Grunt JS:
It is a task runner which is used for running repetitive tasks which needs to be performed time to time like publishing, unit testing, minification or concatenation of files.

### Prerequisites

Before GruntJS, you should have:
* Node package manager installed. Find it here - [npm](https://www.npmjs.com/)

Before installing GruntJS, two files are needed to be created in your project.
* package.json
* gruntfile.js.

create package.json file in your local project using: 
```
npm init
```
Also create gruntfile.js in your local project.

### Installing

To begin with, install grunt-cli from node package manager (npm) using:
```
npm install grunt-cli -g
```

Also install grunt into your local project by command:
```
npm install grunt --save-dev
```

Make sure you have grunt added as a dependency under devDependencies in [package.json](https://github.com/Areeeb/GruntJS/blob/master/package.json).

### Making gruntfile.js
Import grunt modules, pass in the Grunt configurations, plugins and tasks you wish to perform in gruntfile.js.

[gruntfile.js](https://github.com/Areeeb/GruntJS/blob/master/gruntfile.js) is there to:
```
* Configure the tasks.
* Contains objects that contains references to grunt plugins.
* Provide paths to files that the task is to be performed upon.
```

To download a plugin, run the following command:
```
npm install [plugin_name] concat --save-dev
```

Make sure The plugin downloaded is also added to [package.json](https://github.com/Areeeb/GruntJS/blob/master/package.json).

Load the plugin into [gruntfile.js](https://github.com/Areeeb/GruntJS/blob/master/gruntfile.js) by the function loadNpmTasks() as:
```
grunt.loadNpmTasks('plugin_name')
```
Use the name of the plugin as the name of the object in the configuration of the plugins i.e. grunt.initConfig() as the reference to the plugin. Inside the object, make a task object and name it that fits the description of the files on which the plugin is to perform on task on. Inside the object pass two attribute objects. The first object is the source which is an array of path of files or a single file path that needs to be concatenated or minified etc. The second parameter is the destination which is the path of the destination file where the resultant file would be created or updated.
For instance, the plugin is contrib-sass. The configuration object will be:
```
grunt.initConfig({
    sass: {
        sassFiles: [{
            src: 'css/styles.sass',
            dest: 'css/Result.css'
        }]
    }
});
```
Run the plugin by command:
```
grunt [plugin_name]
```
For instance if the plugin is contrib-sass then the command would be:
```
grunt sass
```
If we want to perform a specific task, we can register task as well by using:
```
grunt.registerTask("task_name", function() {
	// Task to perform
});
```
If the task is already defined inside the plugin object, we can register that particular task by:
```
grunt.registerTask("task_name", ["plugin_name:task_object_name"]);
For instance:
grunt.registerTask("sass_to_css", ["sass:sassFiles"]);
```
You can even run multiple tasks by registering all tasks into one like:
```
grunt.registerTask('AllTasks', ['Task1', 'Task2', 'Task3']);
```
There are a whole lot of plugins available for more tasks. Discover them at [https://gruntjs.com/plugins](https://gruntjs.com/plugins).
