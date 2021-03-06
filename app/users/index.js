const router = require('express').Router();
const userRepo = require('../../repository/userRepo');

//function for geting user
function getUserById(id) {
    let user = userRepo.findOneByUserid(id);
    if (user[0]) {
        return user[0];
    } else {
        return 'user not found';
    }
}

router.get('/users/profiles',
    (req, res)=>{
        let user = getUserById(req.params.id);
        //checking if returing data user or not
        if (req.user) {
            res.status(200);    
        } else {
            res.status(404); 
        }
        res.send(req.user);
    }
); 

module.exports = router