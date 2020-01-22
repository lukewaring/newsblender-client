import React from 'react'

class Preferences extends React.Component {

    render() {
        return (
            <div>

                <form onSubmit={event => this.props.handleSubmit(event)}>

                    <label style={{margin: "10px", fontWeight: "bold"}}>Country:
                        <select style={{margin: "5px"}} onChange={event => this.props.handleChange(event)} value={this.props.country} name="country">
                        <option value="us">United States</option>
                        <option value="gb">United Kingdom</option>
                        <option value="ca">Canada</option>
                        <option value="au">Australia</option>
                        </select>
                    </label>

                    <label style={{margin: "10px", fontWeight: "bold"}}>Category:
                        <select style={{margin: "5px"}} onChange={event => this.props.handleChange(event)} value={this.props.category} name="category">
                        <option value=""></option>
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                        </select>
                    </label>
                    
                    <label style={{margin: "10px", fontWeight: "bold"}}>Search term:
                        <input style={{margin: "5px"}} onChange={event => this.props.handleChange(event)} type="text" name="query" value={this.props.query}></input>
                    </label>

                    <input type="submit" value="Submit" />

                </form>

                <br></br>

            </div>
        )
    }

}

export default Preferences
