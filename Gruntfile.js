var path = require('path')

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify')
    grunt.loadNpmTasks('grunt-contrib-connect')
    grunt.loadNpmTasks('grunt-contrib-copy')

    grunt.initConfig({
        browserify: {
            test: {
                options: {
                    debug: true
                },
                src: './test/index.js',
                dest: './test/runner/index.js'
            }
        },
        connect: {
            test: {
                options: {
                    base: path.resolve(__dirname, './test/runner/')
                }
            }
        },
        copy: {
            test: {
                files: [
                    {
                        src: path.resolve(__dirname, './node_modules/mocha/mocha.js'),
                        dest: path.resolve(__dirname, './test/runner/mocha.js')
                    },
                    {
                        src: path.resolve(__dirname, './node_modules/mocha/mocha.css'),
                        dest: path.resolve(__dirname, './test/runner/mocha.css')
                    }
                ]
            }
        }
    })

    grunt.registerTask('test', [
        'browserify:test',
        'copy:test',
        'connect:test:keepalive'
    ])

};
