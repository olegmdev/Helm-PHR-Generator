'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');

const functions = require('./functions');
const commonFunctions = require('../../common/functions');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the ${chalk.red('generator-user-tour')} generator!`)
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
      this.props = props;
    });
  }

  writing() {
      try {

          console.log(yosay(`${chalk.yellow('Step 0:')} Installing React-Joyride library...`));
          process.chdir('PulseTile-React-Core');
          this.spawnCommandSync('npm', ['i', 'react-joyride@next']);
          process.chdir('..');

          commonFunctions.goToPluginsDirectory();
          commonFunctions.cloneProject(
              this,
              'UserTour plugin',
              'master',
              'https://github.com/PulseTile-Plugins/Plugin-React-UserTour',
              'Plugin-React-UserTour'
          );


          setTimeout(function () {
              functions.replacePluginFiles();
          }, 10000);

          setTimeout(function () {
              functions.removeThemeDirectory();
          }, 10000);

      } catch (err) {
          console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
          console.error(`ERROR: ${err}`);
      }
  }
};
