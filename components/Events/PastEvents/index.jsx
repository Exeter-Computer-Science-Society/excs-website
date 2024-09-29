'use client'

import { ImageCarousel } from "@/components/ImageCarousel";
import { Loading } from "@/components/Loading";
import events from "@/data/events.json";

import Image from "next/image";
import { useEffect, useState } from "react";

// icons
import { BsCalendarDate } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";


export function PastEvents() {

	const [past, setPast] = useState([]);
	const [current, setCurrent] = useState({});
	const [loading, setLoading] = useState(true);
	const [images, setImages] = useState(false);

	/**
	 * Use effect for filtering the past events at start
	 */
	useEffect(() => {
		// show the events one day after as well for safekeeping
		const pastEvents = events.filter(event => {
			let eventDate = new Date(event.date)
			eventDate.setDate(eventDate.getDate() + 1);
			let now = new Date()

			return eventDate < now
		})

		setLoading(false)
		setPast(pastEvents);
	}, [])

	return !loading ? (
		<div className="w-fit h-fit p-2 flex flex-col gap-16">

			{/* The top selected event information, more detailed */}
			<div className="w-full h-full">
				{
					Object.keys(current).length > 0 ? (
						<div className="w-full h-full bg-secondary p-8 rounded-md flex flex-col gap-8">
							<div className="flex justify-between">
								<div className="flex gap-2">

									{/* the back button */}
									<div className="w-fit h-fit group">
										<div className="w-fit h-full px-4 py-2 border border-light_text group-hover:border-accent transition-all duration-200 rounded-xl cursor-pointer" onClick={() => setCurrent({})}>
											<h1 className="text-light_text text-4xl font-bold group-hover:text-accent transition-all duration-200">Close</h1>
										</div>
									</div>

									{/* flip images button */}
									<div className="w-fit h-fit group">
										<div className="w-fit h-full px-4 py-2 border border-light_text group-hover:border-accent transition-all duration-200 rounded-xl cursor-pointer" onClick={() => setImages(!images)}>
											<h1 className="text-light_text text-4xl font-bold group-hover:text-accent transition-all duration-200">{ images ? "Close Images" : "Show Images"}</h1>
										</div>
									</div>
								</div>

								{/* the title */}
								<div>
									<h1 className="text-white text-3xl font-bold">{current.title}</h1>
								</div>
							</div>

							{/* main content */}
							<div className="w-full h-full min-h-64 flex flex-col gap-4">

								{/* the main event content */}

								<div className="w-full flex justify-start gap-8">
									<Image src={current.image} width={300} height={300} alt="user" className="max-w-[300px] max-h-[300px] rounded-xl object-contain aspect-square" unoptimized />

									<div className="w-[1px] bg-light_text rounded-sm" />

									{
										images ? (
											<div className="w-full h-full flex flex-col gap-2">
												{/* carousel of images */}
												<div className="w-fit h-full flex justify-start">
													<ImageCarousel images={current.event_images} />
												</div>
											</div>
										) : (
											<div className="flex flex-col gap-2">
												{/* dates / times */}
												<div className="flex flex-col ">
													<h1 className="text-light_text text-xl font-normal flex gap-3 justify-start items-center"><BsCalendarDate /> {current.date}</h1>
													<h1 className="text-light_text text-xl font-normal flex gap-3 justify-start items-center"><IoTimeOutline /> {current.time}</h1>
													<h1 className="text-light_text text-xl font-normal flex gap-3 justify-start items-center"><IoLocationOutline /> {current.location}</h1>
												</div>

												{/* description */}
												<div className="w-full h-full">
													<h1 className="text-white text-lg font-extralight">{current.description}</h1>
												</div>

												{/* flip images button */}
												<div className="group w-fit">
													<div className="w-fit h-fit border border-white px-4 py-2 rounded-xl group-hover:border-accent transition-all duration-200 cursor-pointer" onClick={() => setImages(true)}>
														<h1 className="text-white text-xl font-bold cursor-pointer group-hover:text-accent transition-all duration-200">View Images</h1>
													</div>
												</div>
											</div>
										)
									}
								</div>
							</div>

						</div>
					) : (
						<div className="w-full h-72 flex justify-center items-center">
							<h1 className="text-light_text text-4xl font-bold">Select an event to view more information</h1>
						</div>
					)
				}
			</div>

			{/* the bottom, grid of events, image on top name below */}
			<div className="w-full h-fit flex flex-start flex-wrap gap-4">
				{
					// map through the past events
					past.map((event, index) => {
						return (
							<div key={index} className={`${(Object.keys(current).length > 0 & event.id === current.id) ? 'border-accent' : 'border-background hover:border-accent cursor-pointer transition-all duration-200'} w-fit h-full flex flex-col justify-center items-center gap-1 p-4 rounded-lg bg-primary bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary from-0% to-secondary to-100% border`} onClick={() => { setCurrent(event); setImages(false) }}>
								<Image src={event.image} width={300} height={300} alt="user" className="rounded-xl border border-white object-cover aspect-square" unoptimized />

								<div className="w-fit h-fit">
									<h1 className="text-light_text text-xl font-bold text-wrap">{event.title}</h1>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	) : (
		<Loading />
	)
}