import React, { Component } from 'react';

class LocationContainer extends Component{
	render(){
		return <div>
			<i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.location}
		</div>
	}
}

export default LocationContainer;