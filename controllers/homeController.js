const fs = require('fs')
const markdown = require('markdown-it')
const matter = require('gray-matter')

const md = new markdown()

/**
 * Home View 
 */
const homeView = async (req, res, next) => {
    const file = fs.readFileSync('./content/welcome.html', 'utf8');
    const data = matter(file);

    res.render('index', {
        ...data
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

    const file = fs.readFileSync('./content/about.md', 'utf8');
    const data = matter(file);
    const html = md.render(data.content)

    console.log(data.data.title)

    res.render('article', {
        html,
        ...data
    })

}


/**
 * Experience View 
 */
 const experienceView = (req, res, next) => {

    const file = fs.readFileSync('./content/experience.md', 'utf8');
    const data = matter(file);
    const html = md.render(data.content)

    console.log(data.data.title)

    res.render('article', {
        html,
        ...data
    })

}


/**
 * Contact View 
 */
 const contactView = (req, res, next) => {

    const file = fs.readFileSync('./content/contact.html', 'utf8');
    const data = matter(file);

    res.render('index', {
        ...data
    })

}


module.exports = {
    homeView,
    projectsView,
    aboutView,
    experienceView,
    contactView
}