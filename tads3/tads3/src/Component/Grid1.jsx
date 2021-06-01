//Temporarily store data here
import "./grid.css";
import Pagination from './Pagination';
import React, { useState } from 'react'
import ReactDOM from 'react'



const PostsData = [
    
    {
      "category": "CS",
      "title": "Database",
    //   "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "CS",
      "title": "Artifical Inteligence",
     // "text": "AI CERTIFICATION FOR GRADUATES",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    
    {
      "category": "Human Resourses",
      "title": "Tecnical and Business Writing ",
     // "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "Elective",
      "title": "Applied Programming",
     // "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "Elective",
      "title": "Web Programming",
     // "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    
  ]
 
  
  // Start App
  
  class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
      this.state = {
        exampleItems: PostsData,
        pageOfItems: []
      };
      this.onChangePage = this.onChangePage.bind(this);
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
    onChangePage(pageOfItems) {
      // update state with new page of items
      this.setState({ pageOfItems: pageOfItems });
  }

  
    render() {
      return <div>
        <header className="app-header"></header>
       
        <div className="app-card-list" id="app-card-list">
        {this.state.pageOfItems.map(item =>
                         <Card details={item} />
                        )}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
          
      </div>
      </div>
    }
  }
  
  
  class Button extends React.Component {
    render() {
      return (
        <button className="button button-primary">
          <i className="fa fa-chevron-right"></i> Enrolled
        </button>
      )
    }
  }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">March 21 2021</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }
  
  

  
export default Main;