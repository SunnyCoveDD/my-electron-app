module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        authToken: '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',
        repository: {
          owner: 'SunnyCoveDD',
          name: 'my-electron-app',
        },
        prerelease: false,
        draft: true,
        fileName: (opts) => {
          // You can modify the file name here, for example:
          return `my-electron-app-${opts.platform}-${opts.arch}-${new Date().toISOString()}.zip`;
        },
      },
    },
  ],
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: process.env.CERTIFICATE_PASSWORD,
      },
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
