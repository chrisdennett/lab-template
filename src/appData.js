const defaultAppData = {
  title: "Template",
  infoUrl: "https://artfly.io",
  settings: {
    showKey: {
      label: "Show Key",
      type: "boolean",
      defaultValue: true
    },

    lineColour: {
      label: "Line Colour",
      type: "colour",
      defaultValue: "#4db39e"
    },

    testRange: {
      label: "Sample Range",
      type: "range",
      min: 1,
      max: 10,
      defaultValue: 2
    }
  }
};

export const getAppData = (srcData = defaultAppData) => {
  // add easy access values from default data
  const appData = { ...defaultAppData };
  const settingsKeys = Object.keys(defaultAppData.settings);

  for (let key of settingsKeys) {
    appData[key] = defaultAppData.settings[key].defaultValue;
  }

  return appData;
};
