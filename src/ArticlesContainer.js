import React from 'react'
import Article from './Article'
import {CardColumns} from 'react-bootstrap'

class ArticlesContainer extends React.Component {

    render() {
        return (
            <div>
                <CardColumns>
                    {this.props.articles.map((a, ind) => <Article article={a} key={ind} addFavorite={this.props.addFavorite} />)}
                </CardColumns>
            </div>
        )
    }

}

export default ArticlesContainer
