function Section() {
  return (
    <main>
      <div className="container">
        <div className="content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="content-btn">
            <button>Shop Now</button>
            <button className="sec-btn">Category</button>
          </div>
          <div className="content-footer">
            <p>Also Available On</p>
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="" />
              <img src="/images/flipkart.png" alt="" />
            </div>
          </div>
        </div>
        <div className="content-image">
          <img src="public/images/shoe_image.png" alt="" />
        </div>
      </div>
    </main>
  );
}

export default Section;
