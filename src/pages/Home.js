import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import SpecialProduct from '../components/SpecialProduct';
import BlogCard from '../components/BlogCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';

const Home = () => {
const productState = useSelector((state) => state.product.product);


  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  })

  const getProducts = () => {
    dispatch(getAllProducts());
  }

  return (
    <>
    <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='col-lg-6 col-md-12'>
  <div className='main-banner position-relative'>
    <img 
      src='images/main-banner-1.jpg' 
      className='img-fluid rounded-3' 
      alt='main banner' 
    />
    <div className='main-banner-content position-absolute'>
      <h4>SUPERCHARGED FOR PROS.</h4>
      <h5>iPad S13+ Pro.</h5>
      <p>From $999.00 or $41.62/mo.</p>
      <Link className="button">BUY NOW</Link>
    </div>
  </div>
</div>
<div className='col-lg-6 col-md-12'>
  <div className='d-md-flex flex-md-wrap gap-10 justify-content-between align-items-center'>
    <div className='small-banner position-relative mb-3'>
      <img 
        src='images/catbanner-01.jpg' 
        className='img-fluid rounded-3'
        itemProp='banner' 
        alt='main banner' 
      />
      <div className='small-banner-content position-absolute'>
        <h4>BEST SALE</h4>
        <h5>iPad S13+ Pro.</h5>
        <p>From $999.00 <br /> or $41.62/mo.</p>
      </div>
    </div>
    <div className='small-banner position-relative mb-3'>
      <img 
        src='images/catbanner-02.jpg' 
        className='img-fluid rounded-3' 
        alt='main banner' 
      />
      <div className='small-banner-content position-absolute'>
        <h4>NEW ARRIVAL</h4>
        <h5>Buy iPad Air</h5>
        <p>From $999.00 <br /> or $41.62/mo.</p>
      </div>
    </div>
    <div className='small-banner position-relative mb-3'>
      <img 
        src='images/catbanner-03.jpg' 
        className='img-fluid rounded-3' 
        alt='main banner' 
      />
      <div className='small-banner-content position-absolute'>
        <h4>BEST SALE</h4>
        <h5>iPad S13+ Pro.</h5>
        <p>From $999.00 <br /> or $41.62/mo.</p>
      </div>
    </div>
    <div className='small-banner position-relative mb-3'>
      <img 
        src='images/catbanner-04.jpg' 
        className='img-fluid rounded-3' 
        alt='main banner' 
      />
      <div className='small-banner-content position-absolute'>
        <h4>BEST SALE</h4>
        <h5>iPad S13+ Pro.</h5>
        <p>From $999.00 <br /> or $41.62/mo.</p>
      </div>
    </div>
  </div>
</div>

        </div> 
      </div>
    </section>
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='servies d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service.png' alt='services'/>
                <div>
                  <h6>Free Shipping</h6>
                  <p>From all orders over $50</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-02.png' alt='services'/>
                <div>
                  <h6>Daily Surprise Offers</h6>
                  <p className='mb-0'> Save up to 25% off</p>
                </div>
              </div >
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-03.png' alt='services'/>
                <div>
                  <h6>Support 24/7</h6>
                  <p className='mb-0'>Speak to an expert</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-04.png' alt='services'/>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className='mb-0'>Get Factory Default Price</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src='images/service-05.png' alt='services'/>
                <div>
                  <h6>Secure Payments</h6>
                  <p className='mb-0'>100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section className='home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
              <div className="categories d-flex align-items-center flex-wrap justify-content-between">
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/tv.jpg' alt='tv' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>   
    <section className="famous-wrapper py-5 home-wrapper-2">
  <div className="container-xxl">
    <div className="row">
      <div className="col-md-6 col-lg-3 mb-3">
        <div className="famous-card position-relative">
          <img src="images/famous-1.webp" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
            <h5>Big Screen</h5>
            <h6>Smart Watch Series 7</h6>
            <p>From $399 or $16.62/mo. for 24 mo.*</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-3">
        <div className="famous-card position-relative">
          <img src="images/famous-2.webp" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
            <h5 className="text-dark">Studio Display</h5>
            <h6 className="text-dark">600 nits of brightness.</h6>
            <p className="text-dark">27-inch 5K Retina display</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-3">
        <div className="famous-card position-relative">
          <img src="images/famous-3.webp" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
            <h5 className="text-dark">smartphones</h5>
            <h6 className="text-dark">Smartphone 13 Pro.</h6>
            <p className="text-dark">
              Now in Green. From $999.00 or $41.62/mo. for 24 mo. Footnote*
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 mb-3">
        <div className="famous-card position-relative">
          <img src="images/famous-4.webp" className="img-fluid" alt="famous" />
          <div className="famous-content position-absolute">
            <h5 className="text-dark">home speakers</h5>
            <h6 className="text-dark">Room-filling sound.</h6>
            <p className="text-dark">From $699 or $116.58/mo. for 12 mo.*</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class1="special-wrapper py-5 home-wrapper-2">
      <div className='container-xxl'>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {
            productState && productState?.map((item, index) =>{
              if (item.tags  === "Special") {
                return (
                  <SpecialProduct  
                    key ={index} 
                    id ={item?._id}
                    brand = {item?.brand}
                    title = {item?.title}
                    totalrating = {item?.totalrating.toString()}
                    price = {item?.price}
                    sold = {item?.sold}
                    quantity = {item?.quantity}
                    /> 
                    )
              }
              
            })
          }
          
        </div>
      </div>
    </section> 
    <section className="marque-wrapper home-wrapper-2 py-5">
        <div className='container-xxl'>
          <div className="row">
            <div className="col-12">
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'> 
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'> 
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'> 
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'> 
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'> 
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'> 
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'> 
                    <img src='images/brand-07.png' alt='' />
                  </div>
                  <div className='mx-4 w-25'> 
                    <img src='images/brand-08.png' alt='' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section className='blog-wrapper py-5 home-wrapper-2'>
    <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
   

   
    </>  
  );
};

export default Home