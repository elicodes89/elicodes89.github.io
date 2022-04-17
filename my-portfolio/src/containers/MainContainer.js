import React from "react";
import './App.css';

function MainContainer() {
  return (
    <div className="App">
      <div className="flex-container">  
     <div className="spinner"><p>  
       <div className="cube1"></div>  
       <div className="cube2"></div>  
       Loading...  
       </p>  
     </div>  
     <div className="flex-slide home">  
       <div className="flex-title flex-title-home">Home</div>  
       <div className="flex-about flex-about-home"><p>Click here to navigate to the home section of the website</p></div>  
     </div>  
     <div className="flex-slide about">  
       <div className="flex-title">About</div>  
       <div className="flex-about"><p>Click here to navigate to the About section of the website</p></div>  
     </div>  
     <div className="flex-slide work">  
       <div className="flex-title">Work</div>  
       <div className="flex-about"><p>Listing relevant snippets of work:</p>  
         <ul>  
           <li>First piece of work</li>  
           <li>Second piece of work</li>  
           <li>Third piece of work</li>  
         </ul>  
       </div>  
     </div>  
     <div className="flex-slide contact">  
       <div className="flex-title">Contact</div>  
           <div className="flex-about">  
             <p>Use the contact form below</p>  
             <form className="contact-form">  
               <p>Email <input type="text" name="email"/></p>  
               <p>Comment <textarea type="text" name="comment" row="5"></textarea></p>  
               <p><input type="submit" name="email" value="Send Message"/></p>  
             </form>  
       </div>  
     </div>  
   </div>  
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>  
   <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/jquery.waitforimages.min.js"></script> 
    </div>
  );
}

export default MainContainer;