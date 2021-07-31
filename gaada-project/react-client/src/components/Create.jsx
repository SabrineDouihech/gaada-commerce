import React from "react";
import axios from "axios";

export default class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      itemDescription: "",
      itemType: "",
      imageUrl: "",
      price: "",
      quantity: "",
      items: [],
    };
    this.handleName = this.handleName.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handlePrc = this.handlePrc.bind(this);
    this.handleQntt = this.handleQntt.bind(this);
    this.add = this.add.bind(this);
  }

  handleName(e) {
    this.setState({
      itemName: e.target.value,
    });
  }
  handleDesc(e) {
    this.setState({
      itemDescription: e.target.value,
    });
  }
  handleType(e) {
    this.setState({
      itemType: e.target.value,
    });
  }
  handleImg(e) {
    this.setState({
      imageUrl: e.target.value,
    });
  }
  handlePrc(e) {
    this.setState({
      price: e.target.value,
    });
  }
  handleQntt(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  add() {
    axios.post("/api/item", this.state).then((res) => {
      console.log(res);
      location.reload();
    });
  }

  render() {
    return (
      <div>
          <h2>Post a product</h2><br></br>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Full name"
            required=""
            onChange={(e) => this.handleName(e)}
          />
          <label htmlFor="name" className="form__label">
             Name
          </label>
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Description"
            required=""
            onChange={(e) => this.handleDesc(e)}
          />
          <label htmlFor="name" className="form__label">
             Description
          </label>
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Type"
            required=""
            onChange={(e) => this.handleType(e)}
          />
          <label htmlFor="name" className="form__label">
             Type
          </label>
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Image"
            required=""
            onChange={(e) => this.handleImg(e)} 
          />
          <label htmlFor="name" className="form__label">
             Image
          </label>
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Price"
            required=""
            onChange={(e) => this.handlePrc(e)}
          />
          <label htmlFor="name" className="form__label">
             Price
          </label>
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Quantity"
            required=""
            onChange={(e) => this.handleQntt(e)}
          />
          <label htmlFor="name" className="form__label">
          Quantity
          </label>
        </div>

        <button onClick={() => this.add()}>Add it</button>
      </div>
    );
  }
}
