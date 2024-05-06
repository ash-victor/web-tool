import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const MapComponent = () => {
    const position = [57.912756, -138.212888]; // Map center position
    const accessToken = "pk.eyJ1IjoiamV0d2VlZHkxOTc4IiwiYSI6ImNsM2FxMW5vcDA0cDMzYm81andvdGt6NW8ifQ.i9qtMYIORXsev1ccXxX2Hg"; // Your access token
    const geojsonURL = 'https://raw.githubusercontent.com/ash-victor/app/main/alaska.json'; // URL of the GeoJSON file

    const [geojsonData, setGeojsonData] = useState(null);

    const getColor = (decilerange) => {
        switch (decilerange) {
            case '0 to 10': return '#ffcdd2';
            case '10 to 20': return '#ef9a9a';
            case '20 to 30': return '#e57373';
            case '30 to 40': return '#ef5350';
            case '40 to 50': return '#f44336';
            case '50 to 60': return '#e53935';
            case '60 to 70': return '#d32f2f';
            case '70 to 80': return '#c62828';
            case '80 to 90': return '#b71c1c';
            case '90 to 100': return '#d50000';
            default: return '#b0bec5';
        }
    };

    const styleFeature = (feature) => ({
        color: getColor(feature.properties.decilerange),
        weight: 2,
        fillColor: getColor(feature.properties.decilerange),
        fillOpacity: 0.5
    });

    const onEachFeature = (feature, layer) => {
        if (feature.properties) {
            // Build tooltip content without the "Decile Value"
            const tooltipContent = `
                <strong>Name:</strong> ${feature.properties.NAME}<br>
                <strong>No Health Insurance:</strong> ${feature.properties.SE_No_HInsurance}<br>
                <strong>Decile Range:</strong> ${feature.properties.decilerange}`;
    
            layer.bindTooltip(tooltipContent, {
                permanent: false,
                direction: "auto"
            });
        }
    };
    
    

    useEffect(() => {
        fetch(geojsonURL)
            .then(res => res.json())
            .then(data => {
                setGeojsonData(data);
            })
            .catch(err => console.error('Error fetching GeoJSON data: ', err));
    }, [geojsonURL]);

    return (
        <MapContainer center={position} zoom={3} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
                maxZoom={13}
                id='mapbox/streets-v11'
                tileSize={512}
                zoomOffset={-1}
            />
            {geojsonData && <GeoJSON data={geojsonData} style={styleFeature} onEachFeature={onEachFeature} />}
        </MapContainer>
    );
};

export default MapComponent;
