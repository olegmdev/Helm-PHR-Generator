'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const commonFunctions = require('../../common/functions');
const functions = require('./functions');

module.exports = class extends Generator {

  prompting() {
    this.log(yosay(`Welcome to ${chalk.red('Silver-Plugin-Feeds')} generator!`));
    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    try {
      commonFunctions.goToPluginsDirectory();
      commonFunctions.cloneProject(
        this,
        'Feeds plugin',
        'master',
        'https://github.com/PulseTile-Plugins/Silver-Feeds-Plugin',
        'Feeds'
      );
      functions.replacePluginFiles();
      functions.updateConfigFiles(this);
      console.log(yosay(`Congradulations!!! ${chalk.green('Feeds plugin')} was added successfully!!!`));
    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.log(yosay(`Please, remove plugin directory ${chalk.green('Feeds')} and repeat installing.`));
    }
  }
};
