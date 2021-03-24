// const axios = require('axios');

/**
 * Home View 
 */
const homeView = async (req, res, next) => {

    // const song = await axios.get('https://api.spotify.com/v1/me/player/currently-playing?market=PL&additional_types=episode', {
    //     headers: {
    //       "Accept" : "application/json",
    //       "Content-Type" : "application/json",
    //       "Authorization" : "Bearer BQAeTj2VqdrRYsVUD-ePV1CvJDTRnr-aaizCw5zTZDkaEO96dHrimbbatJhvASAZzhLh-vzsMJDbgvUflUcTH4La8LfHI4QtdHfXMJPft85V3-bkQWF9lSkIsI5bbXGorn2nNl-586lcsYcTBAYzUtDdDdIKx65BRBooFFAq"
    //     }
    // })
    // .then(function (response) {
    //   // console.log(response.data.item.album)
    //   return {
    //     name: response.data.item.name, 
    //     url: response.data.item.external_urls.spotify, 
    //     photo: response.data.item.album.images[1].url 
    //   } || null
    // })
    // .catch(function(){
    //   return null
    // })

    res.render('index', {
        song: null
    })
}

/**
 * Projects View 
 */
 const projectsView = (req, res, next) => {
    res.render('projects')
}

/**
 * About View 
 */
 const aboutView = (req, res, next) => {
    res.render('about')
}


/**
 * Contact View 
 */
 const contactView = (req, res, next) => {
    res.render('contact')
}


module.exports = {
    homeView,
    projectsView,
    aboutView,
    contactView
}