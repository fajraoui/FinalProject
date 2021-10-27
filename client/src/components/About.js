import React from "react";

const About = () => {
  return (
    <div>
      <div className="first">
        <h1>FOOD RESCUE APP</h1>
        <p>
          Our award-winning web-based app is integral to our model and is a
          large part of what makes Food Rescue so sustainable and scalable.
          Volunteers, food donors, and social service agencies utilize our app
          to participate in food recovery work all across the country.
        </p>
      </div>
      <div className="secon ">
        <div className="candy">
          <h1>OUR PLATFORM HELPS TO BE THE RESCUE</h1>
         
        
              <p>1. Reduces food waste by giving food donors the opportunity to
              transfer their excess food to social service agencies
              </p>
            <p>
              2.Provides meals to the food insecure by giving social service
              agencies the ability to join and receive food
              </p>
            
            <p> 
              3.Creates a schedule of local food rescues that volunteers can claim
              and complete
              </p>
          
        </div>
        <img src="/images/3.jpeg" alt="" />
      </div>
      <h1 id="qq">JOIN FOOD RESCUE</h1>
      <div className="how">
      <div className="dd"> 
        <h2 className="ss" style={{marginTop:100}}> 1. Join</h2>
        <p className="ss">Join Food Rescue by creating an account.</p>
        </div>
        <div className="dd"> 
        <h2>2. View</h2>
        <p>View the available rescues and pick one that fits your schedule.</p>
        </div>
        <div className="dd"> 
        <h2>3. Arrive</h2>
        <p>
          Arrive at the local food donor at the date and time you selected and
          follow the directions in the app.
        </p>
        </div>
        <div className="dd"> 
        <h2>4. Deliver</h2>
        <p>
          Drive the food to the social service agency listed in the app and see
          the impact of your volunteer time!
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
