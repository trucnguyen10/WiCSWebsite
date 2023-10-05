// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDS7UM--_sv5C--088L9131u789i1dqgc",
  authDomain: "wics-project.firebaseapp.com",
  projectId: "wics-project",
  storageBucket: "wics-project.appspot.com",
  messagingSenderId: "1001979316975",
  appId: "1:1001979316975:web:abd959ff36d1b93cef691a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export default db

async function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const major = document.getElementById('major').value;
  
    try {
      // Add form data to the "interest" collection (updated collection name)
      await addDoc(collection(db, 'interest'), {
        name,
        email,
        major,
      });
  
      // Clear form fields after successful submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('major').value = '';
  
      alert('Form submitted successfully!'); // You can customize this message
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  }

  
