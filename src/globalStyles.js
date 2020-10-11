import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;

export const Button = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
}

@media screen and (max-width: 960px) {
    width: 100%;
    margin: 20px;
}
`;

export default GlobalStyle

/*

import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    } from "react-google-maps";
import Geocode from 'react-geocode'

Geocode.setApiKey("AIzaSyA6GaoWqV54ahjxuPkXiiZpX22iCvoWbXk")

state = {
        address: "",
        city: "",
        area: "",
        state: "",
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }

    getCity = (addressArray) => {
        let city = '';
        for (let index = 0; index < addressArray.length; index++) {
            if (addressArray[index]. types[0] && 'adminstrative_area_level_2' === addressArray[index].types[0]) {
                city = addressArray[index].long_name;
                return city;
            }
        }
    }

    getArea = (addressArray) => {
        let area = '';
        for (let index = 0; index < addressArray.length; index++) {
            if (addressArray[index].types[0]) {
                for (let j = 0; j < addressArray.length; j++) {
                    if ('sublocality_level_1' === addressArray[index].types[j] || 'locality' === addressArray[index].types[j]) {
                        area = addressArray[index].long_name;
                        return area;
                    }
                }
            }
        }
    }

    getState = (addressArray) => {
        let state = '';
        for (let index = 0; index < addressArray.length; index++) {
            for (let index = 0; index < addressArray.length; index++) {
                if (addressArray[index].types[0] && 'administrative_area_level_1' === addressArray[index].types[0]) {
                    state = addressArray[index].long_name;
                    return state
                }
            }
        }
    }
    

    //moving the marker and getting the location
    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat();
        let newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng)
        .then(response => {
            
            console.log('response', response)
            const address = response.results[0].formatted_address,
                  addressArray = response.results[0].address_components,
                  city = this.getCity(addressArray),
                  area = this.getArea(addressArray),
                  state = this.getState(addressArray);

                  this.setState({
                      address: (address) ? address : "",
                      area: (area) ? area : "",
                      city: (city) ? city : "",
                      state: (state) ? state : "",
                      markerPosition : {
                          lat: newLat,
                          lng: newLng
                      },
                      mapPosition : {
                        lat: newLat,
                        lng: newLng
                    },
                  })
        })
    }

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
              <Marker
                draggable={true}
                onDragEnd={this.onMarkerDragEnd}
                position={{ lat: -34.397, lng: 150.644 }}
              >
                  <InfoWindow>
                      <p>Lagos, Nigeria</p>
                  </InfoWindow>
              </Marker>
            </GoogleMap>
        ));

        <MapWithAMarker
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6GaoWqV54ahjxuPkXiiZpX22iCvoWbXk&v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `400px` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />

 */