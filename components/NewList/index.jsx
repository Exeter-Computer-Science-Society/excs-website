import Image from "next/image"
import data from "../../data/new.json"
import Link from "next/link"


export function NewList() {
	return (
		<div className="w-full h-fit flex flex-col gap-8">
			{
				data.map((thing, index) => {
					return (
						<Link href={thing.link} key={index} className="flex max-lg:flex-col justify-between bg-primary p-8 rounded-xl border border-secondary border-solid hover:border-accent cursor-pointer transition-all duration-200">
							<div className="flex justify-start">
								<div className="h-full w-fit px-8">
									<h1 className="text-6xl font-bold text-light_text">{index}.</h1>
								</div>

								<div className="flex flex-col justify-between">
									<div>
										<h1 className="text-white text-3xl font-bold">{thing.name}</h1>
										<h1 className="text-light_text text-2xl">{thing.description}</h1>

									</div>
									<div>
										<h1 className="text-light_text text-2xl">{thing.footnote}</h1>
									</div>
								</div>
							</div>

							<div>
								<Image src={thing.image} width={600} height={600} alt="new thing" className="object-cover rounded-lg w-full h-fit" unoptimized />
							</div>
						</Link>
					)
				})
			}
		</div>
	)
}