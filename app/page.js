'use client'

import Image from "next/image";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { Committee } from "./components/Committee";

// icons
import { IoMdArrowDropright } from "react-icons/io";
import { FlyingTriangles } from "./components/FlyingTriangles";


export default function Home() {
	return (
		<div className="w-screen h-full bg-background pt-32">
			<TopBar />

			{/* Heading */}
			<div className="w-screen h-screen flex flex-col justify-center items-center gap-20 pb-72">

				<FlyingTriangles />

				<div className="w-fit h-fit border border-white flex gap-8 bg-primary justify-center items-center p-4 z-40">
					<Image src="/images/icons/exeter-no-bg.png" width={50} height={50} alt={"logig"} className="bg-white rounded-full" />
					<h1 className="text-light_text text-3xl font-extrabold">University of Exeter</h1>
				</div>

				<div className="flex gap-12">
					<Image src="/images/icons/computer-s-s.svg" width={400} height={100} alt="s" />
					<Image src="/images/icons/c-science-s.svg" width={400} height={100} alt="s" />
					<Image src="/images/icons/c-s-society.svg" width={400} height={100} alt="s" />
				</div>
			</div>

			<div className="pl-[var(--page-padding-left)] pr-[var(--page-padding-right)]">



				{/* about */}
				<div>

				</div>

				{/* whats new page */}
				<div className="flex flex-col">
					<div className="flex justify-start h-24">
						<h1 className="text-3xl font-bold text-light_text flex"><IoMdArrowDropright className="text-accent" />New for this year!</h1>
					</div>
					{/* <Committee /> */}
				</div>


				{/* committee page */}
				<div className="flex flex-col">
					<div className="flex justify-between h-24">
						<h1 className="text-3xl font-bold text-light_text flex"><IoMdArrowDropright className="text-accent" />Your committee</h1>
						<h1 className="text-xl font-bold text-accent cursor-pointer">View ALL...</h1>
					</div>
					<Committee />
				</div>

			</div>


			<Footer />
		</div>
	)
}
