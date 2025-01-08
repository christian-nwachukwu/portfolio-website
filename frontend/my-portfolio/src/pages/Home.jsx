import React from 'react'
import programmer from '../assets/img/programmer.jpg'
import mobile from '../assets/img/mobile.jpg'

const Home = () => {
  return (

    <>
    <div class="w3-row-padding">
      <div class="w3-third w3-container w3-margin-bottom">  
        <img src="https://i.pinimg.com/736x/a3/01/ae/a301aeccec87559b399829abd91b3d6e.jpg" alt="product-design" style={{width:'100%', height:'218px'}} class="w3-hover-opacity" />
        <div class="w3-container w3-white">
          <p><b>UI/UX Design</b></p>
          <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        </div>
      </div>
    <div class="w3-third w3-container w3-margin-bottom">
      <img src="https://i.pinimg.com/236x/fd/3f/6a/fd3f6a4b248ddde70bd702e86320446b.jpg" alt="frontend-interface" style={{width:'100%', height:'220px'}} class="w3-hover-opacity" />
      <div class="w3-container w3-white">
        <p><b>Frontend Dev</b></p>
        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      </div>
    </div>
    <div class="w3-third w3-container">
      <img src="https://i.pinimg.com/236x/84/97/86/849786e1d7fde85648ded19b81026c0a.jpg" alt="backend-codes" style={{width:'100%', height:'218px'}} class="w3-hover-opacity" />
      <div class="w3-container w3-white">
        <p><b>Backend Dev</b></p>
        <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
      </div>
    </div>
  </div>

  {/*Images of Me */}
  <div class="w3-row-padding w3-padding-16" id="about">
    <div class="w3-col m6">
      <img src={programmer} alt="Me" style={{width:'435px', height:'300px'}} />
    </div>
    <div class="w3-col m6">
      <img src={mobile} alt="Me" style={{width:'435px', height:'300px'}} />
    </div>
  </div>

  <div class="w3-container w3-padding-large" style={{marginBottom:'32px'}}>
    <h4><b>About Me</b></h4>
    <p>Just me, myself and I, exploring the universe of unknownment. 
    I have a heart of love and an interest of lorem 
    ipsum and mauris neque quam blog. I want to share my world with you. 
    Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, 
    porta lectus vitae, ultricies congue gravida diam non fringilla. 
    Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, 
    porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
    <hr />
    
    <h4>Technical Skills</h4>
    {/* Progress bars / Skills */}
    <div class="w3-row-padding" style={{margin: '0 -16px'}}>
      <div class="w3-third w3-margin-bottom">
        <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-black w3-xlarge w3-padding-32">UI/UX</li>
          <li class="w3-padding-16">Web Design</li>
          <li class="w3-padding-16">Photography</li>
          <li class="w3-padding-16">1GB Storage</li>
          <li class="w3-padding-16">Mail Support</li>
        </ul>
      </div>
      
      <div class="w3-third w3-margin-bottom">
        <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-teal w3-xlarge w3-padding-32">Frontend</li>
          <li class="w3-padding-16">Web Design</li>
          <li class="w3-padding-16">Photography</li>
          <li class="w3-padding-16">50GB Storage</li>
          <li class="w3-padding-16">Endless Support</li>
        </ul>
      </div>
      
      <div class="w3-third">
        <ul class="w3-ul w3-border w3-white w3-center w3-opacity w3-hover-opacity-off">
          <li class="w3-black w3-xlarge w3-padding-32">Backend</li>
          <li class="w3-padding-16">Web Design</li>
          <li class="w3-padding-16">Photography</li>
          <li class="w3-padding-16">Unlimited Storage</li>
          <li class="w3-padding-16">Endless Support</li>
        </ul>
      </div>
    </div>
  </div>


  {/* Contact Section */}
  <div class="w3-container w3-padding-large w3-grey">
    <h4 id="contact"><b>Contact Me</b></h4>
    <div class="w3-row-padding w3-center w3-padding-24" style={{margin:'0 -16px'}}>
      <div class="w3-third w3-dark-grey">
        <p><i class="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
        <p>christian.nwachukwu2020@gmail.com</p>
      </div>
      <div class="w3-third w3-teal">
        <p><i class="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
        <p>Lagos, Nigeria</p>
      </div>
      <div class="w3-third w3-dark-grey">
        <p><i class="fa fa-phone w3-xxlarge w3-text-light-grey"></i></p>
        <p>+234 802-1037-200</p>
      </div>
    </div>
    <hr class="w3-opacity" />
    <form action="/action_page.php" target="_blank">
      <div class="w3-section">
        <label>Name</label>
        <input class="w3-input w3-border" type="text" name="Name" required />
      </div>
      <div class="w3-section">
        <label>Email</label>
        <input class="w3-input w3-border" type="text" name="Email" required />
      </div>
      <div class="w3-section">
        <label>Message</label>
        <input class="w3-input w3-border" type="text" name="Message" required />
      </div>
      <button type="submit" class="w3-button w3-black w3-margin-bottom"><i class="fa fa-paper-plane w3-margin-right"></i>Send Message</button>
    </form>
  </div>
  
</>
  )
}

export default Home