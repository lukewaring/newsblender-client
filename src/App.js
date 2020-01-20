import React from 'react'
import ArticlesContainer from './ArticlesContainer'

class App extends React.Component {
  
  state = {
    articles: [],
    country: 'us',
    category: '',
    query: ''
  }

  fetchArticles = (country, category, query) => {
    console.log(query)
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&query=${query}&apiKey=852bb6631efc4b758d33ffc798f7c072`)
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

        <h3>Select news preferences:</h3>

        <form onSubmit={this.handleSubmit}>

          <label>Country:
            <select onChange={event => this.handleChange(event)} name="country">
              <option value="us">United States</option>
              <option value="gb">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </select>
          </label>

          <label>Category:
            <select onChange={event => this.handleChange(event)} name="category">
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="general">General</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </label>
          
          <label>Search term:
            <input onChange={event => this.handleChange(event)} type="text" name="query" value={this.state.query}></input>
          </label>

          <input type="submit" value="Submit" />

        </form>

        <ArticlesContainer articles={this.state.articles} country={this.state.country} category={this.state.category} query={this.state.query}  />

      </div>
    )
  }
}

export default App
