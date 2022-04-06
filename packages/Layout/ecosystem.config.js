module.exports = {
    apps: [
      {
        name: 'lerna.agentsoncloud.com', // change to your subdomain name

        script: '../../node_modules/nuxt/bin/nuxt.js',
        args: 'start',
      },
    ],
  }
