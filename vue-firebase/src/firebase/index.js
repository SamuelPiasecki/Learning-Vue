import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDkaH81w5CLJq3B53y0eU2Q3aFjUlQYMv8',
  authDomain: 'todo-list-vue-ee906.firebaseapp.com',
  projectId: 'todo-list-vue-ee906',
  storageBucket: 'todo-list-vue-ee906.appspot.com',
  messagingSenderId: '869350565621',
  appId: '1:869350565621:web:2c06dc2e92cce4314d87bc'
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export{
    db
}