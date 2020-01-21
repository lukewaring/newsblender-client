import React from 'react'
import {Button, Card} from 'react-bootstrap'
import ArticlePreview from './ArticlePreview'

class Article extends React.Component {

    state = {
        viewDetails: false
    }

    handleClick = () => {
        this.setState({
            viewDetails: !this.state.viewDetails
        })
    }

    render() {
        return (
            this.state.viewDetails ? <ArticlePreview article={this.props.article} handleClick={this.handleClick} addFavorite={this.props.addFavorite} /> : (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.article.urlToImage} alt="cover photo" />
                <Card.Body>
                    <Card.Title>{this.props.article.title}</Card.Title>
                    <Button onClick={this.handleClick} variant="primary">View preview</Button>
                </Card.Body>
                </Card>
            )
        )
    }

}

export default Article
