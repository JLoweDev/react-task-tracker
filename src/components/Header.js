import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

// Adds a default title in case of lack of props passed
Header.defaultProps = {
    title: 'Default Task Tracker'
}

// Causes the title prop to expect a string
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
