'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
var fs = require('fs');
var mkdirp = require('mkdirp');
var rmdir = require('rmdir');

const functions = require('./functions');
const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {

  prompting() {
    this.log(yosay(`Welcome to the cool ${chalk.red('generator-plugin-helm-phr-theme')} generator!`));
    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    try {

      commonFunctions.goToPluginsDirectory();

      commonFunctions.cloneProject(
        this,
        'HelmPHR-theme plugin',
        'master',
        'https://github.com/PulseTile-Plugins/Plugin-Helm-PHR-Theme',
        'Plugin-Helm-PHR-Theme'
      );

      functions.relocateContent();
      functions.importThemeStyles();
      functions.switchHelmTheme(this);
      functions.changeLogoImages(this);
      functions.changeBanners(this);
      functions.changePrevImages(this);
      functions.removeThemeDirectory();

      console.log(yosay(`Congradulations!!! ${chalk.green('HelpPHR-theme plugin')} was added successfully!!!`));
      console.log(yosay(`If you want to build the project run: ${chalk.green('npm run build')}`));

    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.log(yosay(`Please, remove plugin directory ${chalk.green('Plugin-Helm-PHR-Theme')} and repeat installing.`));
    }
  }
};
