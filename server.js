'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';
const bcrypt = require("bcrypt");


//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(hash); 

  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res); 
  });
});

//END_ASYNC

//START_SYNC

const hashSync = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hashSync);

const result = bcrypt.compareSync(myPlaintextPassword, hashSync);
console.log(result); 

//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
