import React from 'react';
import logo from './logo.svg';
import './App.css';
import articles from './articles'
import ArticleCard from './ArticleCard'
import ArticleItem from './ArticleItem'


class App extends React.Component {

  state = {
    articles: articles,
    view: "Card",
    theme: "light"
  }

  clickHander = (event) => {
   // if card view - renderDiv with class name "card" & function renderArticles
   // if list view - render div with class name "list" & renderList
    
   if (this.state.view === "Card") {
     return (
       <div className="card">
            {this.renderArticles()}
          </div>
        )
      } else {
        return (
          <div className="list">
            {this.renderList()}
          </div>
        )
      }

  }

  renderArticles = () => {
    return this.state.articles.map(article => {
      return <ArticleCard 
              key={article.id} 
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              />
    })
  }

  renderList = () => {
    return this.state.articles.map(article => {
      return <ArticleItem 
              key={article.id} 
              title={article.title}
              />
    })
  }

  helperFunc = (event) => {
    console.log(event.target.id)
    this.setState({
      view: event.target.id
    })
  }

  themeSwitch = (event) => {
    console.log(event.target.parentNode.className)
    this.setState({
      theme: event.target.parentNode.className
    })
  }
  

  render(){
    return (
      <div className={this.state.theme === "light" ? "dark" : "light"}>
        <button onClick={this.themeSwitch}>Switch to {this.state.theme === "light" ? "Light" : "Dark"} Mode</button>
        <button id={this.state.view === 'Card' ? "List" : "Card"} onClick={this.helperFunc}>Switch to {this.state.view === 'Card' ? "List" : "Card"} View</button>
        {this.clickHander()}
      </div>
    );
  }
}

export default App;
