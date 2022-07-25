import * as React from 'react';
import MainAppBar from '../../components/MainAppbar';
import MarketMap from '../../components/MarketMap';

export default function CustomerMain() {
  return (
    <>
      <MainAppBar />
      <MarketMap latitude={33.5563} longitude={126.79581} />
    </>
  );
}
