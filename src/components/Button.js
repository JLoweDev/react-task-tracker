import PropTypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
    return <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{text}</button>
}

// Adds default props incase text and color aren't passed in
Button.defaultProps = {
    text: 'Button Text',
    color: 'Black',
}

// Causes both props to expect a string
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
