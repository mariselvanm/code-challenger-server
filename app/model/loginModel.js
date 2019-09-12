import { db } from './db';
import BcryptInstance from '../helpers/bcryptEncript';
import JwtModule from '../helpers/jwtToken';

class LoginModel {
    getJWTToken = (authDetails, callback) => {
        this.checkValidEmailID(authDetails.emailId).then( response => {
            BcryptInstance.compareHash(authDetails.password, response[0].password).then(res => {
                let userDetail = {
                    id: response[0].id,
                    username: response[0].username,
                    emailid: response[0].emailid,
                };

                JwtModule.jwtTokenGenerate(userDetail).then( jwtToken => {
                    callback(false, {authtoken: jwtToken});
                }).catch( err => {
                    callback({err: `Can't generate jwt token`})
                });
            }).catch( err => {
                callback({err : 'Invalid password'});
            });
        }).catch(err => {
            callback({err : 'Invalid mail ID'});
        });
    }

    checkValidEmailID = mailID => {
        let checkEmailQuery = 'SELECT * FROM users WHERE emailid = (?)'
        return new Promise((resolve, reject) => {
            db.query( checkEmailQuery, mailID, (err, response) => {
                if (!err && response.length) {
                    resolve(response);
                } else {
                    reject(`user doesn't exisit`);
                }
            });
        });
    }
};

const LoginModelExport = new LoginModel();

export default LoginModelExport;