import React from 'react';
import { Link } from "react-router-dom";

const Products = () => {
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
          <div className="col-3">
            <div className="product-item">
              <Link to="/products/4">
                <img src="https://avada.theme-fusion.com/country-butcher/wp-content/uploads/sites/154/2021/01/t-bone-steak.jpg" alt="prd" />
                <div className="product-info">
                  <h5 className="product-title">Porterhouse Steak</h5>
                  <p className="product-price">$40.00 – $90.00</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="product-item">
              <Link to="/products/1">
                <img src="https://avada.theme-fusion.com/country-butcher/wp-content/uploads/sites/154/2021/01/streaky-bacon.jpg" alt="prd" />
                <div className="product-info">
                  <h5 className="product-title">Streaky Bacon</h5>
                  <p className="product-price">$40.00 – $90.00</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="product-item">
              <Link to="/products/2">
                <img src="https://avada.theme-fusion.com/country-butcher/wp-content/uploads/sites/154/2021/01/seasoned-chicken.jpg" alt="prd" />
                <div className="product-info">
                  <h5 className="product-title">Chicken Fillet</h5>
                  <p className="product-price">$40.00 – $90.00</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div className="product-item">
              <Link to="/products/3">
                <img src="https://avada.theme-fusion.com/country-butcher/wp-content/uploads/sites/154/2021/01/beef-tenderloin.jpg" alt="prd" />
                <div className="product-info">
                  <h5 className="product-title">Beef Tenderloin</h5>
                  <p className="product-price">$10.00 – $25.00</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Products;
