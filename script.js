const app = document.getElementById("app");

const sidebar = document.createElement("div");
sidebar.className = "sidebar";

sidebar.innerHTML = `
  <img src= "IMG-20250312-WA0555.jpg" alt="avatar" />
  <h2>Adesh Pandey</h2>
  <div class="tag">Web developer</div>
  <div class="info">
    <span><strong>Email:</strong> aadeshpandey124@gmail.com</span>
    <span><strong>Phone:</strong> +91 9525156659</span>
    <span><strong>Birthday:</strong> April 04, 2004</span>
    <span><strong>Location:</strong> Bihar, India</span>
  </div>
`;

app.appendChild(sidebar);

// Main Content
const main = document.createElement("div");
main.className = "main";

main.innerHTML = `
  <h1>About Me</h1>
  <p>I'm Creative Director and UI/UX Designer from Bihar, India, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
  <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>

  <div class="section-title">What I'm Doing</div>
  <div class="cards">
    <div class="card">
      <h3>Web Design</h3>
      <p>The most modern and high-quality design made at a professional level.</p>
    </div>
    <div class="card">
      <h3>Web Development</h3>
      <p>High-quality development of sites at the professional level.</p>
    </div>
    <div class="card">
      <h3>Mobile Apps</h3>
      <p>Professional development of applications for iOS and Android.</p>
    </div>
    <div class="card">
      <h3>Photography</h3>
      <p>I make high-quality photos of any category at a professional level.</p>
    </div>
  </div>
`;

app.appendChild(main);