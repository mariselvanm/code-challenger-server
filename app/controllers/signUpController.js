import SignUpModel from '../model/signUpModel';

class SignUpController {
    static signUpUser = (req, res) => {
        let userDetails = {
            userName : req.body.username, 
            emailId : req.body.emailId, 
            passWord : req.body.password
        };

        SignUpModel.createNewUser(userDetails, (err, response) => {
            if (err) {
                res.send(err);
            }
            res.send(response);
        });
    };
}

export default SignUpController;