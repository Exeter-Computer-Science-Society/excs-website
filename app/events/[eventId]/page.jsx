import data from "@/data/events.json"
import Image from "next/image"
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";


import { BsCalendar2Date } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiLink } from "react-icons/ci";
import { Map } from "@/components/Map";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
	return [{ eventId: '1' }, { eventId: '2' }, { eventId: '3' }]
}

export default function EventsPage({ params }) {
	const { eventId } = params




	let event = data.filter((e) => {
		return e.id === (eventId * 1)
	})

	event = event[0]


	return (
		<div className="w-screen h-full pt-32 pl-[var(--page-padding-left)] pr-[var(--page-padding-right)]">
			{
				event ? (
					<div className="">
						{/* <div className="absolute w-full h-full">
							<div className="w-fit flex h-fit group">
								<Link href={"/events"} target="_blank" className="w-fit h-12 text-black text-2xl font-bold border-2 p-2 border-accent rounded-lg hover:border-white transition-all duration-200">
									<h1 className="text-accent hover:text-white transition-all duration-200">Back</h1>
								</Link>
							</div>
						</div> */}

						<Image src={event.image} width={400} height={400} alt={event.title} className="w-full h-[500px] object-cover rounded-t-lg" unoptimized />



						<div className="w-full h-fit bg-primary">
							<div className="p-8 flex flex-col gap-8">
								<div className="w-full h-fit flex justify-between">
									<h1 className="text-white font-bold text-6xl max-xl:text-4xl flex gap-1">{event.title}</h1>
									<Link href={event.link}>
										<CiLink className="w-16 h-16 text-light_text text-2xl font-bold cursor-pointer transition-all hover:scale-110 hover:text-white duration-200" />
									</Link>

								</div>

								<hr className="text-light_text" />

								<div className="w-full h-fit ">
									<h1 className="flex gap-4 text-light_text text-3xl max-xl:text-xl"><BsCalendar2Date />{event.date}</h1>
									<h1 className="flex gap-4 text-light_text text-3xl max-xl:text-xl"><IoTimeOutline />{event.time}</h1>
									<h1 className="flex gap-4 text-light_text text-3xl max-xl:text-xl"><CiLocationArrow1 />{event.location}</h1>

									<h1 className="text-light_text text-2xl pt-8">{event.description}</h1>

									<div className="w-full h-96">
										<Map longitude={event.longitude} latitude={event.latitude} />
									</div>

								</div>
							</div>

							<div className="w-full bg-secondary flex justify-center h-fit p-6 rounded-b-lg">
								<Link href={event.fixr} target="_blank" className="w-fit h-16 text-black text-2xl font-bold border-2 p-4 border-accent bg-secondary rounded-lg hover:scale-110 hover:border-white transition-all duration-200">
									<h1 className="text-accent hover:text-white transition-all duration-200">Get Tickets</h1>
								</Link>
							</div>
						</div>
					</div>
				) : (
					<h1>loading</h1>
				)
			}

		</div>
	)
}