'use client'

// components
import Image from "next/image";
import Link from "next/link";

// icons
import { IoMdArrowDropright } from "react-icons/io";

// data
import winner from "@/data/winning_project.json";

// hooks
import { useState } from "react";


export default function FeaturedProjects() {

	const [more, setMore] = useState(false);

	return (
		<div className="w-screen h-full pt-56 pl-[var(--page-padding-left)] pr-[var(--page-padding-right)]">
			{/* Heading */}
			<div className="w-full h-screen flex justify-center items-center gap-20 pb-72">
				<div className="w-1/2 flex flex-col gap-4">
					<h1 className="text-white font-bold text-6xl max-xl:text-4xl flex gap-1"><IoMdArrowDropright className="text-accent" /> EXCS Featured Projects</h1>
					<h1 className="text-white font-bold text-3xl max-xl:text-xl">Raise awareness + get awarded for a project you are working on in your free time!</h1>
					<div className="group w-fit h-fit rounded-full">
						<div className="w-full flex h-fit">
							<Link href={"mailto:excs@groups.exeterguild.com"} target="_blank" className="w-fit h-fit text-accent text-2xl font-bold border-2 p-4 border-accent bg-background rounded-lg group-hover:border-white transition-all duration-200">
								<h1 className="group-hover:text-white transition-all duration-200">Submit Your Project</h1>
							</Link>
						</div>
					</div>

				</div>

				<div>
					<Image src="images/solo-programming.png" width={600} height={600} alt={"solo programming"} unoptimized />
				</div>
			</div>

			{/* goals */}
			<div className="w-full h-full flex max-lg:flex-col gap-4">
				<div className="w-full min-h-full p-8 py-16 flex flex-col gap-8 justify-center items-center text-center border-2 border-secondary rounded-xl">
					<h1 className="text-6xl">✨</h1>
					<h1 className="text-white text-3xl font-bold">Boost awareness about your project!</h1>
					<h1 className="text-light_text text-xl font-semibold">Your project will be featured on the excs.uk website and on our Instagram.</h1>
				</div>

				<div className="w-full min-h-full p-8 py-16 flex flex-col gap-8 justify-center items-center text-center border-2 border-secondary rounded-xl">
					<h1 className="text-6xl">💪</h1>
					<h1 className="text-white text-3xl font-bold">Show off your epic skills!</h1>
					<h1 className="text-light_text text-xl font-semibold">Flex on other computer scientists with your superior code.</h1>
				</div>

				<div className="w-full min-h-full p-8 py-16 flex flex-col gap-8 justify-center items-center text-center border-2 border-secondary rounded-xl">
					<h1 className="text-6xl">🏆</h1>
					<h1 className="text-white text-3xl font-bold">Make history on our website!</h1>
					<h1 className="text-light_text text-xl font-semibold">We will keep your project on our website forever, you will make history!</h1>
				</div>
			</div>

			{/* this months winner */}
			<div className="w-full h-full flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-light_text flex pt-60"><IoMdArrowDropright className="text-accent" />This months winning project!</h1>
				<div className="bg-primary p-12 border-2 border-secondary rounded-xl flex flex-col gap-8">
					<div className="flex justify-between">
						<div className="flex flex-col gap-1">
							<h1 className="text-white text-6xl max-xl:text-2xl font-bold">{winner.title}</h1>
							<h1 className="text-light_text text-xl max-xl:text-lg font-semibold">{winner.languages}</h1>
						</div>


						<h1 className="text-light_text text-2xl max-xl:text-lg font-bold">By {winner.author}</h1>

					</div>

					<div className="flex max-lg:flex-col gap-8">
						<div className="w-full">
							<h1 className="text-light_text text-2xl max-xl:text-sm font-bold">{winner.description}</h1>
						</div>

						<Image src={winner.image ? winner.image : "images/filler.png"} width={400} height={400} alt="project" className="w-1/3 max-lg:w-full h-full object-contain rounded-xl" unoptimized />
					</div>

					<div className="w-fit flex h-fit group">
						<Link href={winner.link} target="_blank" className="w-fit h-16 text-accent text-2xl font-bold border-2 p-4 border-accent bg-primary rounded-lg group-hover:border-white transition-all duration-200">
							<h1 className="group-hover:text-white transition-all duration-200">View on GitHub</h1>
						</Link>
					</div>
				</div>
			</div>

			{/* how does it work? */}
			<div className="w-full h-full pt-32">
				<div className="bg-background border-2 border-secondary p-8 flex flex-col gap-24">
					<div className="flex flex-col gap-8">
						<h1 className="text-white font-bold text-4xl flex gap-1"><IoMdArrowDropright className="text-accent" /> How do featured projects work?</h1>
						<h1 className="text-light_text text-wrap text-2xl pl-8">Every month, the society picks the best of the submitted projects and features it here! The wining project and its author(s) is awarded with a certificate and a mention on our socials! + Looks great on your CV!</h1>
					</div>
					{
						!more ? (
							<div className="w-fit flex h-fit group">
								<button href={winner.link} target="_blank" className="w-fit h-16 text-accent text-2xl font-bold border-2 p-4 border-accent bg-background rounded-lg group-hover:border-white transition-all duration-200" onClick={() => setMore(true)}>
									<h1 className="group-hover:text-white transition-all duration-200">Learn More</h1>
								</button>
							</div>
						) : (
							<div className="flex flex-col gap-16">
								<div className="flex flex-col gap-4">

									<h1 className="text-white font-bold text-4xl flex gap-1"><IoMdArrowDropright className="text-accent" /> Which projects qualify?</h1>

									<div className="pl-8">
										<h1 className="text-light_text text-2xl">Any computer science related project that you you have been working on are working on (It does not need to be completed!) and want to be recognised for and let others know about.</h1>
										<h1 className="text-light_text text-2xl">Bonus points if your project is Open Source and is useful for others!</h1>
									</div>
								</div>

								<div className="flex flex-col gap-4">
									<h1 className="text-white font-bold text-4xl flex gap-1"><IoMdArrowDropright className="text-accent" /> How can I apply?</h1>

									<div className="flex flex-col pl-8">
										<h1 className="text-light_text text-2xl">Please submit the project information according to the below instructions to our email</h1>

										<div className="rounded-lg bg-secondary p-8 text-white">
											<h1>Project Name</h1>
											<h1>Author(s)</h1>
											<h1>Languages used in project</h1>
											<h1>Detailed project description (3 paragraphs)</h1>
											<h1>Link to project github / website / other</h1>
											<h1>Project Image / logo, please more than 500x500</h1>
										</div>

									</div>
								</div>

								<div className="flex flex-col gap-4">

									<h1 className="text-white font-bold text-4xl flex gap-1"><IoMdArrowDropright className="text-accent" /> Lets go!</h1>

									<div className="w-fit flex h-fit group pl-8">
										<Link href={"mailto:excs@groups.exeterguild.com"} target="_blank" className="w-fit h-16 text-accent text-2xl font-bold border-2 p-4 border-accent bg-background rounded-lg group-hover:bg-accent transition-all duration-200" onClick={() => setMore(false)}>
											<h1 className="group-hover:text-background transition-all duration-200"> Apply!</h1>
										</Link>
									</div>
								</div>

								<div className="w-fit flex h-fit group">
									<button href={winner.link} target="_blank" className="w-fit h-16 text-accent text-2xl font-bold border-2 p-4 border-accent bg-background rounded-lg group-hover:bg-accent transition-all duration-200" onClick={() => setMore(false)}>
										<h1 className="group-hover:text-background transition-all duration-200"> View Less</h1>
									</button>
								</div>
							</div>
						)
					}
				</div>
			</div>
		</div>
	)
}