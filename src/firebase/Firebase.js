import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3BqluHJy_6GjYxem1jo7WlqMHbk5E9nY",
    authDomain: "todo-crud-58f31.firebaseapp.com",
    projectId: "todo-crud-58f31",
    storageBucket: "todo-crud-58f31.appspot.com",
    messagingSenderId: "506121078832",
    appId: "1:506121078832:web:ef59fc0b540d2cc5fdc5f5",
    measurementId: "G-7R57W0BQN4"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{db};