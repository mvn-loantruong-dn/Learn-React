import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/favSlice';
import blog1 from '../../../assets/images/blog1.jpg';
import blog2 from '../../../assets/images/blog2.jpeg';
import blog3 from '../../../assets/images/blog3.jpeg';
import blog4 from '../../../assets/images/blog4.jpeg';

const Home = () => {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      image: blog1,
      title: 'Stauberry Cupcake Mix',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.',
      favs: false
    },
    {
      id: 2,
      image: blog2,
      title: 'Incredible Sandwich Pizza',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.',
      favs: false
    },
    {
      id: 3,
      image: blog3,
      title: 'Italian Chiken Peri Peri',
      des: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit doli.',
      favs: false
    },
    {
      id: 4,
      image: blog4,
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
      <div className="col-6 mb-16">
        <iframe
          title="hello"
          src="https://dev.turidoco.com/pages/maps-embed?lat=35.313835230153046&long=139.48416397924788&map_layers=1,2,3&zoom=9&display_fishing_icon=true&display_fishing_link=true&uid=bb7e3b52-6592-4bdf-baf3-66165fbaa377" 
          width="1200" 
          height="450"
          frameBorder="0"
          allowFullScreen="">
        </iframe>
      </div>
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
