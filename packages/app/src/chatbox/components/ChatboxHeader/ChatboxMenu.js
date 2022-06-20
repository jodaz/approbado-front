import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MoreMenuIcon from '@approbado/lib/icons/MoreMenuIcon'
import ProfileIcon from '@approbado/lib/icons/ProfileIcon'
import RightArrowIcon from '@approbado/lib/icons/RightArrowIcon';
import { NavLink } from 'react-router-dom';
import { useChatState } from '@approbado/lib/hooks/useChat';
import Divider from '@material-ui/core/Divider';
import { ReactComponent as TrashIcon } from '@approbado/lib/icons/Trash.svg'
import DeleteChat from './DeleteChat';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    popper: {
        zIndex: 1000
    },
    paper: {
        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.12)',
        borderRadius: '8px !important'
    },
    menuList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuItem: {
        padding: '0.8rem 1rem',
        display: 'flex',
        alignItems: 'center'
    }
}));

export default function ChatboxMenu() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const { data } = useChatState();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <div>
                <IconButton
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <MoreMenuIcon />
                </IconButton>
                <Popper
                    open={open}
                    className={classes.popper}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    placement='bottom-end'
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: 'right', zIndex: 1000 }}
                        >
                            <Paper className={classes.paper}>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    className={classes.menuList}
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {(data.is_private) && (
                                        <MenuItem
                                            onClick={handleClose}
                                            className={classes.menuItem}
                                            component={NavLink}
                                            to={`/users/${data.receptor.id}`}
                                        >
                                            <Box marginRight='0.5rem' display='flex'>
                                                <ProfileIcon />
                                            </Box>
                                            Ver perfil
                                            <Box marginLeft='0.5rem' display='flex'>
                                                <RightArrowIcon />
                                            </Box>
                                        </MenuItem>
                                    )}
                                    <Box width='80%'>
                                        <Divider />
                                    </Box>
                                    <DeleteChat onClick={handleClose} id={data.id} />
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}
