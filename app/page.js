'use client'

import Image from "next/image";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { Committee } from "./components/Committee";

// icons
import { IoMdArrowDropright } from "react-icons/io";
import { FlyingTriangles } from "./components/FlyingTriangles";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import { NewList } from "./components/NewList";



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


				<div className="flex flex-col gap-4">
					{/* about */}
					<div className="w-full h-fit p-8 bg-primary rounded-xl flex flex-col gap-2 border border-secondary">
						<h1 className="text-accent text-6xl font-extrabold">Hi!</h1>

						<h1 className="text-light_text text-2xl font-bold">Welcome to the official website for the Computer Science Society at Exeter University :)</h1>
						<h1 className="text-light_text text-2xl font-bold">As the academic society for the Computer Science department it is our responsibility to represent our students&apos; interests, assist their academic growth, foster a sense of community within the department, and further their knowledge within the field.</h1>
						<h1 className="text-light_text text-2xl pt-4 font-bold"><span className="text-accent text-4xl font-bold">TLDR &gt;&gt;</span> We run awesome socials, interesting talks, support you, and help you grow your career.</h1>
					</div>

					{/* links */}
					<div className="h-fit flex gap-4 justify-start items-center">
						<Link href={"https://www.instagram.com/exetercompsci/"} className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
							<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src={"/images/icons/instagram.svg"} width={20} height={20} alt={"instagram"} />Instagram</h1>
						</Link>

						<Link href={"https://www.facebook.com/ExCompSci/"} className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
							<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src={"/images/icons/facebook.svg"} width={20} height={20} alt={"facebook"} />Facebook</h1>
						</Link>

						<Link href={"https://www.linkedin.com/school/exeter-computing-society/"} className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
							<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src={"/images/icons/linkedin.svg"} width={20} height={20} alt={"linkedin"} />LinkedIn</h1>
						</Link>

						<Link href={"https://github.com/Exeter-Computer-Science-Society"} className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
							<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src={"/images/icons/github.svg"} width={20} height={20} alt={"github"} />Github</h1>
						</Link>

						<Link href={"https://www.discord.gg/QWvPy3VSrZ"} className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
							<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src={"/images/icons/discord.svg"} width={20} height={20} alt={"discord"} />Discord</h1>
						</Link>
					</div>
				</div>


				{/* whats new page */}
				<div className="flex flex-col pt-72">
					<div className="flex justify-start h-24">
						<h1 className="text-3xl font-bold text-light_text flex"><IoMdArrowDropright className="text-accent" />New for this year!</h1>
					</div>
					
					{/* new things */}
					<NewList />
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
