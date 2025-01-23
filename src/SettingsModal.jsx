import React from 'react';
import { Card, Grow, Modal, Button, Switch } from '@mui/material';
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

    const handleClose = () => props.setShow(false)
    return (
            <Modal
              open={props.show}
              onClose={handleClose}>
                {/* <Grow in={props.show}> */}
                    <Card sx={style}>
                        <div id='modal_container'>
                            <h2>Settings</h2>
                            <span><h3>Dark Mode</h3> <Switch /></span>
                            <hr/>
                            <span><h3>Onscreen Keyboard Input Only</h3> <Switch /></span>
                        </div>
                    </Card>
                {/* </Grow> */}
            </Modal>
    );
}
