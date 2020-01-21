import React from 'react'
import {Button} from 'react-bootstrap'
import FavoritesContainer from './FavoritesContainer'

class FavoritesBar extends React.Component {

    state = {
        viewFavorites: false
    }

    handleClick = () => {
        this.setState({
            viewFavorites: !this.state.viewFavorites
        })
    }

    render() {
        return (
            this.state.viewFavorites ? <FavoritesContainer removeFavorite={this.props.removeFavorite} favorites={this.props.favorites}/> : <Button onClick={this.handleClick} variant="primary">View favorites</Button>
        )
    }

}

export default FavoritesBar
