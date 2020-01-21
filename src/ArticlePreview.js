import React from 'react'
import {Button, Card} from 'react-bootstrap'
import Article from './Article'

class ArticlePreview extends React.Component {

    state = {
        favoriteClicked: false
    }

    handleFavoriteClick = props => {
        this.setState({
            favoriteClicked: !this.state.favoriteClicked
        })
        this.props.addFavorite(this.props.article)
    }

    render() {
        return (
            this.state.favoriteClicked ? <Article article={this.props.article} /> : (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>{this.props.article.description}</Card.Text>
                <Button href={this.props.article.url} target="_blank" variant="info">Continue reading</Button>
                <Button onClick={props => this.handleFavoriteClick(this.props.article)} variant="primary">Add to favorites</Button>
                <Button onClick={this.props.handleClick} variant="secondary">Go back</Button>
            </Card.Body>
            </Card>
            )
        )
    }

}

export default ArticlePreview
