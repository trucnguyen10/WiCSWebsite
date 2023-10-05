<template>
  <div class="footer">
    <footer>
      <div class="footer-content">
        <!-- Footer content goes here -->
        <h2>CONTACT US:</h2>
        <p> <br> <br> <br> <br> <a class="footer-link" href="https://www.instagram.com/dpuwics/" target="_blank" rel="noopener noreferrer">Instagram: @dpuwics</a></p>
        <p> <br> <br> <br> <br> Gmail: acm-w@depauw.edu</p>
        <p> <br> <br> <br> <br> DePauw University, Greencastle, IN 46135</p>
        <p> <br> <br> <br> <br>  &copy; 2023 dpuwics. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer {
  background-color: #031222;
  color: #3dd8fc;
  font-family: 'Titillium Web', sans-serif;
  padding: 20px 0;
  margin-top: 10px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* Style individual footer elements */
.footer p {
  margin: 10px 20px;
  font-size: 16px;
}
h2 {
    font-size: 40px;
    margin-bottom: 10px;
    color: #f752e0;
    font-family: 'Pixelify Sans', cursive;
  }

/* Add any additional styling for your footer here */

/* Style the Instagram link to match the color of surrounding text */
.footer-link {
  color: inherit;
  text-decoration: none;
}
</style>
