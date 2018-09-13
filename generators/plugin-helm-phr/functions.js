const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fs = require('fs');
const fsExtra = require('fs-extra');
const rimraf = require('rimraf');

const pluginsConfig = require('./pluginsConfig');

module.exports = {

  /**
   * This function adds importing of theme to main CSS file
   *
   * @return {boolean}
   */
  relocateContent: function () {
    console.log(yosay(`${chalk.yellow('Step 2:')} Copying ${chalk.green('Images')} and ${chalk.green('Styles')} to required locations.`));
    const srcPath = '../../..';
    process.chdir(srcPath);

    fsExtra.move('components/theme/plugins/Plugin-Helm-PHR-Theme/assets/images', 'assets/images', { overwrite: true }, function(err) {
      if (err) throw err;
    });
    fsExtra.move('components/theme/plugins/Plugin-Helm-PHR-Theme/assets/themes', 'styles/themes', { overwrite: true }, function(err) {
      if (err) throw err;
    });
    return true;
  },

  /**
   * This function adds importing of theme to main CSS file
   *
   * @return {boolean}
   */
  importThemeStyles: function () {
    console.log(yosay(`${chalk.yellow('Step 3:')} Including Helm-PHR CSS files...`));
    const newRow = "\n\n\n@import 'themes/index';";
    fs.appendFile('styles/main.scss', newRow, function(err) {
      if (err) throw err;
    });
    fs.appendFile('styles/core.scss', newRow, function(err) {
      if (err) throw err;
    });
    return true;
  },
    
  /**
   * This function switches theme from main to HelmPHR
   *
   * @param el
   * @return {boolean}
   */
  switchHelmTheme: function (el) {
    console.log(yosay(`${chalk.yellow('Step 4:')} Switching theme configuration...`));
    el.fs.copy(
      el.templatePath('themeConfigs.txt'),
      'themes.config.js'
    );
    return true;
  },

  /**
   * This function update logo images urls
   *
   * @param el
   * @return {boolean}
   */
  changeLogoImages: function (el) {
    console.log(yosay(`${chalk.yellow('Step 5:')} Changing images...`));
    el.fs.copy(
      el.templatePath('mainLogo.txt'),
      'components/presentational/MainLogo/LogoImage.js'
    );
    el.fs.copy(
      el.templatePath('headerImage.txt'),
      'components/containers/App/HeaderImage.js'
    );
    return true;
  },

  /**
   * This function update banners images urls
   *
   * @param el
   * @return {boolean}
   */
  changeBanners: function (el) {
    for (var i = 0, n = pluginsConfig.length; i < n; i++) {
      var item = pluginsConfig[i];
      if (!fs.exists('components/pages/' + item.name)) {
        el.fs.copyTpl(
          el.templatePath('bannersImage.txt'),
          item.componentUrl,
          {
            bannerSrc: item.banner,
            prevSrc: item.prev,
            prevImport: item.prevImport,
          }
        );
      }
    }
    return true;
  },

  /**
   * This function update preview images urls
   *
   * @param el
   * @return {boolean}
   */
  changePrevImages: function (el) {
    el.fs.copy(
      el.templatePath('prevImage.txt'),
      'components/pages/PatientsSummary/ImageSources.js'
    );
    return true;
  },

  /**
   * This function removes Theme directory
   *
   * @return {boolean}
   */
  removeThemeDirectory: function () {
    console.log(yosay(`${chalk.yellow('Step 6:')} Removing theme directory...`));
    rimraf('components/theme/plugins/Plugin-Helm-PHR-Theme', function (err) {
      if (err) throw err;
    });
    return true;
  }
};
