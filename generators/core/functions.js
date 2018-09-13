const yosay = require('yosay');
const chalk = require('chalk');
const process = require('process');
const mkdirp = require('mkdirp');

module.exports = {
    /**
     * This function updates Node modules of Core
     *
     * @param el
     * @return {boolean}
     */
    updateNpmModules: function(el) {
      console.log(yosay(`${chalk.yellow('Step 2:')} Now we are updating NPM-modules`));
      process.chdir('PulseTile-React-Core');
      el.spawnCommandSync('npm', ['install']);
      return true;
    },

    /**
     * This function creates directory for plugins
     *
     * @return {boolean}
     */
    createPluginsDirectory: function () {
      const themeDirectoryPath = 'src/components/theme/plugins';
      mkdirp(themeDirectoryPath);
      return true;
    }
};
