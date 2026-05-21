import React from 'react'
import { useDishes } from '../Context/Context';
import { Link } from 'react-router-dom';
const Menu = () => {
  const data = useDishes();
  const dishes=data.all_product;
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
              <p>Our popular dishes are a perfect blend of flavors, featuring a variety of options that cater to every taste. 
                From sizzling starters to hearty main courses, each dish is crafted with the finest ingredients to provide a 
                memorable dining experience. Whether you’re in the mood for something spicy, savory, or sweet, 
                our menu has something for everyone. Don’t miss out on these customer favorites that are always in high demand!
                </p>
            </div>
            <div className="dishes_container">
                {
                    dishes.slice(0, 8).map(element => (
                        <div className="card" key={element.id}>
                          <Link to={`/product/${element.id}`}><img onClick={window.scrollTo(0,0)} src={element.image} alt={element.title}/></Link>
                                {/* <img src={element.image} alt={element.title} /> */}
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
