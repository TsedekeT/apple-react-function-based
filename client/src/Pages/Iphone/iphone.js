import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => { 
    // Fetching data from the backend with the API "http://localhost:3000/api/iphones" or from a JSON file in the public folder "./iphone.json"
    fetch("http://localhost:3000/api/iphones")
      .then((response) => response.json())
      .then((data) => {
        // Setting products with the response data
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product) => {
            let id = product.product_url; // Using 'product_url' as a unique identifier
            let title = product.product_name;
            let img = product.product_img;
            let brief = product.product_brief_description;
            let startPrice = product.starting_price;
            let priceRange = product.price_range;
            let Productpage = product.product_link; // Linking directly to the product page

            let order1 = order !== 1 ? 2 : 1;
            let order2 = order !== 1 ? 1 : 2;
            order = order !== 1 ? 1 : 2;

            return (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{brief}</div>
                  <div className="starting-price">{`Starting at ${startPrice}`}</div>
                  <div className="monthly-price">{priceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={Productpage} target="_blank">
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={img} alt={title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Iphone;

