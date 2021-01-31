var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }
    async initPackage() {
        let answer = await this.prompt([{
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname // Default to current folder name
            },
            {
                type: "confirm",
                name: "cool",
                message: "Would you like to enable the Cool feature?"
            }
        ])
        const pkgJson = {
            "name": answer.name,
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1",
                "build": "webpack"
            },
            "author": "",
            "license": "ISC",
            "devDependencies": {
                "webpack": "^4.44.1",
                "vue-loader": "^15.9.3",
                "vue-template-compiler": "^2.6.12",
                "vue-style-loader": "^4.1.2",
                "css-loader": "^4.2.2",
                "copy-webpack-plugin": "^6.0.3"
            },
            "dependencies": {}
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
        this.npmInstall(["vue"], {
            'save-dev': false
        });
        this.npmInstall();

        this.fs.copyTpl(
            this.templatePath('hello.vue'),
            this.destinationPath('src/hello.vue'), {}
        );
        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js')
        );
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
            { title: answer.name }
        );
    }

};