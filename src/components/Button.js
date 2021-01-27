import PropTypes from 'prop-types'

const Button = ({ text, color }) => {
    return <button className='btn' style={{ backgroundColor: color }}>{text}</button>
}

// Adds default props incase text and color aren't passed in
Button.defaultProps = {
    text: 'Button Text',
    color: 'Black',
}

// Causes both props to expect a string
Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Button
