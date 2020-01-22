import React from 'react'
import Favorite from './Favorite'
import {Button, CardColumns} from 'react-bootstrap'

class FavoritesContainer extends React.Component {

    render() {
        return (
            <div>
                <Button onClick={this.props.handleClick} variant="secondary">Hide favorites</Button>
                <br></br>
                <br></br>
                <h3>Favorites</h3>
                <br></br>
                <CardColumns>
                    {this.props.favorites.map((a, ind) => <Favorite article={a} key={ind} addFavorite={this.props.addFavorite} removeFavorite={this.props.removeFavorite} />)}
                </CardColumns>
                <br></br>
                <h3>All articles</h3>
            </div>
        )
    }

}

export default FavoritesContainer
