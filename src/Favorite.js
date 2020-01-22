import React from 'react'
import {Button, Card} from 'react-bootstrap'
import ArticlePreview from './ArticlePreview'

class Favorite extends React.Component {

    state = {
        viewDetails: false
    }

    handleClick = () => {
        this.setState({
            viewDetails: !this.state.viewDetails
        })
    }

    handleDelete = id => {
        fetch(`http://localhost:3001/favorites/${id}`, { method: 'DELETE' })
        .then(this.props.removeFavorite(id))
    }

    render() {
        return (
            this.state.viewDetails ? <ArticlePreview article={this.props.article} handleClick={this.handleClick} addFavorite={this.props.addFavorite} /> : (
                <Card border="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.article.image_url} alt="cover photo" />
                <Card.Body>
                    <Card.Title>{this.props.article.title}</Card.Title>
                    <Button onClick={this.handleClick} variant="primary">View preview</Button>
                    <Button onClick={id => this.handleDelete(this.props.article.id)} variant="danger">Delete</Button>
                </Card.Body>
                </Card>
            )
        )
    }

}

export default Favorite
