module.exports = {
    helpers: {
        raw: function(options) {
            return options.fn(this)
        }
    },
    skipInterpolation: ["**/*.vue", "**/static/**"],
    prompts: {
        name: {
            'type': 'string',
            'required': true,
            'message': 'I Wish'
        },
        description: {
            'type': 'string',
            'required': false,
            'message': 'Project description',
            'default': 'Nuxt '
        },
        author: {
            'type': 'string',
            'message': 'Author'
        },
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};