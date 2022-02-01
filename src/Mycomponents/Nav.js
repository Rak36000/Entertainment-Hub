import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@mui/styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TheatersIcon from '@mui/icons-material/Theaters';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#393D3D!important",
    zIndex: 100,

  },
});


export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(value===0){
      navigate("/")
    }
    else if(value===1){
      navigate("/movies")
    }
    else if(value===2){
      navigate("/series")
    }
    else if(value===3){
      navigate("/search")
    }
    // eslint-disable-next-line
  }, [value])

  return (

    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" style={{ color: "white" }} icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Movies" style={{ color: "white" }} icon={<TheatersIcon />} />
      <BottomNavigationAction label="TVseries" style={{ color: "white" }} icon={<LiveTvIcon />} />
      <BottomNavigationAction label="Search" style={{ color: "white" }} icon={<SavedSearchIcon />} />
    </BottomNavigation>

  );
}
