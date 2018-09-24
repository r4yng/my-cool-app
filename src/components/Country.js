import React, { Component } from 'react'
import PropTypes from 'prop-types';
//import '../../stylesheets/Color.scss';

class Country extends Component {

    componentWillMount() {
        //this.style = { backgroundColor: "#CCC" }
    }

    shouldComponentUpdate(nextProps) {
        const { rating } = this.props
        return rating !== nextProps.rating
    }

    componentWillUpdate(nextProps) {
        // const { title, rating } = this.props
        // this.style = null
        // this.refs.title.style.backgroundColor = "red"
        // this.refs.title.style.color = "white"
        // alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
    }

    componentDidUpdate(prevProps) {
        // const { title, rating } = this.props
        // const status = (rating > prevProps.rating) ? 'better' : 'worse'
        // console.log(`${title} is getting ${status}`)
        // this.refs.title.style.backgroundColor = ""
        // this.refs.title.style.color = "black"
    }

    render() {
        const { name, onRemove} = this.props
        return (
            <section className="color" style={this.style}>
                <h5 ref="name">{name}</h5>
                {/* <button onClick={onRemove}>X</button> */}
                {/* <div className="color"
                     style={{ backgroundColor: color }}>
                </div> */}
            </section>
        )
    }

}

// Country.propTypes = {
//     name: PropTypes.string.isRequired,
//     alpha3Code: PropTypes.string.isRequired,
//     onRemove: PropTypes.func,
// }

// Country.defaultProps = {
//     rating: 0,
//     onRemove: f=>f,
//     onRate: f=>f
// }

export default Country;
