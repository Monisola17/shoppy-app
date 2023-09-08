import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">Sept 6, 2023</p>
        <h5 className="title">Embracing the Future: The Ever-Evolving World of Gadgets</h5>
        <p className="desc">
        In a world that never stops innovating, gadgets have become our trusty companions, revolutionizing the way we live, work, and play. 
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;