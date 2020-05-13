import React, { Component } from "react";
// import { withStyles } from '@material-ui/core/styles';
import { Row } from 'react-bootstrap';
// import Button from "@material-ui/core/Button";

// import './Style.css';
// import Footer from "../footer/Footer";
// import TextField from "@material-ui/core/TextField";
import NavigationBar from "../navigationBar/NavigationBar";
import ProjectsListing from "../projectsListing/ProjectsListing";
import ContactForm from "../contactForm/ContactForm";








class Home extends Component {

    // constructor(props) {
    //   super(props);
    // }

    render() {
        // const { value, opp } = this.state;
        // const { classes } = this.props;
        return (
            <div >
                <NavigationBar />


                    <section className="intro-section">
                        <div>
                            <div className="row">
                                <div className="col-md-1 col-lg-2"></div>
                                <div className="col-md-10 col-lg-8">
                                    <div className="intro">
                                        <div className="profile-img"><img src={"./mohamedAdelImage.jpg"} alt=""/></div>
                                            <h2><b>Mohamed Adel</b></h2>
                                            <h4 style={{color: "#0039cb"}} className="font-yellow">Software Engineer | Web & A.I enthusiast</h4>
                                            <ul className="information margin-tb-30">
                                                <li><b>BIRTHDATE : </b>September 1, 1995</li>
                                                <li><b>EMAIL : </b><a style={{color: "#0039cb"}} href="mailto:Mohamed.adel.zidane@gmail.com">mohamed.adel.zidane@gmail.com</a></li>
                                                <li><b>MILITARY STATUS : </b>Exempted</li>
                                                <li><b>PHONE NUMBER : </b>+20111 830 5978</li>
                                                <li><b>CITY : </b>Egypt, Cairo</li>
                                                <a href="resume/MohamedAdelZidan_Resume.pdf" download>
                                                    <button className="enterprise" style={{color:"white"}}>Download my Resume</button>
                                                </a>

                                            </ul>


                                            <ul className="social-icons">
                                                <li><a href="https://www.facebook.com/profile.php?id=100001216958540"><i className="ion-social-facebook"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/mohamedadelzidane/"><i className="ion-social-linkedin"></i></a></li>
                                                <li><a href="https://github.com/MohamedAdelZidane"><i className="ion-social-github"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
        	</section>

            <ProjectsListing/>
           <ContactForm/>
           


         

    
      </div>
    );
  }
}

export default Home;