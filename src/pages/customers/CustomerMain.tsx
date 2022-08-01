import * as React from 'react';
import MainAppBar from '../../components/MainAppbar';
import MarketMap from '../../components/MarketMap';
import { useGeolocated } from 'react-geolocated';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomerMain() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 10000
    });
  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <>
      <MainAppBar />
      <MarketMap latitude={coords.latitude} longitude={coords.longitude} />
    </>
  ) : (
    <div>
      <CircularProgress />
      Getting the location data&hellip;
    </div>
  );
}
