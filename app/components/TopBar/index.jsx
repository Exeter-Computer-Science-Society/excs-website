import Image from "next/image";
import Link from "next/link";

// icons
import { FiExternalLink } from "react-icons/fi";

export function TopBar() {
	return (
		<div className="w-full h-28 pl-[var(--page-padding-left)] pr-[var(--page-padding-right)] pt-6 flex gap-16 items-center justify-around fixed top-0 left-0 right-0 z-50 bg-background pb-6">
			<div>
				<Image src="/images/excs-final.svg" alt="Exeter Computer Science Society" width={150} height={150} />
			</div>

			<div className="h-full flex gap-4 justify-center items-center">
				<div className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
					<h1 className="text-light_text font-bold">Feature Your Project</h1>
				</div>

				<div className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
					<h1 className="text-light_text font-bold">Committee</h1>
				</div>

				<div className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
					<h1 className="text-light_text font-bold">Events</h1>
				</div>

				<Link href={"https://my.exeterguild.com/groups/QRM97/computer-science-society/memberships"} target={"_blank"} className="w-fit h-full p-4 rounded-lg border border-secondary bg-primary flex justify-center items-center hover:border-accent cursor-pointer transition-all duration-200">
					<h1 className="text-light_text font-bold flex justify-center items-center gap-2">Memberships<FiExternalLink /></h1>
				</Link>
			</div>
		</div>
	)
}