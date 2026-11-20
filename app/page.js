'use client'

// components
import Image from "next/image";
import Link from "next/link";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { Committee } from "@/components/Committee";
import { FlyingTriangles } from "@/components/FlyingTriangles";
import { NewList } from "@/components/NewList";
import { ExeHacksToast } from "@/components/ExeHacksToast";

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

			<ExeHacksToast />

			{/* Heading */}
			<div className="w-full h-screen flex flex-col justify-center items-center gap-20 pb-20 animate-[backgroundEnter_3s_forwards_0.1s]">

				<FlyingTriangles />

				<svg width="0" height="0" className="absolute w-0 h-0" aria-hidden="true" focusable="false">
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

				<div className="w-full h-screen flex flex-col justify-center items-center gap-12 pb-72 animate-[infoEnter_1s_forwards_0.1s]">
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
