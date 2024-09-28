'use client'

import * as maptilersdk from '@maptiler/sdk'
import "@maptiler/sdk/dist/maptiler-sdk.css"
import { MapNotAvailable } from "./MapNotAvailable";
import { useEffect, useRef } from 'react';

export function Map({ longitude, latitude }) {
	const map = useRef(null);
	const mapContainer = useRef(null);

	useEffect(() => {
		
		// if no longitude or latitude, return MapNotAvailable component
		if (!longitude || !latitude) return <MapNotAvailable />;

		maptilersdk.config.apiKey = process.env.REACT_APP_MAP_API_KEY

		let region = {
			bounds:
				[[-40, 20], // Southwest coordinates
				[42.75, 63]],
			center: [-1.947754, 51.911034],
			zoom: 5,
		}

		map.current = new maptilersdk.Map({
			container: mapContainer.current,
			style: maptilersdk.MapStyle.STREETS,
			zoom: region.zoom,
			terrainControl: false,
			scaleControl: 'bottom-left',
			navigationControl: 'bottom-left',
			fullscreenControl: false,
			geolocateControl: false,
			center: region.center,
		})

		let el = document.createElement('div');
		el.innerHTML = `<img src="/images/map-point.svg" class="pb-4 object-fit h-12 w-12" alt="point"/>`;

		// add marker to map
		new maptilersdk.Marker({ element: el })
			.setLngLat({ lon: longitude, lat: latitude })
			.on('click', () => console.log("open"))
			.addTo(map.current);
	}, [longitude, latitude])


	return mapContainer ? (
		<div className="relative w-full h-full">
			<div ref={mapContainer} className="absolute w-full h-full" />
		</div>
	) : (
		<MapNotAvailable />
	)
}