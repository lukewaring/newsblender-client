import React from 'react'
import Preferences from './Preferences'
import FavoritesBar from './FavoritesBar'
import ArticlesContainer from './ArticlesContainer'

class App extends React.Component { 
  
  state = {
    articles: [],
    favorites: [],
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
  
  // componentDidMount() {
  //   this.fetchArticles(this.state.country, this.state.category, this.state.query)
  // }

  componentDidMount() {
    fetch('http://localhost:3001/articles')
    .then(res => res.json())
    .then(data => {
        this.setState({
            articles: data
        })
    })

    fetch('http://localhost:3001/favorites')
    .then(res => res.json())
    .then(data => {
        this.setState({
            favorites: data
        })
    })
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

  addFavorite = favorite => {
    this.setState({
      favorites: [...this.state.favorites, favorite]
    })

    fetch('http://localhost:3001/favorites', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({
        source_name: favorite.name,
        author: favorite.author,
        title: favorite.title,
        description: favorite.description,
        url: favorite.url,
        image_url: favorite.urlToImage,
        published_at: favorite.publishedAt,
        content: favorite.content,
        user_id: 1
      })
    })
      .then(res => res.json())
      .then(favorite => console.log(favorite))
  }

  removeFavorite = id => {
    this.setState({
      favorites: this.state.favorites.filter(f => f.id !== id)
    })
  }


  render() {
    console.log('logging app.js state', this.state)
    return (
      <div>
        <h1>Newsblender</h1>
        <Preferences country={this.state.country} category={this.state.category} query={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <FavoritesBar removeFavorite={this.removeFavorite} favorites={this.state.favorites} />
        <ArticlesContainer addFavorite={this.addFavorite} articles={this.state.articles} country={this.state.country} category={this.state.category} query={this.state.query}  />
      </div>
    )
  }

}

export default App
