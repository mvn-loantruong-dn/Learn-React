import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/favSlice';

const Home = () => {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      image: 'https://cdn.shopify.com/s/files/1/0412/8151/9765/articles/food-blog7_700x503_crop_center.jpg?v=1610514138',
      title: 'Stauberry Cupcake Mix',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.',
      favs: false
    },
    {
      id: 2,
      image: 'https://cdn.shopify.com/s/files/1/0412/8151/9765/articles/food-blog5_700x503_crop_center.jpg?v=1610514040',
      title: 'Incredible Sandwich Pizza',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.',
      favs: false
    },
    {
      id: 3,
      image: 'https://cdn.shopify.com/s/files/1/0412/8151/9765/articles/food-blog8_700x503_crop_center.jpg?v=1610514338',
      title: 'Italian Chiken Peri Peri',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.',
      favs: false
    },
    {
      id: 4,
      image: 'https://cdn.shopify.com/s/files/1/0412/8151/9765/articles/food-blog2_700x503_crop_center.jpg?v=1610516805',
      title: 'Delicious Mayonise Pizza',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.',
      favs: false
    }
  ]);
  const handleFav = (e, id) => {
    e.preventDefault();
    const newBlogs = blogs.map(e => {
      if (e.id === id) {
        e.favs = !e.favs;
      }
      return e;
    });
    setBlogs(newBlogs);
    dispatch(toggle(id));
  }
  return (
    <div className="container">
      <div className="heading">
        <h2 className="text-uppercase">Love Food 
          <span className="txt-secondary"> Stories</span>
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
        {blogs.map((item) =>
          <div className="col-3" key={item.id}>
            <div className="product-item">
              <Link to="">
                <img src={item.image} alt="item" />
              </Link>
              <div className="product-info">
                <div className="flex-space-between">
                  <h6><Link className="product-title txt-primary" to="">{item.title}</Link></h6>
                  <button className={`d-flex btn-transparent ${item.favs ? 'active' : ''}`} onClick={(event) => handleFav(event, item.id)}><FaRegHeart /></button>
                </div>
                <p className="blog-desc">{item.des}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Home;
