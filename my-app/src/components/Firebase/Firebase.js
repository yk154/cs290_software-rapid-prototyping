import app from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDoqABBcwvXDdxMhdY_4nmLiPpBX_8YwVw",
  authDomain: "startiq.firebaseapp.com",
  databaseURL: "https://startiq.firebaseio.com",
  projectId: "startiq",
  storageBucket: "startiq.appspot.com",
  messagingSenderId: "617875093373"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }

  putIdea(ideaText) {
    this.db.ref("Users/").child("UserName").set({
      idea: ideaText,
    }).then((data) => {
        //success callback
        console.log('data ', data)
    }).catch((error) => {
        //error callback
        console.log('error ', error)
    })
  }

  getIdea() {
    return this.db.ref("Users/UserName/idea").once('value').then(snapshot => snapshot.val());
  }

}

export default Firebase;