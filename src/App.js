import React from 'react'
import Preferences from './Preferences'
import ArticlesContainer from './ArticlesContainer'

class App extends React.Component { 
  
  state = {
    articles: [],
    country: 'us',
    category: '',
    query: ''
  }

  fetchArticles = (country, category, query) => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${query}&apiKey=852bb6631efc4b758d33ffc798f7c072`)
    .then(res => res.json())
    .then(data => {
        this.setState({
            articles: data.articles
        })
    })
  }
  
  componentDidMount() {
    this.fetchArticles(this.state.country, this.state.category, this.state.query)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.fetchArticles(this.state.country, this.state.category, this.state.query)
  }

  render() {
    console.log('logging app.js state', this.state)
    return (
      <div>
        <h1>Newsblender</h1>
        <Preferences country={this.state.country} category={this.state.category} query={this.state.query} handleChange={this.handleChange} handleChange={this.handleSubmit} />
        <ArticlesContainer articles={this.state.articles} country={this.state.country} category={this.state.category} query={this.state.query}  />
      </div>
    )
  }

}

export default App
