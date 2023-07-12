import "./Carts.scss";

function Carts() {
  return (
    <div className="carts">
      <div className="cartContainer">
        <div className="left">
          <div className="leftItem">
            <i className="iconBack fa-solid fa-arrow-left"></i>
            <h1>shopping continue</h1>
          </div>
          <hr />
          <div className="lItem">
            <h2>shopping cart</h2>
            <p>You have 3 items in your cart</p>
          </div>
          <div className="cartListContainer">
            <div className="cartListContainerItem">
              <img
                src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="titleDesc">
                <h1>smart watch</h1>
                <p>Lorem ipsum dolor sit</p>
              </div>
              <div className="count">
                <span>5</span>
                <div className="countItem">
                  <i className="iconBack fa-solid fa-arrow-left"></i>
                  <i className="iconBack fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <span>$500</span>
              <i className="iconDelete fa-solid fa-trash-can"></i>
            </div>
            <div className="cartListContainerItem">
              <img
                src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="titleDesc">
                <h1>smart watch</h1>
                <p>Lorem ipsum dolor sit</p>
              </div>
              <div className="count">
                <span>5</span>
                <div className="countItem">
                  <i className="iconBack fa-solid fa-arrow-left"></i>
                  <i className="iconBack fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <span>$500</span>
              <i className="iconDelete fa-solid fa-trash-can"></i>
            </div>
            <div className="cartListContainerItem">
              <img
                src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
              />
              <div className="titleDesc">
                <h1>smart watch</h1>
                <p>Lorem ipsum dolor sit</p>
              </div>
              <div className="count">
                <span>5</span>
                <div className="countItem">
                  <i className="iconBack fa-solid fa-arrow-left"></i>
                  <i className="iconBack fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <span>$500</span>
              <i className="iconDelete fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="cartDetail">
            <h1>Card details</h1>
            <img
              src="https://images.pexels.com/photos/4560084/pexels-photo-4560084.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt=""
            />
          </div>
          <h2>card type</h2>
          <div className="typeContainer">
            <div className="cardType">
              <img src="/images/Rectangle 9.png" alt="" />
            </div>
            <div className="cardType">
              <img src="/images/Rectangle 10.png" alt="" />
            </div>
            <div className="cardType">
              <img src="/images/Rectangle 11.png" alt="" />
            </div>
            <div className="cardType">see all</div>
          </div>
          <div className="input">
            <div className="inputType">
              <label>Name on card</label>
              <input type="text" placeholder="name" />
            </div>
            <div className="inputType">
              <label>Card number</label>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
            <div className="inputTypeDiv">
              <div className="inputType">
                <label>Expiring date</label>
                <input type="text" placeholder="mm/yy" />
              </div>
              <div className="inputType">
                <label>CVV</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
          </div>
          <hr />
          <div className="totalCost">
            <div className="cost">
              <p>subtotal</p>
              <p>$1650</p>
            </div>
            <div className="cost">
              <p>shipping</p>
              <p>$4</p>
            </div>
            <div className="cost">
              <p>Total(Tax incl.)</p>
              <p>$1646</p>
            </div>
          </div>
          <div className="checkOut">
            <span>$1646</span>
            <div className="checkOutDetails">
              <span>checkOut</span>
              <i className="iconBack fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
