import React, { Component } from "react";
import classes from "./style.module.css";
import logo from "../../../helpers/bm.png";

export default class Page extends Component {
  state = {
    products: [
      { name: "Somun Ekmek", adet: 0, price: 2 },
      { name: "Çikolata", adet:0, price: 5 },
      { name: "Domates", adet: 0, price: 6 },
    ],
    kupon: 0,
    input: "",
  };

  remove(index, e) {
    let products = this.state.products;
    products[index].adet = products[index].adet - 1;
    this.setState({
      products: products,
    });
  }

  add(index, e) {
    let products = this.state.products;
    products[index].adet = products[index].adet + 1;
    this.setState({
      products: products,
    });
  }

  addKupon(e) {
    this.setState({
      kupon: 1,
    });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  removeCart() {
    let products = this.state.products;
    products[0].adet = 0;
    products[1].adet = 0;
    products[2].adet = 0;
    this.setState({
      products
    })
  }

  render() {
    return (
      <div>
        <div className={classes["page"]}>
          <img src={logo} alt="" />
        </div>
        <h2 className={classes["title"]}>
          Erciyes Üniversitesi Bilgisyar Mühendisliği Bölümü Web Programlama 1
          Dersi final Sorusu
        </h2>
        <h3 className={classes["teacher"]}>Dr. Öğr. Üyesi Fehim KÖYLÜ</h3>
        <h2>Alışveriş Uygulaması</h2>
        <p className={classes["slogan"]}>
          Vermek istediğiniz siparişler için aşağıdaki listeden seçerek adedini
          belirtiniz.
        </p>
        <div className={classes["main"]}>
          <div className={classes["card"]}>
            <div className={classes["card-header"]}>Ekmek</div>
            <div className={classes["card-body"]}>
              <p className={classes["price"]}>
                {" "}
                <b>2₺</b> <span>/ adet</span>
              </p>
              <p className={classes["product"]}>Somun Ekmek</p>
              <p className={classes["gr"]}>200 gr.</p>
              <button
                onClick={this.add.bind(this, 0)}
                className={classes["add"]}
              >
                Sepete ekle
              </button>
            </div>
          </div>
          <div className={classes["card"]}>
            <div className={classes["card-header"]}>Çikolata</div>
            <div className={classes["card-body"]}>
              <p className={classes["price"]}>
                {" "}
                <b>5₺</b> <span>/ adet</span>
              </p>
              <p className={classes["product"]}>Bitter Çikolata</p>
              <p className={classes["gr"]}>60 gr.</p>
              <button
                onClick={this.add.bind(this, 1)}
                className={classes["add"]}
              >
                Sepete ekle
              </button>
            </div>
          </div>
          <div className={classes["card"]}>
            <div className={classes["card-header"]}>Domates</div>
            <div className={classes["card-body"]}>
              <p className={classes["price"]}>
                {" "}
                <b>6₺</b> <span>/ kg</span>
              </p>
              <p className={classes["product"]}>Domates</p>
              <p className={classes["gr"]}>Antaysa Sera</p>
              <button
                onClick={this.add.bind(this, 2)}
                className={classes["add"]}
              >
                Sepete ekle
              </button>
            </div>
          </div>
        </div>
        <div className={classes["cart"]}>
          <div className={classes["cart-header"]}>
            <h4>Siparişleriniz</h4>{" "}
            <span>
              {this.state.products[0].adet +
                this.state.products[1].adet +
                this.state.products[2].adet}
            </span>
          </div>
          <div className={classes["cart-body"]}>
            {this.state.products.map((product, index) => {
              return product.adet > 0 ? (
                <div className={classes["row"]}>
                  <div>
                    {product.name}({product.adet}){" "}
                    {product.adet * product.price} ₺
                  </div>{" "}
                  <span onClick={this.remove.bind(this, index)}>x</span>
                </div>
              ) : null;
            })}
            <div className={classes["toplam"]}>
              <span>Toplam Fiyat </span>{" "}
              <span>
                {this.state.products[0].adet * this.state.products[0].price +
                  this.state.products[1].adet * this.state.products[1].price +
                  this.state.products[2].adet *
                    this.state.products[2].price}{" "}
                ₺
              </span>
            </div>
          </div>
          <div className={classes["kupon"]}>
            <input name="input" className={classes["input"]} type="text" />{" "}
            <button className={classes["add-kupon"]}>Kupon gir</button>
          </div>
          <button onClick={this.removeCart.bind(this)}> Sepeti sil</button>
        </div>
      </div>
    );
  }
}
