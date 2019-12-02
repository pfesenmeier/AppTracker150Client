export const environment = {
  production: true
};
export let APIURL = '';

switch (window.location.hostname) {
    // this is the deployed angular application
    case 'tak-apptracker150.herokuapp.com':
        // this is the full url of your deployed API
        APIURL = 'apptracker150serversqldbserver.database.windows.net';
        break;
    default:
        // this is the local host name of your API
        APIURL = 'http://localhost:4200';
}
