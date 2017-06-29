import React, { Component } from 'react';

class ImageContainer extends Component{
	render(){
		return <div><img className="main-img" src={this.props.imgURL}/></div>
	}
}

export default ImageContainer;