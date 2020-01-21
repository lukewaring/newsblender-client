import React from 'react'
import Article from './Article'

class ArticlesContainer extends React.Component {

    render() {
        return (
            <div>
                {this.props.articles.map((a, ind) => <Article article={a} key={ind} />)}
            </div>
        )
    }

}

export default ArticlesContainer
