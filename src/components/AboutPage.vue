<template>
    <div class="about-page">
      <section class="about-section">
        <div class="section-image">
          <img src="../assets/wics.webp" alt="Section 1 Image">
        </div>
        <div class="section-content">
          <h2>WHO WE ARE:</h2>
          <p>
            Women in Computer Science (WiCS) at DePauw was founded in 1994 by Professor Gloria Townsend, a founding member of the Computer Science department at DePauw, and has since become a community for DePauw women who are interested in Computer Science to gather, collaborate, learn, and grow together. WiCS at DePauw is an ACM-W student chapter. We pride ourselves on being affiliated with the international organization ACM's Women in Computing, which celebrates, informs, and supports women in computing.
          </p>
        </div>
      </section>
  
      <section class="about-section">
        <div class="section-content">
          <h2>OUR MISSIONS:</h2>
          <p>
            As an ACM-W student chapter, WiCS at DePauw is set to pursue the same mission that the ACM-W strives to achieve.
            "ACM-W supports, celebrates, and advocates internationally for the full engagement of women in all aspects of the computing field, providing a wide range of programs and services to ACM members and working in the larger community to advance the contributions of technical women."
          </p> 
        </div>
        <div class="section-image">
          <img src="../assets/misson.webp" alt="Section 2 Image">
        </div>
      </section>
  
      <section class="about-section">
        <div class="section-image">
          <img src="../assets/value.webp" alt="Section 3 Image">
        </div>
        <div class="section-content">
          <h2>OURS GOALS AND VALUES:</h2>
          <p>
            In order to achieve our mission, we have formed concrete goals, based on which we implement our annual action plans:
            <ul>
              <li>Broadens access to CS and empowers DPU women to pursue careers in CS</li>
              <li>Builds a strong, tight-knit community where there are meaningful connections between prospective students, current students, alumni, and faculty</li>
              <li>Supports personal growth and career development for women students in CS</li>
            </ul>
            <p>The core values that we embrace:</p>
            <ul>
              <li>Diversity</li>
              <li>Community</li>
              <li>Empowerment</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@500&family=Titillium+Web:wght@600&family=Young+Serif&display=swap');
  
  .about-page {
    background-color: #031222; /* Change background to black */
    padding: 20px;
  }
  
  .about-section {
    display: flex;
    align-items: center;
    justify-content: center; /* Center align horizontally */
    margin-bottom: 20px;
    padding: 20px;
    margin-left: 150px;
    margin-right: 150px;
  }
  
  .section-image {
    flex: 1;
    padding-right: 20px;
  }
  
  .section-image img {
    max-width: 100%;
  }
  
  .section-content {
    flex: 3;
    color: white;
    text-align: left; /* Align text to the left */
    margin: 0 20px; /* Add left and right margins */
  }
  
  h2 {
    font-size: 40px;
    margin-bottom: 10px;
    color: #f752e0;
    font-family: 'Pixelify Sans', cursive;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  li {
    line-height: 1.5;
    font-family: 'Titillium Web', sans-serif;
  }
  
  p {
    line-height: 1.5;
    font-family: 'Titillium Web', sans-serif;
  }
  </style>