import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import { useEffect, useState } from "react";
const CartPage = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="CartPage">
      <Navbar />
      <div className="container cart-product-page">
        <BreadCrumb />

        <div className="title bg-white text-center">
          <h3>giỏ hàng của bạn</h3>
        </div>

        <div
          className="cart-product-info mt-4 bg-white"
          style={{ padding: "15px" }}
        >
          <div className="row" style={{ padding: "0 15px" }}>
            <table class="table table-cart w-100 ">
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Thành tiền</th>
                  <th scope="col">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "110px" }}>
                    <img
                      src="https://product.hstatic.net/200000404397/product/baby_1-4_310f9ddcce9c44e895a2dd14b06e2ef3_medium.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </td>
                  <td>
                    <div style={{ fontWeight: "bold" }}>
                      Tổ Yến Tinh Chế Cho Bé Baby (Loại 1)
                    </div>
                    <span>50gram</span>
                  </td>
                  <td>
                    <div
                      style={{
                        color: " #1E3D37",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      1,650,000₫
                    </div>
                    <span className="sale" style={{ fontSize: "12px" }}>
                      1,950,000₫
                    </span>
                  </td>
                  <td>
                    <div className="quantity-area d-flex mt-2">
                      <input
                        type="button"
                        value="-"
                        onClick={() => {
                          if (quantity > 0) setQuantity(quantity - 1);
                        }}
                      />
                      <input type="text" value={quantity} />
                      <input
                        type="button"
                        value="+"
                        onClick={() => setQuantity(quantity + 1)}
                      />
                    </div>
                  </td>
                  <td>
                    <p
                      style={{
                        color: "#1E3D37",
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      1,650,000₫
                    </p>
                  </td>
                  <td>
                    <i class="fa-solid fa-xmark"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <h4>Ghi chú đơn hàng</h4>
              <textarea
                id="note"
                name="note"
                rows="4"
                placeholder="Ghi chú"
              ></textarea>
            </div>
            <div className="col-5">
              <h3>Thông tin đơn hàng</h3>
              <div className="total">
                <b>Tổng tiền: </b>
                <span>1,650,000₫</span>
              </div>
              <p className="attribute">
                Phí vận chuyển sẽ được tính ở trang thanh toán. Bạn cũng có thể
                nhập mã giảm giá ở trang thanh toán.
              </p>
              <div className="product-order" style={{ width: "30%" }}>
                <button> Thanh toán</button>
              </div>
              <div style={{ color: "#1e3d37" }}>
                <i class="fa-solid fa-rotate-left"></i>
                <span> Tiếp tục mua hàng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;
