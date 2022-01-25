import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCo-2GSdU6J7KnCRiVCWBhRw3VMtgvFGWg',
  authDomain: 'social-auth-385e3.firebaseapp.com',
  projectId: 'social-auth-385e3',
  storageBucket: 'social-auth-385e3.appspot.com',
  messagingSenderId: '1087919440019',
  appId: '1:1087919440019:web:1f76928b630385b2fd0d66',
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
