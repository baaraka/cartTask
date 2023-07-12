import { useEffect, useState } from "react";
import "./Description.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Description() {
  const [data, setData] = useState("");

  const location = useLocation();

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setData(res.data);
    };
    getData();
  }, [id]);
  return (
    <div className="description">
      <div className="descContainer">
        <div className="left">
          <div className="leftContainer">
            <img src={data.image} alt="" />
          </div>
          <span>Price: ${data.price} </span>
        </div>
        <div className="right">
          <span>description</span>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Description;
