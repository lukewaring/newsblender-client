import React from 'react'
import ArticlesContainer from './ArticlesContainer'

class App extends React.Component {
  
  state = {
    country: 'us',
    category: '',
    query: ''
  }

  handleChange = event => {
    this.setState({
      country: event.target.value
    })
  }

  render() {
    console.log('logging app.js state', this.state)
    return (
      <div>
        <h1>Newsblender</h1>
        <h3>Select news preferences:</h3>
        <label>Country:
          <select onChange={event => this.handleChange(event)}>
            <option value="us">United States</option>
            <option value="gb">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
          </select>
        </label>
        <ArticlesContainer country={this.state.country} category={this.state.category} query={this.state.query}  />
      </div>
    )
  }
}

export default App
