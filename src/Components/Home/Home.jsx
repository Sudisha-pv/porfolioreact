import React from 'react';
"use client";

import { Button } from "flowbite-react";

function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '10px', marginTop: "70px" }}>
      
      {/* Main content section */}
      <div style={{ width: "66%", height: "400px", backgroundColor: "" }}>
        <div style={{ textAlign: 'center' }}>
          <h1><b>
            <span style={{ color: '#ff66b3', fontSize: '50px' }}>Hi, I am Sudisha P V</span> <br />
            <span style={{ color: '#d966ff', fontSize: '30px' }}>I am a MERN FULL STACK DEVELOPER</span> <br /> <br />
          </b></h1>

          <div>
            <p style={{ fontSize: '17px' }}>
              Hi I'm Anupama Suresh. Recently completed graduation in computer science and enthusiastic aspiring software developer, currently pursuing MEAN stack development. Adept at problem-solving and eager to apply my skills and knowledge to contribute to innovative software projects. Outside of my professional interests, I am a dedicated and curious individual who loves to learn new technologies and solve challenging problems. In my free time, I enjoy coding personal projects, reading tech blogs, and participating in hackathons.
            </p>
          </div>

          <div style={{ marginTop: '40px', marginLeft: '370px' }}>
            <a href="./Sudisha Pv-Resume.pdf" download>
              <Button gradientDuoTone="purpleToPink"> Download Resume</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div style={{
        width: "25%",
        height: "400px",
        borderRadius: '40%',
        overflow: 'hidden',
        backgroundColor:"",borderRadius:'40%',borderColor:"pink",borderWidth:'5px' // Ensures the image stays within the rounded container
      }}>
        <img
          src="./profile.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover' // Ensures the image covers the div fully while maintaining aspect ratio
          }}
        />
      </div>

    </div>
  );
}

export default Home;
