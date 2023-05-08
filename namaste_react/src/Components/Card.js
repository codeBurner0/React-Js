import './Card.css'
import React from 'react'

function Card({cloudinaryImageId,name,cuisines,address,deliveryTime}) {
    const img=`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`
    
  return (
    <>
      <div classNameName="card">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h4 classNameName="item">{`Items: ${cuisines.join(", ")}`}</h4>
        <h5 classNameName="item">{`Address: ${address} min`}</h5>
        <h5 classNameName="item">{`Deleivery Time: ${deliveryTime} min`}</h5>
        <button >Click Me</button>
      </div>
      
    </>
  )
}

export default Card
// import React from 'react'

// function Card() {
//   return (
//     <>
//       <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
// <div className="btn">
//   <a href="https://www.linkedin.com/in/florin-cornea-b5118057/" target="_blank">
//     <i className="fab fa-linkedin"></i>
//   </a>
// </div>

// <div className="first hero">
//   <img className="hero-profile-img" src="https://cdn.gamer-network.net/2018/metabomb/leagueoflegendsbestcarrychampions2018pantheon.jpg" alt="" />
//   <div className="hero-description-bk"></div>
//   <div className="hero-logo">
//     <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt="" />
//   </div>
//   <div className="hero-description">
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//   </div>
//   <div  className="hero-date">
//     <p>20.02.2019</p>
//   </div>
//   <div className="hero-btn">
//     <a href="#">Learn More</a>
//   </div>
// </div>

// <div className="second hero">
//   <img className="hero-profile-img" src="https://i.pinimg.com/originals/9f/b1/ff/9fb1ffb05dd28039d1a06ad8e90cbd75.jpg" alt="" />
//   <div className="hero-description-bk"></div>
//   <div className="hero-logo">
//     <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt="" />
//   </div>
//   <div className="hero-description">
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//   </div>
//   <div  className="hero-date">
//     <p>20.02.2019</p>
//   </div>
//   <div className="hero-btn">
//     <a href="#">Learn More</a>
//   </div>
// </div>
//     </>
//   )
// }

// export default Card
