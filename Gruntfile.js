module.exports = function(grunt) {

  // configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bowerInstall: {
      target: {
        src: [
          'index-dev.html'
        ],
        dependencies: true,
        devDependencies: false,
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-install');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};
