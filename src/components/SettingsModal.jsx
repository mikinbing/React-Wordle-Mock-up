import React from 'react';
import { Context } from '../contexts/Contexts';
import { Button, Card, CardContent, CardHeader, Modal, Switch } from '@mui/material';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SettingsModal(props) {
    SettingsModal.propTypes = {show: Boolean, setShow: Function}
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        display: "flex",
        flexDirection: "column",
    };

    const { isKeyboardDisabled, setIsKeyboardDisabled } = React.useContext(Context)
    const handleClose = () => props.setShow(false)
    const handleKeyboardSwitch = () => {
        setIsKeyboardDisabled((prevKeyboardState) => !prevKeyboardState)
    }
    return (
            <Modal
              open={props.show}
              onClose={handleClose}>
                {/* <Grow in={props.show}> */}
                    <Card sx={style}>
                        <CardHeader
                            action={
                                <Button onClick={handleClose}>
                                    <FontAwesomeIcon icon={faClose} style={{height: 30, color: 'black'}}/>
                                </Button>
                            }
                            sx={{padding: 0}}
                        />
                        <CardContent>
                            <div id='modal_container'>
                                <h2>Settings</h2>
                                <span><h3>Dark Mode</h3> <Switch /></span>
                                <hr/>
                                <span><h3>Onscreen Keyboard Input Only</h3> <Switch onChange={handleKeyboardSwitch} checked={isKeyboardDisabled}/></span>
                            </div>
                        </CardContent>
                    </Card>
                {/* </Grow> */}
            </Modal>
    );
}
