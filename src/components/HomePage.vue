<template>
  <div class="home-page">
    <div class="introduction">
      <h1>Welcome to WiCS</h1>
      <p>
        We are a community of women at DePauw University who share an interest in Computer Science and work towards improving women's representation in the computing field.
      </p>
      <img src="../assets/logo.png" alt="Logo">
    </div>
  </div>
  <div class="membership">
    <div class="left-section">
      <img src="../assets/frame.png" alt="GroupPhoto">
    </div>
    <div class="right-section">
      <h1>WANT TO GET INVOLVED?</h1>
      <hr class="divider">
      <p2>
        <br>Step 1: Follow us on Instagram @dpuwics
        <br>Step 2: Fill out our interest form to be on our email list
        <br>Step 3: Join our Slack community
        <br>Step 4: Have your Slack notifications turned on 
      </p2>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="major">Major:</label>
        <input type="text" id="major" name="major" required>

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import db from '../firebase/init.js'; // Import your Firebase configuration
import { addDoc, collection } from 'firebase/firestore';

export default {
    data() {
      return {
        interest: [],
      };
    }, 

methods: {
  
async submitForm(){
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const major = document.getElementById('major').value;

  try {
    // Add form data to a Firebase collection (adjust the collection name)
    await addDoc(collection(db, 'formResponses'), {
      name,
      email,
      major,
    });

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('major').value = '';

    alert('Form submitted successfully!'); // You can customize this message
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('An error occurred while submitting the form. Please try again later.');
  }
}
}
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap');

.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #031222;
  color: white;
  height: 100vh;
}

.introduction {
  text-align: center; /* Center align the text */
  font-family: 'Titillium Web', sans-serif;
}

.divider {
    width: 80%; /* Adjust the line width as needed */
    height: 5px; /* Adjust the line thickness as needed */
    background-color: #f752e0; /* Line color */
    margin: 5 auto; /* Center the line */
  }
.membership {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 20px;
  max-width: 1200px; /* Add a max-width to control the width of the content */
  margin: 0 auto; /* Center the membership section horizontally */
  font-family: 'Titillium Web', sans-serif;
  margin-bottom: 70px;
}

.left-section {
  text-align: center; /* Center the image horizontally */
  margin-right: 100px;
}

.left-section img {
  max-width: 400px; /* Adjust the image size as needed */
}

.right-section {
  margin-left: 20px;
  text-align: left;
}

form {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  background-color: #3dd8fc;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 auto; /* Center horizontally */
  display: block; /* Ensure button takes full width */
}

h1 {
  font-family: 'Pixelify Sans', cursive;
  font-size: 60px;
  color: #f752e0;
}

p {
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
}

button:hover {
  background-color: #0056b3;
}

</style>