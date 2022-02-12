const AccountController = require('../controllers/account.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', AccountController.index);
}

