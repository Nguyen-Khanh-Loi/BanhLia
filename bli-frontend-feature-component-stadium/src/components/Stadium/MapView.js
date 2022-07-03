import React from "react";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";

const MapView = () => {
    return <MapContainer center={{
        lat: '16.483093559126765', lng: '107.60149221237504'
    }} zoom={13} scrollWheelZoom={true}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={{ lat: '16.4818078', lng: '107.6003396' }} >
            <Popup>
                Sân bóng đây nè ! <br />
                Chiến thôi nào
            </Popup>
        </Marker>
    </MapContainer>
}
export default MapView;