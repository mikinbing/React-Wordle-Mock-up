import React from 'react';
import { Card, CardHeader, Modal, Button } from '@mui/material';
import Instructions from './Instructions';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InstructModal(props) {
    InstructModal.propTypes = {show: Boolean, setShow: Function}
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
                        <CardHeader
                                action={
                                    <Button onClick={handleClose}>
                                        <FontAwesomeIcon icon={faClose} style={{height: 30, color: 'black'}}/>
                                    </Button>
                                }
                                sx={{padding: 0}}
                            />
                        <Instructions />
                    </Card>
                {/* </Grow> */}
            </Modal>
    );
}
