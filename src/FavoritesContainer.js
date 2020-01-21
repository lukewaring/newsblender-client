import React from 'react'
import Favorite from './Favorite'

class FavoritesContainer extends React.Component {

    render() {
        return (
            <div>
                <h5>Favorites:</h5>
                {this.props.favorites.map((a, ind) => <Favorite article={a} key={ind} addFavorite={this.props.addFavorite} removeFavorite={this.props.removeFavorite} />)}
                <h5>All articles:</h5>
            </div>
        )
    }

}

export default FavoritesContainer
