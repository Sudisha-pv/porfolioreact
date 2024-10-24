import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function Project() {
  const cardStyle = {
    width: '350px',
    height: '600px',
    padding: '30px',
    border: '1px solid #ddd', // Adding border
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adding shadow
    borderRadius: '10px', // Optional: Rounding corners for a nicer look
  };

  return (
    <div style={{ backgroundColor: '' }}>
              <span  style={{  color: '	#ff66b3',fontSize:'50px',textAlign:'center',marginLeft:'530px'}}>Projects</span> <br />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        
        <div style={cardStyle}>
          <MDBCard>
            <MDBCardImage src='./travel.png' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle style={{ color: '	#ff66b3',fontSize:'30px',textAlign:'center'}}>Travel Blog</MDBCardTitle>
              <MDBCardText style={{textAlign:'justify'}}>
              A travel blog site is a platform where individuals or organizations share their experiences, stories, and advice related to travel. It serves as a journal of personal travels or a resource to help others plan their trips. Travel blogs often combine written content with stunning visuals to inspire and inform readers about different destinations, cultures, and travel tips. Here's a breakdown of what a travel blog site usually entails: <br /><br />

              <a 
          style={{
            color: 'white', 
            textDecoration: 'underline', 
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer'
          }} 
          href=" https://sudisha-pv.github.io/traval/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <h4 style={{  background:'linear-gradient(90deg, #ec4899, #7c3aed)' ,marginTop:'10px' }}>Live link...</h4>
        </a>
              </MDBCardText>
            
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={cardStyle}>
          <MDBCard>
            <MDBCardImage src='./food.png' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle style={{ color: '	#ff66b3',fontSize:'30px',textAlign:'center'}} >Food Delivery</MDBCardTitle>
              <MDBCardText  style={{textAlign:'justify'}}>
              A good food delivery website should be user-friendly, offering seamless navigation with clear categories for various cuisines and easy-to-use filters to help users find meals quickly. It should feature a simple, intuitive interface for ordering, with clear call-to-action buttons for placing orders, tracking deliveries, and making payments securely. <br /><br />

              <a 
          style={{
            color: 'white', 
            textDecoration: 'underline', 
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer'
          }} 
          href="https://sudisha-pv.github.io/food-delivery/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
         <h4 style={{  background:'linear-gradient(90deg, #ec4899, #7c3aed)',marginTop:'25px'  }}>  Live link...</h4>
        </a>
              </MDBCardText>
            
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={cardStyle}>
  <MDBCard>
    <MDBCardImage src='./animal.png' position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle style={{ color: '#ff66b3', fontSize: '30px', textAlign: 'center' }}>
        Animal
      </MDBCardTitle>
      <MDBCardText style={{ textAlign: 'justify' }}>
        An animal-themed website using Bootstrap, CSS, and HTML would be designed to showcase
        various animals in a responsive and visually appealing way. The HTML structure would define
        key sections like the homepage, animal galleries, and information pages. Bootstrap would be
        used for layout flexibility, ensuring the site is mobile-friendly with components like
        navigation bars, cards for animal profiles.
        <br /><br />
        <a 
          style={{
            color: 'white', 
            textDecoration: 'underline', 
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer'
          }} 
          href="https://sudisha-pv.github.io/animal/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <h4 style={{  background:'linear-gradient(90deg, #ec4899, #7c3aed)',marginTop:'10px' }} >Live link...</h4>
        </a>
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
</div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px',marginTop:'50px' }}>
        
        <div style={cardStyle}>
          <MDBCard>
            <MDBCardImage src='./bank.png' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle  style={{ color: '	#ff66b3',fontSize:'30px',textAlign:'center'}}>Banking System</MDBCardTitle>
              <MDBCardText  style={{textAlign:'justify'}}>
              A simple banking app using JavaScript, Bootstrap, and HTML can include a Login, Registration, and Home page for users. The Registration page allows new users to sign up by providing details such as name, email, password, and account number, which can be validated using JavaScript before storing them (e.g., locally or in a backend). The Login page enables existing users to log in by verifying their credentials with the stored data. <br /><br />


              <a 
          style={{
            color: 'white', 
            textDecoration: 'underline', 
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer'
          }} 
          href=" https://sudisha-pv.github.io/bank/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
         <h4 style={{  background:'linear-gradient(90deg, #ec4899, #7c3aed)' ,marginTop:'5px'}}>Live link... </h4>
        </a>
              </MDBCardText>
            
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={cardStyle}>
          <MDBCard>
            <MDBCardImage src='./fur.png' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle style={{ color: '	#ff66b3',fontSize:'30px',textAlign:'center'}}>Furniture Site</MDBCardTitle>
              <MDBCardText  style={{textAlign:'justify'}}>
              A furniture website built with Bootstrap, HTML, and CSS offers a sleek and modern platform to showcase a variety of furniture products. The homepage can include a navigation bar, featured product sections, and an eye-catching hero banner highlighting special offers. Using Bootstrap's grid system, furniture items are neatly organized into cards that display product images, descriptions, and pricing. <br /><br />

              <a 
          style={{
            color: 'white', 
            textDecoration: 'underline', 
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer'
          }} 
          href=" https://sudisha-pv.github.io/fur-niture/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
       <h4 style={{  background:'linear-gradient(90deg, #ec4899, #7c3aed)',marginTop:'20px' }} >Live link...</h4>
        </a>
              </MDBCardText>
           
            </MDBCardBody>
          </MDBCard>
        </div>

        <div style={cardStyle}>
          <MDBCard>
            <MDBCardImage src='./book.png' position='top' alt='...' />
            <MDBCardBody>
              <MDBCardTitle style={{ color: '	#ff66b3',fontSize:'30px',textAlign:'center'}}>Book World</MDBCardTitle>
              <MDBCardText  style={{textAlign:'justify'}}>
               
                            A Book World site would be a digital platform designed to showcase and sell a wide range of books across various genres. The homepage could feature sections for bestsellers, new arrivals, and recommended reads, all neatly organized for easy browsing. Using a clean HTML structure, with Bootstrap for layout and CSS for custom styling, the site would include a search bar to help users find specific titles, detailed book pages with descriptions and reviews. <br /><br />

                            <a 
          style={{
            color: 'white', 
            textDecoration: 'underline', 
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: 'pointer'
          }} 
          href="https://sudisha-pv.github.io/book-world/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
        <h4 style={{  background:'linear-gradient(90deg, #ec4899, #7c3aed)' }}>Live link...</h4>
        </a>
              </MDBCardText>
            
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
}

export default Project;
