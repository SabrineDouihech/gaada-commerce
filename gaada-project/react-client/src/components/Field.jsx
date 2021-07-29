import React from 'react';
import axios from 'axios';
// import Profile from './Profile.jsx';

export default class Field  extends React.Component {
  constructor(props){
      super(props)
      this.state={
          image:"",
          user: this.props.user
      }
   
      this.handleChangeImage = this.handleChangeImage.bind(this)
      this.userAdd = this.userAdd.bind(this)
  }
// componentWillUnmount(){
//     this.userAdd()
// }

handleChangeImage(e){
    this.setState({
        image: e.target.value
    })
}

userAdd(id){
axios.put(`/api/user/${id}`, this.state)
.then((res)=>{
  console.log(res)

})
.then(()=>{
    this.props.changeView('profil')
//  location.reload()

})


}

    render(){
        return(
            <div>
               
                Your Image : <input type="text" onChange={(e)=>this.handleChangeImage(e)}/>
                <button onClick={()=>this.userAdd()}>JOIN</button>
            </div>
        )
    }


}