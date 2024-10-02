const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash); //$2b$12$EAfXNrxw2Vcoq.rWywnhKeNrq.DQPhhOVynqOtE2RGNA5iM8UdNyK
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash)
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("Logged you in!! success match!!")
    } else {
        console.log("incorrect")
    }
}


// const hashPw = hashPassword("monkey");
login("monkEy", "$2b$12$pT7.d3.zTf34b39buEjNtOlbSsPrPnfpcD/f7bUWG07PYORK8sJ3a")

