import React, { Component } from 'react';

class LikesContainer extends Component{
	render(){
		let likeProfiles = this.props.likeProfiles.map(item => <li><img src={item.profile_picture}/></li>)
		return <div className="likes-container">
			<div>
				<li className="like-count"><i className="fa fa-heart" aria-hidden="true"></i> {this.props.count}</li>
				{likeProfiles}
			</div>
		</div>
	}
}

export default LikesContainer;