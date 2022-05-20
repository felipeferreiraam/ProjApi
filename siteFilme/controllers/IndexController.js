module.exports = class IndexController {
    static index (req, res) {
        res.send ('Usando pasta controlller!!')

        res.render('index', {
            dois : dois
        })
    
    }
}