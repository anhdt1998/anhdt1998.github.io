const styles = (theme) => ({
    drawerPaper: {
        width: 240,
        zIndex: 10,
        maxWidth: 240,
        height: '100%',
        position: 'relative'
    },
    menuLink: {
        textDecoration: 'none',
        color: '#000000',
        fontSize: 18
    },
    menuLinkActive: {
        '&>div': {
            backgroundColor: '#3f51b5',
            color: '#ffffff'
        }
    }
});
export default styles;