import React, { Component } from 'react';
import ItemDetails from './ItemDetails.jsx';

export default class Search extends Component {
    render() {
        return (
        <div className="container">
            {this.props.filteredItems.map((item, index) => (
            <ItemDetails item={item} key={index} changeView={this.props.changeView} basket={this.props.basket} />
      ))}
        </div>
        )
    }
}
