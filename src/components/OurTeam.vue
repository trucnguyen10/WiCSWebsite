<template>
  <div class="our-team">
    <div class="team-header">
      <h2>Executive Board</h2>
      <p>
        WiCS Executive Board members work together to launch events and projects that best serve our community of women in CS at DePauw. 
        <br> Our team promises to bring the most exciting, helpful workshops and events to you all while listening to the voices of CS women at DePauw as a whole.
      </p>
      <hr class="divider">
    </div>
    <div class="team-description">
    </div>
    <div class="team-members">
      <ul>
        <li v-for="member in members" :key="member.id">
          <span class="member-title">{{ member.title }}:</span> {{ member.name }}
        </li>
      </ul>
    </div>
    <div class="team-pictures">
      <img src="../assets/pic2.png" alt="Image 2">
      <img src="../assets/frame1.png" alt="Image 1">
      <img src="../assets/pic3.png" alt="Image 3">
    </div>
  </div>
</template>


  
  <script>
  import db from '../firebase/init.js'; // Import your Firebase configuration
  import { getDocs, collection } from 'firebase/firestore';

  export default {
    data() {
      return {
        members: [],
      };
    },
    methods: {
      async getMembers(){
        try {
          const querySnapshot = await getDocs(collection(db, 'members'));
          this.members = querySnapshot.docs.map((doc) => doc.data());
        } catch (error) {
          console.error('Error fetching members:', error);
          // Handle the error here (e.g., show an error message to the user)
        }
      }, 
    },
    created(){
      this.getMembers()
    }
  }
  
  </script>
  
  <style scoped>
  .our-team {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #031222;
    padding: 20px;
    margin-top: 10px;
  }

  .team-header {
    text-align: center;
    margin-bottom: 20px;
  }

  .team-header p {
    line-height: 1.5;
    font-family: 'Titillium Web', sans-serif;
    color: #fff;
    margin-left: 100px;
    margin-right: 100px;
    margin-bottom: 50px;
  }

  .team-header h2 {
    font-size: 50px; /* Adjust the font size as desired */
    color: #f752e0; /* Your preferred color */
    font-family: 'Pixelify Sans', cursive;
  }

  .divider {
    width: 50%; /* Adjust the line width as needed */
    height: 2px; /* Adjust the line thickness as needed */
    background-color: #f752e0; /* Line color */
    margin: 0 auto; /* Center the line */
    margin-top: 30px; /* Adjust the space between title and line */
    margin-bottom: 0px; /* Adjust the space between line and description */
  }

  .team-description {
    text-align: center;
  }

  .team-description p {
    line-height: 1.5;
    font-family: 'Titillium Web', sans-serif;
    color: #fff;
  }

  .team-members {
    text-align: center;
    margin-top: 10px;
  }

  .team-members h3 {
    font-size: 30px;
    margin-bottom: 10px;
    color: #f752e0; /* Your preferred color */
    font-family: 'Pixelify Sans', cursive;
  }

  .team-members ul {
    list-style-type: none;
    padding: 0;
  }

  .team-members li {
    font-family: 'Titillium Web', sans-serif;
    color: #fff;
    margin-bottom: 5px; /* Adjust spacing between members */
  }

  .member-title {
    font-weight: bold;
    color: #3dd8fc; /* Your preferred color */
  }

  .team-pictures {
    display: flex;
    justify-content: space-between;
    padding-top: 50px; /* Adjust the spacing between the text and images */
    padding-bottom: 50px; /* Adjust the spacing between the text and images */
    margin-left: 100px;
    margin-right: 100px;
  }

  .team-pictures img {
    width: 30%;
    height: 30%;
  }

</style>
