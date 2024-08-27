exports.checkLoggedIn = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/login')
    }
}

exports.bypassLogin = (req, res, next) => {
    if (!req.session.user) {
        next()
    } else {
        res.redirect('/')
    }
}