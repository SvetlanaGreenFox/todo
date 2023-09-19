import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Typography
            sx={{
                fontSize: 26,
            }}
            variant="h1"
            component="h2"
            gutterBottom >
            ToDo List
        </Typography>
    )
};

export default Header;
