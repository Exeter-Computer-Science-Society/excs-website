'use client'

import { useEffect, useState } from "react"

export function FixrEvent() {
	
	useEffect(() => {
		// add the script tag to the div on load
		const script = document.createElement('script');
		script.src = "https://web-cdn.fixr.co/scripts/fixr-shop-widget.v1.min.js";
		script.setAttribute("data-fixr-shop-id", "81bb02a6-16d7-4b0c-a161-01fe5197b183");
		script.setAttribute("data-fixr-theme", "dark");

		const here = document.getElementById("here")
		here.appendChild(script)
	}, [])
	return (
		<div className="text-white font-bold" id="here"/>
	)
}
	