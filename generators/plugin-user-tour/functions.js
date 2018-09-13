const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fs = require('fs');
const fsExtra = require('fs-extra');
const rimraf = require('rimraf');

module.exports = {

  replacePluginFiles: function() {

    console.log(yosay(`${chalk.yellow('Step 2:')} Replacing UserTour plugin directory...`));

    const srcPath = '../../..';
    process.chdir(srcPath);

      fsExtra.moveSync(
        'components/theme/plugins/Plugin-React-UserTour/UserTour',
        'components/containers/UserTour',
        {
            overwrite: true
        }
    );

  },

  /**
   * This function removes Theme directory
   *
   * @return {boolean}
   */
  removeThemeDirectory: function () {
    console.log(yosay(`${chalk.yellow('Step 3:')} Removing plugin directory...`));
    rimraf('components/theme/plugins/Plugin-React-UserTour', function (err) {
      if (err) throw err;
    });
    return true;
  },

};
