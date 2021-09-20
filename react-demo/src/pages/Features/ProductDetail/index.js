import React from 'react'

const ProductDetail = () => {
  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="product-detail-img" src="https://avada.theme-fusion.com/country-butcher/wp-content/uploads/sites/154/2021/01/t-bone-steak.jpg" alt="prd" />
          </div>
          <div className="col-6 flex-col-centered">
            <h3 className="txt-primary">Porterhouse Steak</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum aliquam cursus. Mauris molestie aliquam urna. Curabitur nec eleifend risus. Integer eget libero sed elit pharetra ultricies eu in augue.</p>
            <p className="mb-16">Price: $40.00 – $90.00</p>
            <button className="btn btn-secondary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail;
