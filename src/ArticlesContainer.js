import React from 'react'
import Article from './Article'

class ArticlesContainer extends React.Component {

    state = {
        articles: []
      }

    fetchArticles = (country, category, query) => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&query=${query}&apiKey=852bb6631efc4b758d33ffc798f7c072`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                articles: data.articles
            })
        })
    }

    componentDidMount() {
        this.fetchArticles(this.props.country, this.props.category, this.props.query)
    }

    render() {
        console.log('logging artcon props', this.props)
        return (
            <div>
                {this.state.articles.map((a, ind) => <Article article={a} key={ind} />)}
            </div>
        )
    }

}

export default ArticlesContainer
