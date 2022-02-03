import React, {useState, useEffect} from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
    const [places, setPlaces] = useState([]);

    const [coords, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});

        });
    },[]);

    useEffect(() => { 
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data);
            })
    }, [coords, bounds]);
    //[] means this fc only called one time when the app starts

    return(
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs ={12} md={4}>
                    <List places={places}/>
                </Grid> 
                <Grid item xs ={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coords={coords}
                        //pass these props to Map
                    />
                </Grid> 
            </Grid>
        </>
    );
};
//on small devices takes full
//on medium or large devices takes 4 out of 12 places

export default App;