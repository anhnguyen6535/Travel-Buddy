import axios from 'axios';
//library helps us make our calls

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

//fc makes api calls
export const getPlacesData = async(sw,ne) => {
    try{
        //request
        const {data: {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'b170480f46msh7cd5353afa15aebp1ceaf0jsn60ff05f241f7'
          }
      });

        return data;
    }catch(error){
        console.log(error);
    }
};