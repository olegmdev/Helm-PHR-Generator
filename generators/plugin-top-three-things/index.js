'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {
  prompting() {

    this.log(
      yosay(`Welcome to the ${chalk.red('Silver-Plugin-TopThreeThings')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    try {

      commonFunctions.goToPluginsDirectory();

      commonFunctions.cloneProject(
        this,
        'TopThreeThings plugin',
        'master',
        'https://github.com/PulseTile-Plugins/Silver-Plugin-TopThreeThings',
        'TopThreeThings'
      );

      commonFunctions.updateConfigFiles(this);

      console.log(yosay(`Congradulations!!! ${chalk.green('TopThreeThings plugin')} was added successfully!!!`));

    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.log(yosay(`Please, remove plugin directory ${chalk.green('TopThreeThings')} and repeat installing.`));
    }
  }
};
