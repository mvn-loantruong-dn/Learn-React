import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://avada.theme-fusion.com/country-butcher/wp-content/uploads/sites/154/2021/01/t-bone-steak.jpg',
      title: 'Porterhouse Steak',
      price: '$40.00 – $90.00'
    },
    {
      id: 2,
      image: 'https://avada.theme-fusion.com/country-butcher/wp-content/uploads/sites/154/2021/01/streaky-bacon.jpg',
      title: 'Streaky Bacon',
      price: '$50.00 – $90.00'
    },
    {
      id: 3,
      image: 'https://avada.theme-fusion.com/country-butcher/wp-content/uploads/sites/154/2021/01/seasoned-chicken.jpg',
      title: 'Chicken Fillet',
      price: '$52.00 – $90.00'
    },
    {
      id: 4,
      image: 'https://avada.theme-fusion.com/country-butcher/wp-content/uploads/sites/154/2021/01/beef-tenderloin.jpg',
      title: 'Beef Tenderloin',
      price: '$22.00 – $90.00'
    }
  ])
  return (
    <div className="products-page">
      <div className="container">
        <div className="heading">
          <h2 className="text-uppercase">List
            <span className="txt-secondary"> Products</span>
          </h2>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
        <div className="sub-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque vestibulum aliquam cursus. Mauris molestie aliquam urna.
          Curabitur nec eleifend risus. Integer eget libero sed elit pharetra ultricies eu in augue.
        </div>
        <div className="row">
          {products.map((prd) =>
            <div className="col-3">
              <div className="product-item" key={prd.id}>
                <Link to={"/products/" + prd.id}>
                  <img src={prd.image} alt="prd" />
                  <div className="product-info">
                    <h5 className="product-title">{prd.title}</h5>
                    <p className="product-price">{prd.price}</p>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Products;
