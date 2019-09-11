import bcrypt from 'bcrypt';

class BcryptEncryDecty {
    encryptData = data => {
        let saltRounds = 10;
    
        return new Promise( (resolve, reject) => {
            bcrypt.hash(data, saltRounds, (err, hash) => {
                if (err) {
                    reject(err);
                }
    
                resolve(hash);
            });
        });
    };

    compareHash = (currentData, encryptedHash) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(currentData, encryptedHash, function(err, res) {
                if (err || !res) {
                    reject(false);
                }
                resolve(res);
            });
        });
    }
}

const BcryptInstance = new BcryptEncryDecty();

export default BcryptInstance;