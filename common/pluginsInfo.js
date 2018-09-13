module.exports = {
  'TopThreeThings' : {
    clientsUrl : {
      name: 'TOP_THREE_THINGS',
      url: 'topThreeThings'
    },
    plugins: {
      getTitle: 'topThreeThingsTitle',
      title: 'Top Three Things',
      url: 'topThreeThings',
      import: 'topThreeThings',
      pluginDirectory: '../plugins/TopThreeThings/index',
      imageImport: 'topThreeThingsPrevImage',
      imageSource: '../plugins/TopThreeThings/ImageSource',
      forTest: 'patientsTopThreeThings',
    },
    synopsisRequests: {
      duckUrl: '../plugins/TopThreeThings/ducks/fetch-patient-top-three-things.duck',
      requestSynopsis: 'fetchPatientTopThreeThingsSynopsisRequest',
      requestDetails: 'fetchPatientTopThreeThingsDetailRequest',
      request: 'fetchPatientTopThreeThingsRequest',
      onMount: 'fetchPatientTopThreeThingsOnMount',
      onMountDetails: 'fetchPatientTopThreeThingsDetailOnMount',
    },
    themeSelectors: {
      importUrl: null,
      selector: 'patientTopThreeThingsSelector',
      store: 'patientsTopThreeThings',
      url: 'topThreeThings',
    },
  },
  'Vaccinations' : {
    clientsUrl : { name: 'VACCINATIONS', url: 'vaccinations' },
    plugins: {
      getTitle: 'vaccinationsTitle',
      title: 'Vaccinations',
      url: 'vaccinations',
      import: 'vaccinations',
      pluginDirectory: '../plugins/Vaccinations/index',
      imageImport: 'vaccinationsPrevImage',
      imageSource: '../plugins/Vaccinations/ImageSource',
      forTest: 'patientsVaccinations',
    },
    synopsisRequests: {
      duckUrl: '../plugins/Vaccinations/ducks/fetch-patient-vaccinations.duck',
      requestSynopsis: 'fetchPatientVaccinationsSynopsisRequest',
      requestDetails: 'fetchPatientVaccinationsDetailRequest',
      request: 'fetchPatientVaccinationsRequest',
      onMount: 'fetchPatientVaccinationsOnMount',
      onMountDetails: 'fetchPatientVaccinationsDetailOnMount',
    },
    themeSelectors: {
      importUrl: null,
      selector: 'patientVaccinationsSelector',
      store: 'patientsVaccinations',
      url: 'vaccinations',
    },
  },
  'Feeds' : {
    clientsUrl : { name: 'FEEDS', url: 'feeds' },
    plugins: {
      getTitle: 'feedsTitle',
      title: 'Feeds',
      url: 'feeds',
      import: 'feeds',
      pluginDirectory: '../plugins/Feeds/index',
      imageImport: null,
      imageSource: null,
      forTest: null,
    },
    synopsisRequests: {
      duckUrl: '../plugins/Feeds/ducks/fetch-feeds.duck',
      requestSynopsis: 'fetchFeedsRequest',
      requestDetails: null,
      request: null,
      onMount: null,
      onMountDetails: null,
    },
    themeSelectors: {
      importUrl: '../plugins/Feeds/selectors',
      selector: 'feedsSelector',
      store: null,
      url: 'feeds',
    },
  }
};