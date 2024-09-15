import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";


export function Footer() {
	return (
		<div className="w-full h-48 flex flex-col pl-[var(--page-padding-left)] pr-[var(--page-padding-right)] border-t-[0.6px] border-t-secondary bg-primary mt-20">
			<div className="w-full h-full flex flex-col gap-8 items-center justify-center">
				<div className="flex gap-1 justify-center items-center text-2xl">
					<h1 className="text-strong_text">Spotted an issue?</h1>
					<h1 className="text-light_text">Please</h1>
					<Link href={"mailto:excs@groups.exeterguild.com"} target={"_blank"} className="text-accent underline cursor-pointer">Let us know</Link>
					<h1 className="text-light_text">or</h1>
					<Link href={"https://github.com/Exeter-Computer-Science-Society/excs-website-2"} target={"_blank"} className="text-accent underline cursor-pointer">fix it yourself</Link>
					<h1 className="text-light_text">!</h1>

				</div>

				<div className="flex gap-1 justify-center items-center text-xl">
					<h1 className="text-light_text flex gap-1 items-center justify-center">Website built using open source <Link href={"https://nextjs.org/"} target={"_blank"} className="underline flex gap-1 justify-center items-center cursor-pointer">NextJS<FiExternalLink className="text-light_text" /></Link></h1>

				</div>
			</div>

		</div>
	)
}