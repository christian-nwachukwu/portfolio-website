import React from 'react'

const Header = () => {
  return (
    <header id="portfolio">
    <a href="#"><img src='' style={{width:'65px'}} class="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></a>
    <span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" onclick="w3_open()"><i class="fa fa-bars"></i></span>
    <div class="w3-container">
    <h1><b>My Portfolio</b></h1>
    <div class="w3-section w3-bottombar w3-padding-16">
      
      <button class="w3-button w3-black">Home</button>
      <button class="w3-button w3-white"><i class="fa fa-diamond w3-margin-right"></i>About</button>
      <button class="w3-button w3-white w3-hide-small"><i class="fa fa-file w3-margin-right"></i>Projects</button>
      <button class="w3-button w3-white w3-hide-small"><i class="fa fa-cloud w3-margin-right"></i>Skills</button>
      <button class="w3-button w3-white w3-hide-small"><i class="fa fa-map-pin w3-margin-right"></i>Contact</button>
    </div>

    

    {/*<nav class="navbar background">
        <ul class="nav-list">    
            <li>
                <a href="#courses">Courses</a>
            </li>
            <li>
                <a href="#tutorials">Tutorials</a>
            </li>
            <li>
                <a href="#jobs">Jobs</a>
            </li>
            <li>
                <a href="#student">Student</a>
            </li>
        </ul>

        <div class="rightNav">
            <input
                type="text"
                name="search"
                id="search"
            />
            <button class="btn btn-sm">
                Search
            </button>
        </div>
    </nav>*/}


  <div class="hero-image">
    <div class="hero-text">
      <h1 style={{fontSize:'50px'}}>I am Christian Nwachukwu</h1>
      <h3>And I'm a Full Stack Software Engineer</h3>
      <button>Hire me</button>
    </div>
  </div>
</div>

    <div class="w3-container w3-padding-large" style={{margin:'18px, 0, 28px, 0'}}>
      <h4><b>My Projects</b></h4>
    </div>
  </header>
  )
}

export default Header