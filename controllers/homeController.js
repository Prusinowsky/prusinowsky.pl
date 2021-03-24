const fs = require('fs');
const matter = require('gray-matter');

/**
 * Home View 
 */
const homeView = async (req, res, next) => {
    const file = fs.readFileSync('./content/welcome.html', 'utf8');
    const data = matter(file);

    res.render('index', {
        data
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

    const file = fs.readFileSync('./content/about.html', 'utf8');
    const data = matter(file);

    res.render('index', {
        data
    })

}


/**
 * Contact View 
 */
 const contactView = (req, res, next) => {

    const file = fs.readFileSync('./content/contact.html', 'utf8');
    const data = matter(file);

    res.render('index', {
        data
    })

}


module.exports = {
    homeView,
    projectsView,
    aboutView,
    contactView
}