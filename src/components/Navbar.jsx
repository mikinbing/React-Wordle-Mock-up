import React from 'react'
import { faGear, faCircleQuestion, faBars, faChartSimple, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Popover, Typography } from '@mui/material'
import { Context } from '../contexts/Contexts'

export default function Navbar(){
    
    const { 
        setShowInstructions,
        setShowSettings,
        anchor,
        setAnchor,
    } = React.useContext(Context)

    const open = Boolean(anchor)
    const id = open ? 'dev_info' : undefined
    const handleShowDevInfo = (event) => setAnchor(event.target)
    const handleClose = () => setAnchor(null)
    const handleShowInstructions = () => setShowInstructions(true)
    const handleShowSettings = () => setShowSettings(true)
    const style = {height: 18}
    
    return (
        <header className="navbar">
            <div id='left_nav'>
                <button aria-describedby={id} className='nav_button' id="menu_button" onClick={handleShowDevInfo}>
                    <FontAwesomeIcon icon={faBars} style={style} />
                </button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchor}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                >
                    <Card sx={{ maxWidth: 250}}>
                        <CardHeader
                            avatar={
                                <Avatar src='https://avatars.githubusercontent.com/u/8332071?v=4'/>
                            }
                            title="Bryan Rodriguez"
                        />
                        <CardContent>
                            <Typography variant='h5'>
                                Hello, There
                            </Typography>   
                            <Typography variant='body2'>
                                This is a mock-up of the NY Times’ game Wordle. 
                                It is just a fun way to show what I’ve learned 
                                in React using Material UI    
                            </Typography> 

                        </CardContent>
                        <CardActions>
                            <Button size='small' href='https://www.linkedin.com/in/bryan-rodriguez-763b0698/'>LinkedIn</Button>
                            <Button size='small' href='https://github.com/mikinbing'>GitHub</Button>
                        </CardActions>
                    </Card>
                </Popover>
            </div>
            <div id='right_nav'>
                <button className='nav_button' id="hint_button">
                    <FontAwesomeIcon icon={faLightbulb} style={style} />
                </button>    
                <button className='nav_button' id="stats_button">
                    <FontAwesomeIcon icon={faChartSimple} style={style} />
                </button>    
                <button className='nav_button' id="help_button" onClick={handleShowInstructions}>
                    <FontAwesomeIcon icon={faCircleQuestion} style={style} />
                </button>    
                <button className='nav_button' id="settings_button" onClick={handleShowSettings}>
                    <FontAwesomeIcon icon={faGear} style={style} />
                </button>    
            </div>
            
        </header>
    )
}
