import React from 'react';
import axios from 'axios';

export default class Field  extends React.Component {
  constructor(props){
      super(props)
      this.state={
          image:"",
      }
   
      this.handleChangeImage = this.handleChangeImage.bind(this)
      this.addImage = this.addImage.bind(this)
  }


handleChangeImage(e){
    this.setState({
        image: e.target.value
    })
}

addImage(){
    axios.post(`/api/user/${this.props.user.id}`, this.state)
    .then((res)=>{
      console.log(res)
    location.reload()
    })
    .then(()=>{
        this.props.changeView('profil')
    })


}

    render(){
        return(
            <div>
                {console.log(this.props) }
               <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            id="name"
            placeholder="Your Image "
            required=""
            onChange={(e)=>this.handleChangeImage(e)}
          />
          <label htmlFor="name" className="form__label">
          Your Image  
          </label>
          </div>
          <button id="foot" onClick={this.addImage} >
            <button className="button-os">
              <a href="#">JOIN</a>
            </button>
          </button>
            </div>
        )
    }


}