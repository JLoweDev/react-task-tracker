import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
    const onClick = () => {
        console.log('beef')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
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
