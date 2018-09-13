'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');

const functions = require('./functions');
const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.option('babel');
  }

  prompting() {

    this.log(
      yosay(`Welcome to ${chalk.green('PulseTile-Core')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: `Would you like to clone ${chalk.green('PulseTile-Core')} from GitHub?`,
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    try {

      commonFunctions.cloneProject(
        this,
        'PulseTile-Core',
        'master',
        'https://github.com/olegmdev/PulseTile-React-Core',
        'PulseTile-React-Core'
      );

      functions.updateNpmModules(this);
      functions.createPluginsDirectory();

      console.log(yosay(`Congradulations!!! ${chalk.green('PulseTile-Core')} was installed successfully!!!`));

    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.log(yosay(`Please, remove project directory and repeat installing.`));
    }
  }
};
