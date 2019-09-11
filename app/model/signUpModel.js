import { db } from './db';
import BcryptInstance from '../helpers/bcryptEncript';

class SignUp {
    // Need to be give fro bcrypt
    
    createNewUser = (userDetails ,callback) => {
        let executeQuery = `INSERT INTO users (username, emailid, password)
        VALUES (?, ?, ? )`;

        BcryptInstance.encryptData(userDetails.passWord).then( hash => {
            let userDetailsValues = [ userDetails.userName, userDetails.emailId, hash ];

            db.query(executeQuery, userDetailsValues, (err, response) => {
                callback(err, response);
            });
        }).catch( err => {
            callback(err);
        });
    }
};

const SignUpModel = new SignUp();

export default SignUpModel;