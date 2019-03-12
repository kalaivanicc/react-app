import React, { Component } from 'react';
import './App.css';

class MyPosts extends Component{
  constructor(props){
    super(props);
    console.log(this.props.posts)
  }

  render(){
    var rows = [];
    this.props.posts.forEach(post => {
      rows.push(<h2>{post.title}</h2>);
      rows.push(<img src={post.url} height="250px" width="250px"/>);      
    });
    return rows;
  }
}
class App extends Component {
constructor(){
  super();
  
  this.updateUrl = this.updateUrl.bind(this);
  this.updateTitle = this.updateTitle.bind(this);
  this.handleClickEvent = this.handleClickEvent.bind(this);

  this.state = {
    url : '',
    title : '',
    posts : []
  }
}

updateUrl(e){
  this.setState({url:e.target.value});
}

updateTitle(e){
  this.setState({title:e.target.value});
}

handleClickEvent(e){
  e.preventDefault();
  this.setState({posts:[...this.state.posts,{url:this.state.url,title:this.state.title}],url:'',title:''});
  console.log(this.state.url,this.state.posts);
}


  render() {
    return (
      <div className="App">
        <label>URL</label>
        <input type="text" value={this.state.url} onChange={this.updateUrl}/><br/>
        <label>Title</label>
        <input type="text" value={this.state.title} onChange={this.updateTitle}/><br/>
        <input type="button" value="Post" onClick={this.handleClickEvent}/>
        <MyPosts posts={this.state.posts}/>
      </div>
    );
  }
}



export default App;
