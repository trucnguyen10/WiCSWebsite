<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-#f752e0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Women in Computer Science</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="./AboutPage.vue">About Us</a>
            <a class="nav-link" href="./OurTeam.vue">Our Team</a>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@500&family=Titillium+Web:wght@600&display=swap');

  .navbar {
    background-color: #f752e0; /* Set the background color to pink (example color) */
  }
  
  .navbar-brand {
    font-size: 24px; /* Adjust the font size */
    font-family: 'Pixelify Sans', cursive;
  }
  
  .navbar-nav .nav-link {
    color: #fff; /* Set the text color to white */
    margin-right: 20px; /* Add some spacing between links */
    font-family: 'Titillium Web', sans-serif;
  }
  
  .navbar-toggler-icon {
    background-color: #fff; /* Set the color of the toggler icon */
  }
  
  /* Add any additional styles for the navigation bar here */
  </style>
  