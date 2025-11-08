/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body */
body {
  font-family: 'Arial', sans-serif;
  background: #f3e8ff; /* light purple background */
  color: #333;
}

/* Portfolio container */
.portfolio-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
}

/* Profile Card */
.profile-card {
  text-align: center;
  background: #e6d4ff; /* slightly darker light purple */
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.profile-card .profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #cfa0ff;
  margin-bottom: 15px;
}

.profile-card h1 {
  font-size: 32px;
  color: #4b0082; /* dark purple */
  margin-bottom: 5px;
}

.profile-card h3 {
  font-size: 18px;
  color: #6a1cb0; /* medium purple */
  margin-bottom: 15px;
}

.contact-info p {
  font-size: 14px;
  margin: 5px 0;
}

.contact-info i {
  margin-right: 8px;
  color: #4b0082;
}

/* Sections */
section {
  background: #f5e6ff;
  margin: 20px 0;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.05);
}

section h2 {
  color: #4b0082;
  margin-bottom: 10px;
}

section p {
  font-size: 16px;
  line-height: 1.5;
}

/* Skills */
.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-list span {
  background: #d8b3ff;
  color: #4b0082;
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 14px;
}

/* Projects */
.project-card {
  background: #e6d4ff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.project-card h3 {
  color: #4b0082;
  margin-bottom: 5px;
}

.project-card p {
  font-size: 14px;
  color: #333;
}

/* Footer */
footer {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: #6a1cb0;
}

