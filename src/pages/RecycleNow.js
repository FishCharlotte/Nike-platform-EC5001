import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './RecycleNow.css';
import config from '../config.json';

function RecycleNow() {
  const [selectedStore, setSelectedStore] = React.useState(null);

  // 香港Nike門店位置
  const nikeStore = {
    name: "Nike 銅鑼灣 | Nike Causeway Bay",
    address: "銅鑼灣告士打道280號世貿中心13樓 | 13/F, World Trade Centre, 280 Gloucester Road, Causeway Bay",
    position: { lat: 22.2800, lng: 114.1850 }, // 銅鑼灣座標
    phone: "+852 2895 9882",
    hours: "10:00 AM - 10:00 PM"
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '12px'
  };

  const center = {
    lat: 22.2800,
    lng: 114.1850
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  return (
    <div className="recycle-now">
      <div className="recycle-header">
        <h1>Nike 回收計劃 | Nike Recycling Program</h1>
        <p>為了地球，為了未來 | For the Earth, For the Future</p>
      </div>
      
      <div className="recycle-content">
        <div className="recycle-info">
          <h2>如何參與回收 | How to Participate</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>收集舊鞋 | Collect Old Shoes</h3>
              <p>收集您不再穿著的Nike運動鞋</p>
              <p> Collect your unused Nike shoes</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>前往門店 | Visit Store</h3>
              <p>帶到就近的Nike回收點 | Bring to the nearest Nike recycling point</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>獲得獎勵 | Get Rewards</h3>
              <p>獲得Nike會員積分獎勵 | Earn Nike membership points</p>
            </div>
          </div>
        </div>
        
        <div className="recycle-map">
          <h2>查找回收點 | Find Recycling Points</h2>
          <div className="map-container">
            <LoadScript googleMapsApiKey={config.googleMapsApiKey}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                options={options}
              >
                <Marker
                  position={nikeStore.position}
                  onClick={() => setSelectedStore(nikeStore)}
                />
                {selectedStore && (
                  <InfoWindow
                    position={selectedStore.position}
                    onCloseClick={() => setSelectedStore(null)}
                  >
                    <div className="store-info">
                      <h3>{selectedStore.name}</h3>
                      <p>{selectedStore.address}</p>
                      <p>電話 | Tel: {selectedStore.phone}</p>
                      <p>營業時間 | Business Hours: {selectedStore.hours}</p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecycleNow; 