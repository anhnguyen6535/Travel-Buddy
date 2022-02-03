import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper,Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab/Rating";

import useStyles from './styles.js';

const Map = ({setCoordinates, setBounds, coords}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDoBqFEzDPd0dpCQz5eigGT1AZdZYHBxaI'}}
                defaultCenter={coords}
                center={coords} //the current center of the maps
                defaultZoom={14}    
                margin={[50,50,50,50]}
                options={''}
                onChange={(e) => {
                    //console.log(e);
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
            >    
            </GoogleMapReact>
        </div>
    );
}

export default Map;