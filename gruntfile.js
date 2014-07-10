
module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            script: {
                files: ["bupa/**/*.js"],
                tasks: ["shell:copy", "shell:reload"]
            }
        },
        shell: {
            copy: {
                command: "cp -r bupa $WEBSCRIPT"
            },
            reload: {
                command: 'curl -uadmin:admin --data "reset=on" http://localhost:8080/alfresco/service/'
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-shell");
    grunt.registerTask("default", ["watch"]);
};

