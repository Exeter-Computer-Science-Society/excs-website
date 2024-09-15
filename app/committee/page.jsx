import { Committee } from "../../components/Committee";
import { IoMdArrowDropright } from "react-icons/io";

export default function CommitteePage() {
	return (
		<div className="w-screen h-full pt-32 pl-[var(--page-padding-left)] pr-[var(--page-padding-right)]">
			<h1 className="text-light_text text-4xl font-bold flex gap-1"><IoMdArrowDropright className="text-accent"/>Your Committee</h1>
			
			<Committee detailed={true} />

		</div>
	)
}