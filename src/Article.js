import React from 'react'
import {Button, Card} from 'react-bootstrap'

class Article extends React.Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.article.url} alt="cover photo" />
            <Card.Body>
                <Card.Title>{this.props.article.title}</Card.Title>
                {/* <Card.Text>{this.props.article.description}</Card.Text> */}
                <Button variant="primary">View article</Button>
            </Card.Body>
            </Card>
        )
    }

}

export default Article
