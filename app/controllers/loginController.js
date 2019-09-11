import LoginModelExport from '../model/loginModel';

class LoginController {
    static loginUser = (req, res) => {
        let loginDetails = {
            emailId : req.body.emailId,
            password : req.body.password
        };

        LoginModelExport.getJWTToken(loginDetails, (err, response) => {
            console.log(err, response);
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.send(response);
        });

       // res.send({msg:"okasd"});
    };
};

export default LoginController;