const { nanoid } = require('nanoid');
const { usersDB } = require('../database');

const authControllers = {
  signIn: (req, res) => {
    const feedBack = (code, message, result) => {
      return res.status(code).json({
        message: message,
        result: result,
      });
    };
    const authUsername = req.query.username;
    const authEmail = req.query.email;
    const authPassword = req.query.password;

    const findIndex = usersDB.findIndex((val) => {
      return val.username === authUsername || val.email === authEmail;
    });

    if (findIndex === -1) {
      feedBack(404, `You have entered an invalid username, email or password`);
    }

    if (usersDB[findIndex].password !== authPassword) {
      feedBack(404, `You have entered an invalid username, email or password`);
    }

    feedBack(200, 'sing-in succsess', usersDB[findIndex].username);
  },
  singUp: (req, res) => {
    const feedBack = (code, message, result) => {
      res.status(code).json({
        message: message,
        result: result,
      });
      return;
    };
    const newUser = req.body;
    const repeatPassword = req.query.repeatPassword;

    console.log(newUser);

    // username section
    const findIndexUsername = usersDB.findIndex((val) => {
      return val.username === newUser.username;
    });
    const findIndexEmail = usersDB.findIndex((val) => {
      return val.email === newUser.email;
    });
    if (findIndexUsername !== -1) {
      feedBack(400, `${newUser.username} not available`);
    } else if (!newUser.username) {
      feedBack(400, 'username is required');
    }

    // email section
    else if (findIndexEmail !== -1) {
      feedBack(400, `${newUser.email} has been registered`, usersDB);
    } else if (!newUser.email) {
      feedBack(400, 'email is required');
    } else if (!newUser.full_name) {
      feedBack(400, 'full_name is required');
    }

    // password section
    else if (!newUser.password) {
      feedBack(400, 'password is required');
    } else if (newUser.password !== repeatPassword) {
      feedBack(400, 'password not match');
    } else {
      newUser.id = nanoid();
      usersDB.push(newUser);
      feedBack(200, 'new account created successfuly', usersDB);
    }

    // const findIndexUsername = usersDB.findIndex((val) => {
    //   return val.username === newUser.username;
    // });

    // console.log(findIndexUsername);

    // const findIndexEmail = usersDB.findIndex((val) => {
    //   return val.email === newUser.email;
    // });

    // console.log(findIndexEmail);

    // if (findIndexUsername == true) {
    //   feedBack(400, 'username not available');
    // }

    // if (findIndexEmail == true) {
    //   feedBack(400, 'email address has been registered');
    // }

    // // if (newUser.password !== newUser.repeatPassword) {
    // //   feedBack(400, 'password not match');
    // // }

    // newUser.id = nanoid();
    // usersDB.push(newUser);
    // if (findIndexUsername === -1 && findIndexEmail === -1) {
    //   feedBack(200, 'Your account created successfuly', usersDB);
    // }
  },
};

module.exports = { authControllers };
