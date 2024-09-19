import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";


export function Footer() {
	return (
		<div className="w-screen h-48 flex flex-col pl-[var(--page-padding-left)] pr-[var(--page-padding-right)] border-t-[0.6px] border-t-secondary bg-primary mt-20">
			<div className="w-full h-full flex flex-col gap-8 items-center justify-center">
				<div className="flex gap-1 justify-center items-center text-2xl max-xl:text-lg">
					<h1 className="text-light_text flex justify-center items-center gap-1 text-wrap flex-wrap">
						<div className="flex gap-1 ">
							Spotted an issue? Please
							<Link href={"mailto:excs@groups.exeterguild.com"} target={"_blank"} className="text-white underline cursor-pointer hover:text-accent transition-all duration-200">
								Let us know
							</Link>
							or
						</div>

						<Link href={"https://github.com/Exeter-Computer-Science-Society/excs-website-2"} target={"_blank"} className="text-white underline cursor-pointer hover:text-accent transition-all duration-200">
							Fix it yourself!
						</Link>
					</h1>
				</div>

				<div className="flex gap-1 justify-center items-center text-xl max-md:text-lg text-nowrap flex-nowrap">
					<h1 className="text-light_text flex justify-center items-center gap-1 text-wrap flex-wrap">
						<div className="flex gap-1">
							Website built using open source
							<Link href={"https://nextjs.org/"} target={"_blank"} className="text-white underline flex gap-1 justify-center items-center cursor-pointer hover:text-accent transition-all duration-200">
								NextJS
								<FiExternalLink className="text-light_text" />
							</Link>
						</div>
						<div className="flex gap-1">
							by
							<Link href={"https://www.linkedin.com/in/wiktor-wiejak"} className="text-white underline flex gap-1 justify-center items-center cursor-pointer hover:text-accent transition-all duration-200">
								Wiktor Wiejak
							</Link>
						</div>

					</h1>

				</div>
			</div>

		</div>
	)
}