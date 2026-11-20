'use client'

// components
import Image from "next/image";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Committee } from "@/components/Committee";
import { FlyingTriangles } from "@/components/FlyingTriangles";
import { NewList } from "@/components/NewList";

// icons
import { IoMdArrowDropright } from "react-icons/io";

// data
import data from "@/data/committee.json";

const HERO_WORDMARK = [
	["images/icons/computer-s-s.svg", "Computer"],
	["images/icons/c-science-s.svg", "Science"],
	["images/icons/c-s-society.svg", "Society"],
];

function HeroWordmark({ decorative = false }) {
	return (
		<div className="flex justify-center gap-8 w-full" aria-hidden={decorative ? "true" : undefined}>
			{HERO_WORDMARK.map(([src, alt]) => (
				<Image
					key={src}
					src={src}
					width={400}
					height={100}
					alt={decorative ? "" : alt}
					className="w-1/4"
					unoptimized
				/>
			))}
		</div>
	);
}

export default function Home() {
	return (
		<div className="w-screen h-full pt-32 pl-[var(--page-padding-left)] pr-[var(--page-padding-right)]">

			{/* Heading */}
			<div className="relative w-full min-h-screen flex flex-col justify-center items-center gap-14 pb-16 animate-[backgroundEnter_3s_forwards_0.1s]">

				<FlyingTriangles />

				<svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
					<filter id="hero-glitch-green" colorInterpolationFilters="sRGB">
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0.2902  0 0 0 0 0.8706  0 0 0 0 0.5020  0 0 0 1 0"
						/>
					</filter>
					<filter id="hero-glitch-purple" colorInterpolationFilters="sRGB">
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0.6588  0 0 0 0 0.3333  0 0 0 0 0.9686  0 0 0 1 0"
						/>
					</filter>
				</svg>

				<div className="w-full flex flex-col justify-center items-center gap-12 animate-[infoEnter_1s_forwards_0.1s]">
					<Link href={"https://www.exeter.ac.uk/"} target="_blank" className="hero-glitch-pill w-fit h-fit border border-light_text flex gap-8 bg-primary justify-center items-center p-4 z-40 cursor-pointer hover:scale-105 hover:border-white transition-all duration-200 rounded-lg">
						<Image src="images/icons/exeter-no-bg.png" width={50} height={50} alt={"logig"} className="bg-white rounded-full" unoptimized />
						<h1 className="hero-glitch-text text-light_text text-3xl max-xl:text-xl font-extrabold hover:text-white transition-all duration-200">
							<span>University of Exeter</span>
							<span className="hero-glitch-text__slice hero-glitch-text__slice--green" aria-hidden="true">University of Exeter</span>
							<span className="hero-glitch-text__slice hero-glitch-text__slice--purple" aria-hidden="true">University of Exeter</span>
						</h1>
					</Link>

					<div className="hero-glitch-mark">
						<HeroWordmark />
						<div className="hero-glitch-mark__layer hero-glitch-mark__layer--green" aria-hidden="true">
							<HeroWordmark decorative />
						</div>
						<div className="hero-glitch-mark__layer hero-glitch-mark__layer--purple" aria-hidden="true">
							<HeroWordmark decorative />
						</div>
					</div>
				</div>

				<section aria-label="ExeHacks 2027" className="relative z-40 w-full max-w-5xl animate-[infoEnter_1s_forwards_0.1s]">
					<div className="rounded-xl shadow-[4px_4px_0_0_#A855F7]">
						<div className="flex w-full flex-col overflow-hidden rounded-xl border border-secondary bg-primary md:flex-row">
							<div className="h-44 w-full shrink-0 overflow-hidden md:h-56 md:w-3/5">
								<Image
									src="images/exehacks-2027-hero.png"
									width={1920}
									height={1080}
									alt="ExeHacks poster. Pixel text reads .EXEHACKS, 24H, 6-7 Feb 2027, Exeter, and Build something that shouldn't exist yet."
									className="h-full w-full object-cover object-center"
									unoptimized
								/>
							</div>
							<div className="flex flex-col justify-center gap-2 p-6 md:w-2/5 md:p-8">
								<p className="text-sm font-bold tracking-wide text-[#4ADE80]">24-hour hackathon</p>
								<h2 className="text-3xl font-extrabold text-white max-xl:text-2xl">ExeHacks 2027</h2>
								<p className="text-lg font-medium text-light_text max-xl:text-base">6-7 Feb 2027, Innovation Centre, Exeter</p>
								<Link
									href="https://exehacks.excs.uk"
									target="_blank"
									className="mt-3 w-fit rounded-lg bg-[#4ADE80] px-5 py-2.5 text-base font-extrabold text-[#141414] shadow-[4px_4px_0_0_#A855F7] transition-transform duration-200 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#A855F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A855F7]"
								>
									Visit ExeHacks
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* about */}
			<div className="flex flex-col gap-4">
				<div className="w-full h-fit p-8 bg-primary rounded-xl flex flex-col gap-2 border border-secondary">
					<h1 className="text-accent text-6xl max-xl:text-4xl font-extrabold">Hi!</h1>
					<div className="text-light_text text-2xl max-xl:text-lg font-bold">
						<h1>Welcome to the official website for the Computer Science Society at Exeter University :)</h1>
						<h1>As the academic society for the Computer Science department it is our responsibility to represent our students&apos; interests, assist their academic growth, foster a sense of community within the department, and further their knowledge within the field.</h1>
						<h1 className="pt-4"><span className="text-accent text-4xl max-xl:text-2xl font-bold">TLDR &gt;&gt;</span> We run awesome socials, interesting talks, support you, and help you grow your career.</h1>
					</div>

				</div>

				<div className="h-fit w-full flex flex-wrap gap-4 justify-start items-center">
					<Link href={"https://www.instagram.com/exetercompsci/"} target="_blank" className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
						<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src="images/icons/instagram.svg" width={20} height={20} alt={"instagram"} unoptimized />Instagram</h1>
					</Link>

					<Link href={"https://www.facebook.com/ExCompSci/"} target="_blank" className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
						<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src="images/icons/facebook.svg" width={20} height={20} alt={"facebook"} unoptimized />Facebook</h1>
					</Link>

					<Link href={"https://www.linkedin.com/school/exeter-computing-society/"} className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
						<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src="images/icons/linkedin.svg" width={20} height={20} alt={"linkedin"} unoptimized />LinkedIn</h1>
					</Link>

					<Link href={"https://github.com/Exeter-Computer-Science-Society"} target="_blank" className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
						<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src="images/icons/github.svg" width={20} height={20} alt={"github"} unoptimized />Github</h1>
					</Link>

					<Link href={"https://www.discord.gg/QWvPy3VSrZ"} target="_blank" className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
						<h1 className="text-light_text font-bold flex justify-center items-center gap-2"><Image src="images/icons/discord.svg" width={20} height={20} alt={"discord"} unoptimized />Discord</h1>
					</Link>
				</div>
			</div>

			{/* whats new page */}
			<div className="flex flex-col pt-72">
				<div className="flex justify-start h-12">
					<h1 className="text-3xl font-bold text-light_text flex text-nowrap flex-nowrap"><IoMdArrowDropright className="text-accent" />New for this year!</h1>
				</div>

				{/* new things */}
				<NewList />
			</div>

			{/* committee page */}
			<div className="flex flex-col pt-72">
				<h1 className="text-3xl font-bold text-light_text flex"><IoMdArrowDropright className="text-accent" />Your Committee</h1>
				<Committee data={data} />
			</div>

			{/* sponsorships page */}
			<div className="flex flex-col pt-72">
				<div className="flex flex-col justify-between h-fit">
					<h1 className="text-3xl font-bold text-light_text flex"><IoMdArrowDropright className="text-accent" />Our Sponsors</h1>
					<div className="w-full max-h-full flex flex-wrap justify-start items-center gap-8 pt-8 pb-4">
						<Link href={"https://techexeter.uk/"} target={"_blank"} className="w-32 h-fit text-xl font-bold text-accent cursor-pointer underline">
							<Image src="images/sponsors/techexeter.png" className="object-contain w-full h-fit" width={400} height={400} alt={"Tech Exeter"} unoptimized />
						</Link>

						<Link href={"https://luma.com/kitumpid"} target={"_blank"} className="w-32 h-full text-xl font-bold text-accent cursor-pointer underline">
							<Image src="images/sponsors/mintsw.webp" width={400} height={400} alt={"MintSw"} unoptimized />
						</Link>
					</div>
					

					<Link href={"mailto:excs@groups.exeterguild.com"} className="w-fit h-fit text-xl font-bold text-accent cursor-pointer underline">
						<h1>Interested in Sponsoring Us?</h1>
					</Link>
				</div>
			</div>
		</div>
	)
}
