import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAHmHzHa_GCoYKzg-4TZqXGo11VIP9uJV8',
  authDomain: 'catch-of-the-day-isjulianj.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-isjulianj.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//this is a default export
export default base;
