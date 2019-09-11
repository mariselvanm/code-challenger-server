import { db } from './db';
import BcryptInstance from '../helpers/bcryptEncript';

class LoginModel {
    getJWTToken = (authDetails, callback) => {
        this.checkValidEmailID(authDetails.emailId).then( response => {
            BcryptInstance.compareHash(authDetails.password, response[0].password).then(res => {
                // TODO : Generate jwt token
                callback(false, res);
            }).catch( err => {
                // TODO : send Err to callback
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