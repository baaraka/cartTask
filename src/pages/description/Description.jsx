import "./Description.scss";

function Description() {
  return (
    <div className="description">
      <div className="descContainer">
        <div className="left">
          <div className="leftContainer">
            <img
              src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
          <span>Price: 500$ </span>
        </div>
        <div className="right">
          <span>description</span>
          <h1>Caminous</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            doloremque provident perferendis itaque ipsam at laboriosam debitis
            porro a. Tempora vel eum voluptatibus cum animi laborum adipisci
            itaque, sunt incidunt?
          </p>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Description;
