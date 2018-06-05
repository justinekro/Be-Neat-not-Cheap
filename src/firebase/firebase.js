import * as firebase from 'firebase'; // * as takes all the name exports from firebase and drop them in a const named firebase
// provider = way to set authentification


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();


const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });
//     console.log(expenses)
//   })

// database.ref('expenses').on('value', (snapshot)=> {
//   const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         })
//       });
//       console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'June Rent',
//   note: 'Remind Sebou to pay me back',
//   amount: 45000,
//   createdAt: 987987454131234
// });

// .push generates an id for us


// on : we get the data immediately

// database.ref("location/city")
//   .once('value')
//   .then((snapshot)=> {
//     const val = snapshot.val();
//     console.log(val);
//
//   })
//   .catch((e)=> {
//     console.log("error fetching data:", e)
//   })


// database.ref().set({
//   name: 'Justine',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'Paris',
//     zip: '75011',
//     country: 'france'
//   }
// }).then(() => {
//   console.log('Data is Saved,!')
// }).catch((e) => {
//   console.log('this failed', e);
// })
//
// database.ref().update({
//   name: 'Mike',
//   'location/city': 'Boston'
// })

// updates = only works at the root

// ref = reference > gives a reference to a specific part of a db. breaks the db in small collections
//
// database.ref('isSingle').remove().then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

// passing null to set is equivalent to calling remove()
