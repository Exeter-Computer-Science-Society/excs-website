'use client'

import Image from "next/image";
import Link from "next/link";

// icons
import { FiExternalLink } from "react-icons/fi";
import { LuPartyPopper } from "react-icons/lu";
import { PiScroll } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";


export function TopBar() {
	return (
		<div className="w-screen h-28 pl-[var(--page-padding-left)] pr-[var(--page-padding-right)] pt-6 flex gap-16 items-center justify-between fixed top-0 left-0 right-0 z-50 bg-background pb-6 border-b border-b-secondary">
			<Link href={"/"}>
				<Image src="images/excs-final.svg" alt="Exeter Computer Science Society" width={150} height={150} unoptimized />
			</Link>

			<div className="h-full flex gap-4 justify-center items-center">
				<Link href={"/featured-projects"} className="xl:w-fit h-full max-xl:aspect-square sp-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
					<div className="flex gap-1 justify-center items-center">
						<h1 className="text-light_text max-xl:hidden font-bold">Feature Your Project</h1>
						<PiScroll className="text-light_text " />
					</div>
				</Link>

				<Link href={"/committee"} className="xl:w-fit h-full max-xl:aspect-square p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
					<div className="flex gap-1 justify-center items-center">
						<h1 className="text-light_text max-xl:hidden font-bold">Committee</h1>
						<BsFillPeopleFill className="text-light_text" size={24} />
					</div>
				</Link>

				<Link href={"/events"} className="xl:w-fit h-full max-xl:aspect-square p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
					<div className="flex gap-1 justify-center items-center">
						<h1 className="text-light_text max-xl:hidden font-bold">Events</h1>
						<LuPartyPopper className="text-light_text" size={24} />
					</div>

				</Link>

				<Link href={"https://my.exeterguild.com/groups/QRM97/computer-science-society/memberships"} target={"_blank"} className="xl:w-fit h-full max-xl:aspect-square p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
					<div className="flex gap-1 justify-center items-center">
						<h1 className="text-light_text max-xl:hidden font-bold">Memberships</h1>
						<FiExternalLink className="text-light_text" size={24} />
					</div>
				</Link>
			</div>
		</div>
	)
}