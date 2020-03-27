let apiUrl

const apiUrls = {
    production: 'https://expedia-clone.herokuapp.com/api',
    deployment: ''
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.deployment
} else {
    apiUrl = apiUrls.production
}

export default apiUrl

/* 
    This apiConfig file provides a variable for our API calls to the back-end. While we are working in deployment (i.e. accessing our back-end via localhost), the root of our URL will be localhost:3001. When in production, it will switch to our live heroku link.
 */