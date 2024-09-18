'use client'

// components
import Image from "next/image";
import Link from "next/link";
import { Map } from "@/components/Map";

// icons
import { IoMdArrowDropright } from "react-icons/io";
import { CiLink } from "react-icons/ci";

// data
import data from "@/data/events.json";

// hooks
import { useEffect, useState } from "react";

export default function Events() {

	// states
	const [upcoming, setUpcoming] = useState([]);
	const [past, setPast] = useState([]);
	const [toggle, setToggle] = useState(true);
	const [mapOpen, setMapOpen] = useState(false);

	/**
	 * This use effect sorts the events by date into current and past
	 */
	useEffect(() => {

		// show the events one day after as well for safekeeping
		const upcomingEvents = data.filter(event => {
			let eventDate = new Date(event.date)
			eventDate.setDate(eventDate.getDate() + 1);
			let now = new Date()

			return eventDate >= now
		})

		const pastEvents = data.filter(event => {
			let eventDate = new Date(event.date)
			eventDate.setDate(eventDate.getDate() + 1);
			let now = new Date()

			return eventDate < now
		})

		console.log(upcomingEvents, pastEvents);

		setUpcoming(upcomingEvents);
		setPast(pastEvents);
	}, [])


	return (
		<div className="w-screen h-full pt-32 pl-[var(--page-padding-left)] pr-[var(--page-padding-right)]">
			{/* Heading */}
			<div className="w-full h-screen flex justify-center items-center gap-20 pb-72">
				<div className="w-1/2 flex flex-col gap-4">
					<h1 className="text-white font-bold text-6xl flex gap-1"><IoMdArrowDropright className="text-accent" /> EXCS Social Events</h1>
					<h1 className="text-light_text font-bold text-3xl">Take a look at our incredible social schedule for this year!</h1>
				</div>

				<div>
					<Image src="images/easter-ball.png" width={600} height={600} alt={"solo programming"} unoptimized />
				</div>
			</div>

			{/* calendar */}
			{/* <div className="w-full h-full pt-12">
				<h1 className="text-white font-bold text-6xl flex gap-1"><IoMdArrowDropright className="text-accent" /> Our Calendar</h1>
			</div> */}

			{/* next event */}
			{
				upcoming.length > 0 && (
					<div className="min-h-80 w-full h-full">
						<h1 className="text-white font-bold text-6xl flex gap-1"><IoMdArrowDropright className="text-accent" /> Next Event</h1>

						<div className="w-full h-fit flex justify-start rounded-r-lg border border-background hover:border-accent group">
							<div className="w-fit h-full flex items-center">
								<Image src={upcoming[0].image} width={1000} height={600} alt={"solo programming"} className="object-contain" unoptimized />
							</div>
							{
								!mapOpen ? (
									<div className="w-full min-h-full p-8 rounded-r-md flex flex-col gap-2 bg-primary justify-between">
										<div className="w-full">
											<h1 className="text-white text-6xl font-extrabold">{upcoming[0].title}</h1>
											<div className="flex gap-2">
												<h1 className="text-light_text text-2xl font-bold">{upcoming[0].date}</h1>
												<h1 className="text-light_text text-2xl font-bold">{upcoming[0].time}</h1>
											</div>

											<h1 className="text-light_text text-2xl pt-4 font-bold">{upcoming[0].description}</h1>
										</div>

										<div className="w-full flex justify-end gap-4">
											<Link href={upcoming[0].link}>
												<CiLink className="w-16 h-16 text-light_text text-2xl font-bold cursor-pointer transition-all hover:scale-110 hover:text-white duration-200" />
											</Link>

											<button className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200" onClick={() => setMapOpen(true)}>
												<h1 className="text-light_text font-bold flex justify-center items-center gap-2">Open Map</h1>
											</button>

											<Link href={upcoming[0].fixr} className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
												<h1 className="text-light_text font-bold flex justify-center items-center gap-2">Buy Tickets</h1>
											</Link>
										</div>
									</div>
								) : (
									<div className="w-full min-h-full rounded-r-md bg-primary flex">
										<Map longitude={upcoming[0].longitude} latitude={upcoming[0].latitude} />

										<div className="flex flex-col justify-start items-center gap-4 p-8">
											<button className="w-full h-16 text-nowrap p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200" onClick={() => setMapOpen(false)}>
												<h1 className="text-light_text font-bold flex justify-center items-center gap-2">Close Map</h1>
											</button>

											<Link href={upcoming[0].location_link} className="w-full h-16 text-nowrap p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
												<h1 className="text-light_text font-bold flex justify-center items-center gap-2">Open Google</h1>
											</Link>

											<Link href={upcoming[0].fixr} className="w-full h-16 text-nowrap p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
												<h1 className="text-light_text font-bold flex justify-center items-center gap-2">Buy Tickets</h1>
											</Link>
										</div>
									</div>
								)
							}
						</div>
					</div>
				)
			}

			{/* list of upcoming events */}
			<div className="w-full h-full pt-24">
				<h1 className="text-white font-bold text-6xl flex gap-1"><IoMdArrowDropright className="text-accent" /> Our {toggle ? "Upcoming" : "Past"} Events</h1>

				<div className="flex gap-4 w-full justify-start items-center pt-12">
					<div className="w-48 h-16 flex justify-center items-center border-2 border-light_text p-2 rounded-lg bg-primary hover:border-accent transition-all duration-200 cursor-pointer hover:text-accent text-light_text" onClick={() => setToggle(true)}>
						<h1 className="text-inherit text-3xl font-bold">Upcoming</h1>
					</div>

					<div className="w-48 h-16 flex justify-center items-center border-2 border-light_text p-2 rounded-lg bg-primary hover:border-accent transition-all duration-200 cursor-pointer hover:text-accent text-light_text" onClick={() => setToggle(false)}>
						<h1 className="text-inherit text-3xl font-bold">Past</h1>
					</div>
				</div>


				<div className="w-full h-full flex flex-col gap-4 pt-6">
					{
						toggle ? (
							<>
								{
									upcoming.length > 0 ? (
										upcoming.map((event, index) => {
											return (
												<Link href={`events/${event.id}`} key={index} className="w-full h-fit p-8 bg-primary rounded-xl flex gap-8 border border-secondary hover:border-accent cursor-pointer">

													<Image src={event.image} width={400} height={400} alt={"solo programming"} className="object-cover rounded-lg" unoptimized />
													<div>
														<h1 className="text-accent text-6xl font-extrabold">{event.title}</h1>
														<div className="flex gap-4">
															<h1 className="text-light_text text-2xl font-bold">{event.date}</h1>
															<h1 className="text-light_text text-2xl font-bold">{event.time}</h1>
														</div>
														<h1 className="text-light_text text-2xl pt-4 font-bold">{event.description}</h1>
													</div>

												</Link>
											)
										})
									) : (
										<div className="w-full h-full p-8 bg-primary rounded-xl flex flex-col gap-2 border border-secondary">
											<h1 className="text-accent text-6xl font-extrabold">No upcoming events</h1>
										</div>
									)
								}
							</>

						) : (
							<>
								{
									past.length > 0 ? (
										past.map((event, index) => {
											return (
												<Link href={`events/${event.id}`} key={index} className="w-full h-fit p-8 bg-primary rounded-xl flex gap-2 border border-secondary hover:border-accent cursor-pointer">

													<Image src={event.image} width={400} height={400} alt={"solo programming"} className="object-cover rounded-lg" unoptimized />
													<div>
														<h1 className="text-accent text-6xl font-extrabold">{event.title}</h1>
														<div className="flex gap-4">
															<h1 className="text-light_text text-2xl font-bold">{event.date}</h1>
															<h1 className="text-light_text text-2xl font-bold">{event.time}</h1>
														</div>
														<h1 className="text-light_text text-2xl pt-4 font-bold">{event.description}</h1>
													</div>

												</Link>
											)
										})
									) : (
										<div className="w-full h-full p-8 bg-primary rounded-xl flex flex-col gap-2 border border-secondary">
											<h1 className="text-accent text-6xl font-extrabold">No past events</h1>
										</div>
									)
								}
							</>

						)
					}
				</div>
			</div>
		</div>
	)
}