module.exports = {
    apps: [
      {
        name: 'notifications.agentsoncloud.com', // change to your subdomain name

        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
      },
    ],
  }