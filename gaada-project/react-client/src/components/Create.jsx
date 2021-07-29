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
//  var arr = this.state.items.push(res.data)
// this.setState({
//     items: this.state.items.push(res.data)
// })
        
        // console.log('heyyyyyyyyyyy',this.state.items)

        console.log(res)
        location.reload()
    })
    
        // this.setState({
        //     items : arr
        // })

}

render(){
    return(
        <div>
            <input text='text' onChange={(e)=>this.handleName(e)} />
            <input text='text' onChange={(e)=>this.handleDesc(e)}/>
            <input text='text' onChange={(e)=>this.handleType(e)}/>
            <input text='text' onChange={(e)=>this.handleImg(e)}/>
            <input text='text' onChange={(e)=>this.handlePrc(e)}/>
            <input text='text' onChange={(e)=>this.handleQntt(e)}/>
            <button onClick={()=>this.add()}>Add it</button>
         <div>
             {/* {console.log('heyyyyyyyyyyy',this.state.items)} */}
         </div>
        </div>
    )
}

}