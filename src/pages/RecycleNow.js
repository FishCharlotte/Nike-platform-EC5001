import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './RecycleNow.css';

function RecycleNow() {
  const [selectedStore, setSelectedStore] = React.useState(null);

  // 香港Nike门店位置
  const nikeStore = {
    name: "Nike Causeway Bay",
    address: "铜锣湾告士打道280号世贸中心13楼",
    position: { lat: 22.2800, lng: 114.1850 }, // 铜锣湾坐标
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
        <h1>Nike 回收计划</h1>
        <p>为了地球，为了未来</p>
      </div>
      
      <div className="recycle-content">
        <div className="recycle-info">
          <h2>如何参与回收</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>收集旧鞋</h3>
              <p>收集您不再穿着的Nike运动鞋</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>前往门店</h3>
              <p>带到就近的Nike门店回收点</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>获得奖励</h3>
              <p>获得Nike会员积分奖励</p>
            </div>
          </div>
        </div>
        
        <div className="recycle-map">
          <h2>查找回收点</h2>
          <div className="map-container">
            <LoadScript googleMapsApiKey="xxxxxxxxx">
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
                      <p>电话: {selectedStore.phone}</p>
                      <p>营业时间: {selectedStore.hours}</p>
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