import jwt from 'jsonwebtoken';

class JWTMODULE {
    secretKey = '$%we124Are';

    jwtTokenGenerate  = data => {
        return new Promise((resolve, reject) => {
            jwt.sign( data, this.secretKey, { algorithm: 'HS256' }, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    }

    jwtTokenVerify = token => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.secretKey, { algorithms: ['HS256'] }, function (err, payload) {
                if (err) {
                    reject(err);
                } else {
                    resolve(payload);
                }
            });
        });
    }

};

const JwtModule = new JWTMODULE();

export default JwtModule;