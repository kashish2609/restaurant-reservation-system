// import React from "react";
// import "./CSS/DescriptionBox.css"
// const DescriptionBox=()=>{
//     return(
//         <div className="descriptionbox">
// <div className="descriptionbox-navigator">
//     <div className="descriptionbox-nav-box">Description</div>

// <div className="descriptionbox-nav-box fade">Reviews (122)</div>

// </div>
// <div className="descriptionbox-description">
//    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
//      Quo omnis dolore aliquid at quidem inventore fugiat molestiae 
//      asperiores tempore labore, porro nesciunt, nemo, excepturi consequuntur tenetur facere. 
//      Assumenda eos dolores ipsum quas, totam eaque tenetur molestias explicabo aliquam impedit iure sit alias error iste.
//       Iusto blanditiis rerum corporis expedita impedit laborum? Veniam a, cum ea dicta eaque fugiat ad soluta nostrum sint et, 
//       similique quaerat pariatur reiciendis.</p>
//       <p>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
//         Assumenda ducimus voluptatem aliquam mollitia, 
//         illo odio eos sunt dolor fuga consequuntur debitis necessitatibus magnam, 
//         modi hic rerum, animi sed autem nulla. Delectus praesentium ut dolorum.


//       </p>
// </div>
//         </div>
//     )

// }
// export default DescriptionBox

import React from "react";
import "./CSS/DescriptionBox.css";

const DescriptionBox = ({ dishName }) => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <h2>{dishName}</h2>
        <p>
          Our {dishName} is carefully crafted with fresh ingredients to bring you a delightful culinary experience. Each dish is cooked with passion and attention to detail, ensuring you get a perfect balance of flavors in every bite. Whether you're craving something rich and savory or light and refreshing, we have something for everyone.
        </p>
        <p>
          Made with love and served with warmth, this dish is perfect for any occasion. From the first bite to the last, the flavors will take you on a memorable journey of taste. Enjoy it with your loved ones and create lasting memories around the table.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
