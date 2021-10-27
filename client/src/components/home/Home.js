
import React from "react";
import 'aos/dist/aos.css';
import Aos from 'aos'
import './home.css'
const Home = () => {
  Aos.init()
  return (
    <div id="home">
      <div className="begin">
        <div className="testo" data-aos="fade-right"> 
        <h1 >BE THE RESCUE.</h1>
        <h2>fIGHT HUNGER AND HELP THE PLANET.</h2>
        </div>
        <img src="/images/6.jpg" alt="" />
      </div>
      <h1 id="titl"> What We Do ?</h1>
      <div className="lines" data-aos="zoom-in-up">
        <h4>We Rescue Food </h4>
        <h4>We Help The Environment</h4>
        <h4>We create community</h4>
      </div>
      <div className="lines" data-aos="fade-right">
        <img src="/images/7.jpeg" alt="" />
        <img src="/images/5.jpeg" alt="" />
        <img src="/images/15.jpg" alt="" />
      </div>
    
      <div className="lines"  > 
          <p>Using our web-based app,
               we engage volunteers to 
               transfer fresh food surpluses 
               from local businesses to social
                service agencies serving the 
                food insecure.</p>
          <p>Currently, food waste is
               contributing 8 percent of
                total global greenhouse gas 
                emissions. According to Project 
                Drawdown, reducing food waste by
                 50% by 2050 would result in 26.2
                  gigatons of avoided CO2e.</p>
          <p>Our model empowers communities
               to serve themselves with the 
               support of our app. All participants 
               in our work are members of the
                communities that we serve, including
                 our food donors, rescuers, 
                 and agency partners. </p>
      </div>
      <h1 id="get">GET INVOLVED</h1>
      <div className="involved">
          <div className="geted" data-aos="fade-up"
     data-aos-duration="3000">
              <h2>JOIN OUR MOVEMENT</h2>
              <p>Our app will guide you
                   to available rescues by day,
                    time, or location. Once you’ve
                     signed-up, you will see 
                     instructions on where to pick-up
                      the food and deliver it, along 
                      with any other details you need
                       to complete the rescue.</p>
          </div>
          <img src="/images/10.jpg"alt=""/>
          <div className="geted" data-aos="fade-down"
     data-aos-duration="3000">
              <h2>BECOME A FOOD DONOR OR AGENCY PARTNER</h2>
              <p>If you are a business with a surplus
                   of food or an organization that wants 
                   to receive food, please ​don't hesitate
                    to get involved​.</p>
          </div>
      </div>
    </div>
  );
};

export default Home;
