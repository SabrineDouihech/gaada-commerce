import React from 'react';
import axios from 'axios';

export default class Create extends React.Component{
constructor(){
    super()
    this.state={
        itemName:"",
        itemDescription:"",
        itemType:"",
        imageUrl:"",
        price:"",
        quantity:"",
        items:[]
    }
    this.handleName = this.handleName.bind(this)
    this.handleDesc = this.handleDesc.bind(this)
    this.handleType = this.handleType.bind(this)
    this.handleImg = this.handleImg.bind(this)
    this.handlePrc = this.handlePrc.bind(this)
    this.handleQntt = this.handleQntt.bind(this)
    this.add = this.add.bind(this)
}

handleName(e){
    this.setState({
        itemName: e.target.value
    })
}
handleDesc(e){
    this.setState({
        itemDescription: e.target.value
    })
}
handleType(e){
    this.setState({
        itemType: e.target.value
    })
}
handleImg(e){
    this.setState({
        imageUrl: e.target.value
    })
}
handlePrc(e){
    this.setState({
        price: e.target.value
    })
}
handleQntt(e){
    this.setState({
        quantity: e.target.value
    })
}

add(){
    axios.post('/api/item', this.state)
    .then((res)=>{
        console.log(res)
        location.reload()
    })
}



render(){
    return(
        <div>
            <label placeholder="Item name" >Item name</label> <br />
            <input text='text' onChange={(e)=>this.handleName(e)} />
            <br />
            <label placeholder="Item descrition" >Item descrition</label> <br />
            <input text='text' onChange={(e)=>this.handleDesc(e)}/>
            <br />
            <label placeholder="Item type" >Item type</label> <br />
            <input text='text' onChange={(e)=>this.handleType(e)}/>
            <br />
            <label placeholder="Item picture" >Item picture</label> <br />
            <input text='text' onChange={(e)=>this.handleImg(e)}/>
            <br />
            <label placeholder="Item price" >Item price</label> <br />
            <input text='text' onChange={(e)=>this.handlePrc(e)}/>
            <br />
            <label placeholder="Item quantity" >Item quantity</label> <br />
            <input text='number' onChange={(e)=>this.handleQntt(e)}/>
            <br />
            <button onClick={()=>this.add()}>Add it</button>
            <button onClick={()=>this.add()}>Update</button>
         <div>
         </div>
        </div>
    )
}

}