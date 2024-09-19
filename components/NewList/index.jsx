import Image from "next/image"
import data from "../../data/new.json"
import Link from "next/link"


export function NewList() {
	return (
		<div className="w-full h-fit flex flex-col gap-8">
			{
				data.map((thing, index) => {
					return (
						<Link href={thing.link} key={index} className="flex max-xl:flex-col gap-4 w-full justify-between bg-primary p-8 rounded-xl border border-secondary border-solid hover:border-accent cursor-pointer transition-all duration-200">
							<div className="w-1/2 max-xl:w-full min-h-full flex flex-col">
								<div className="w-full h-fit flex justify-start">
									<div className="h-full w-fit px-8">
										<h1 className="text-6xl font-bold text-light_text">{index}.</h1>
									</div>

									<div className="w-full h-full flex flex-col justify-between items-center">
										<h1 className="text-white text-3xl max-xl:text-2xl font-bold">{thing.name}</h1>
									</div>
								</div>

								<div className="h-full w-full flex flex-col justify-between items-center">
									<h1 className="text-light_text text-2xl max-xl:text-lg">{thing.description}</h1>
									<h1 className="text-light_text text-2xl">{thing.footnote}</h1>
								</div>
							</div>

							<div className="w-1/2 max-xl:w-full min-h-full">
								<Image src={thing.image} width={600} height={600} alt="new thing" className="object-cover rounded-lg w-full h-fit" unoptimized />
							</div>
						</Link>
					)
				})
			}
		</div>
	)
}