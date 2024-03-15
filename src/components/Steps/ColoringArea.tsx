import { useState } from "react";
import { Layer, Map, Source } from "react-map-gl";
import AreaChoice from "../Steps/AreaChoice";
import React from 'react';

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState(100);
  const [test, setTest] = useState(37.9);
  const [test1, setTest1] = useState(37.8);
  
  Number(area)
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const fillColor = [255, 0, 0, 100];
  const handleMapClick = (e:any) => {
    console.log(e.lngLat);
  };

  const borders = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-122.6, 37.9],
          [-122.2, 37.8],
          [-122.2, 37.6],
          [-122.6, 37.7],
          [-122.6, 37.9],
        ],
      ],
    },
  };

  const coloring = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-122.6, 37.9], //7-9 first
          [-122.2, 37.8], //6-8 second
          [-122.2, test1], //6-8 second
          [-122.6, test], //first
          [-122.6, 37.9], //7-9 first
        ],
      ],
    },
  };

  return (
    <div className="container1">
      <div className="right-container">
        <div>
          <AreaChoice
            nextStep={nextStep}
            prevStep={prevStep}
            setArea={setArea}
            data={{
              first: {
                setter: setTest,
                start: borders.geometry.coordinates[0][0][1],
                min: borders.geometry.coordinates[0][0][1],
                max: borders.geometry.coordinates[0][3][1],
              },
              second: {
                setter: setTest1,
                start: borders.geometry.coordinates[0][1][1],
                min: borders.geometry.coordinates[0][1][1],
                max: borders.geometry.coordinates[0][2][1],
              },
            }}
          />
        </div>
      </div>
      <div className="map1">
        <Map
          mapboxAccessToken="pk.eyJ1IjoibWVsbW91dGFraSIsImEiOiJjam8xdml4YmswZWtnM3FrdTlzbTI0bmxrIn0.aeG9mjRaPW2wnDRuhWix6Q"
          initialViewState={{
            longitude: -122.4,
            latitude: 37.7,
            zoom: 9.5,
          }}
          cursor="crosshair"
          style={{ borderRadius: 20 }}
          mapStyle="mapbox://styles/mapbox/satellite-v8"
          onClick={handleMapClick}
        >
          {/* @ts-ignore */}
          <Source id="polygon" type="geojson" data={borders}>
            <Layer
              id="polygon"
              type="line"
              // @ts-ignore
              paint={{
                "fill-color": fillColor,
                "fill-opacity": 0.5,
                "line-color": "white",
                "line-width": 1,
              }}
            />
          </Source>
           {/* @ts-ignore */}
          <Source id="polygon1" type="geojson" data={coloring}>
            <Layer
              id="polygon1"
              type="fill"
              paint={{
                "fill-color": "#f08",
                "fill-opacity": 0.5,
              }}
            />
          </Source>
        </Map>
      </div>
    </div>
  );
}
