import { Committee } from "../../components/Committee";
import { IoMdArrowDropright } from "react-icons/io";

import new_committee from "@/data/committee.json"
import old_committee_23 from "@/data/past/committee-2023-2024.json"
import old_committee_24 from "@/data/past/committee-2024-2025.json"
import old_committee_25 from "@/data/past/committee-2025-2026.json"


export default function CommitteePage() {
	return (
		<div className="w-full h-full pt-56 pl-[var(--page-padding-left)] pr-[var(--page-padding-right)]">
			<h1 className="text-light_text text-4xl font-bold flex gap-1"><IoMdArrowDropright className="text-accent"/>Committee 2026/2027</h1>
			<Committee data={new_committee} detailed={false} />

			<h1 className="text-light_text text-4xl font-bold flex gap-1 pt-24"><IoMdArrowDropright className="text-accent"/>Committee 2025/2026</h1>
			<Committee data={old_committee_25} detailed={false} />

			<h1 className="text-light_text text-4xl font-bold flex gap-1 pt-24"><IoMdArrowDropright className="text-accent"/>Committee 2024/2025</h1>
			<Committee data={old_committee_24} detailed={false} />

			<h1 className="text-light_text text-4xl font-bold flex gap-1 pt-24"><IoMdArrowDropright className="text-accent"/>Committee 2023/2024</h1>
			<Committee data={old_committee_23} detailed={false} />
		</div>
	)
}
