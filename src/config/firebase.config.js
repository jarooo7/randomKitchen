import { initializeApp } from 'firebase/app';
import environments from 'environments/environments';

const firebaseApp = initializeApp(environments.firebaseConfig);

export default firebaseApp;
