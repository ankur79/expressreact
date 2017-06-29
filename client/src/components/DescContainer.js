import React, { Component } from 'react';

class DescContainer extends Component{
	render(){
		return <div className="description">
			{this.props.desc}
		</div>
	}
}

export default DescContainer;