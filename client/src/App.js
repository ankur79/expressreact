import React, { Component } from 'react';
import './App.css';
import ImageContainer from './components/ImageContainer';
import LocationContainer from './components/LocationContainer';
import DescContainer from './components/DescContainer';
import LikesContainer from './components/LikesContainer';
class App extends Component {
 
 constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

	componentDidMount() {
//https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=4ae1fd083dbf459d9f5033e0255acfe5

          fetch("/api/v1/tweet")
      .then(res => res.json())
      .then(posts => console.log(posts));

	    fetch('/getinsta')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
	}

  render() {
  	let posts = this.state.posts;

    return (
      <div className="App">
        <div className="App-header">
          <h1><i className="fa fa-instagram" aria-hidden="true"></i></h1>
        </div>
        <div className="App-container">
        	{
        		this.state.posts.map(item => 
			        <div key={item.id} className="App-content">
			        	<ImageContainer imgURL={item.images.standard_resolution.url} />
			      		<LocationContainer location={item.location!=null?item.location.name:""}/>
			      		<DescContainer desc={item.caption.text}/>
			      		<LikesContainer count={item.likes.count} likeProfiles={item.likes.data}/>
			      	</div>
        		)
        }

      	</div>
      </div>
    );
  }
}

export default App;
