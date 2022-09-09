module.exports = {
    browsers: ['chromium'],
    serverOptions: {
        command: `npm start`,
        port: 3000,
        protocol: 'http',
        launchTimeout: 60000,
        debug: true,
    },
    launchOptions: {
        headless: true
    }
}