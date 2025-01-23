/* eslint-disable react/react-in-jsx-scope */
import { faGear, faCircleQuestion, faBars, faChartSimple, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(props){

    Navbar.propTypes = {showInstructions: Function, showSettings: Function}
        
    const handleShowInstructions = () => props.showInstructions(true)
    const handleShowSettings = () => props.showSettings(true)
    
    return (
        <header className="navbar">
            <div id='left_nav'>
                <button className='nav_button' id="menu_button">
                    <FontAwesomeIcon icon={faBars} style={{height: 18}} />
                </button>
            </div>
            <div id='right_nav'>
                <button className='nav_button' id="hint_button">
                    <FontAwesomeIcon icon={faLightbulb} style={{height: 18}} />
                </button>    
                <button className='nav_button' id="stats_button">
                    <FontAwesomeIcon icon={faChartSimple} style={{height: 18}} />
                </button>    
                <button className='nav_button' id="help_button" onClick={handleShowInstructions}>
                    <FontAwesomeIcon icon={faCircleQuestion} style={{height: 18}} />
                </button>    
                <button className='nav_button' id="settings_button" onClick={handleShowSettings}>
                    <FontAwesomeIcon icon={faGear} style={{height: 18}} />
                </button>    
            </div>
            
        </header>
    )
}
