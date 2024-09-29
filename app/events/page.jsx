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
import Script from "next/script";
import { FixrEvent } from "@/components/FixrEvent";
import { PastEvents } from "@/components/Events/PastEvents";

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
		<div className="w-screen h-full pl-[var(--page-padding-left)] pr-[var(--page-padding-right)] flex flex-col justify-start items-center max-xl:pt-72 pt-40">

			{/* Heading */}
			<div className="w-full h-screen flex max-xl:flex-col justify-center items-center gap-20 pb-96">
				<div className="w-full flex flex-col gap-4">
					<h1 className="text-white font-bold text-4xl flex gap-1"><IoMdArrowDropright className="text-accent" /> EXCS Social Events</h1>
					<h1 className="text-light_text font-bold text-3xl">Take a look at our incredible social schedule for this year!</h1>
				</div>

				<div>
					<Image src="images/easter-ball.png" width={600} height={600} alt={"solo programming"} className="w-full rounded-lg" unoptimized />
				</div>
			</div>


			{/* calendar */}
			{/* <div className="w-full h-full pt-12">
				<h1 className="text-white font-bold text-6xl flex gap-1"><IoMdArrowDropright className="text-accent" /> Our Calendar</h1>
			</div> */}


			{/* the fixr api event list */}
			<div className="w-full h-full pt-12">
				<FixrEvent />
			</div>


			{/* list of upcoming events */}
			{/* <div className="w-full h-full pt-24">
				<h1 className="text-white font-bold text-6xl max-xl:text-4xl flex gap-1"><IoMdArrowDropright className="text-accent" /> Our {toggle ? "Upcoming" : "Past"} Events</h1>

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
												<Link href={`events/${event.id}`} key={index} className="w-full h-fit p-8 bg-primary rounded-xl flex max-xl:flex-col gap-8 border border-secondary hover:border-accent cursor-pointer">

													<Image src={event.image} width={400} height={400} alt={"solo programming"} className="w-1/3 h-1/3 aspect-square object-cover rounded-lg" unoptimized />
													<div>
														<h1 className="text-accent text-6xl max-lg:text-4xl font-extrabold">{event.title}</h1>
														<div className="flex gap-4">
															<h1 className="text-light_text text-2xl max-lg:text-xl font-bold">{event.date}</h1>
															<h1 className="text-light_text text-2xl max-lg:text-xlfont-bold">{event.time}</h1>
														</div>
														<h1 className="text-light_text text-2xl max-lg:text-xl pt-4 font-bold">{event.description}</h1>
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
			</div> */}

			{/* list of past events */}
			<div className="w-full h-full pt-24">
				<h1 className="text-white font-bold text-6xl max-xl:text-4xl flex gap-1"><IoMdArrowDropright className="text-accent" /> Our Past Events</h1>

				<PastEvents />
			</div>
		</div>
	)
}