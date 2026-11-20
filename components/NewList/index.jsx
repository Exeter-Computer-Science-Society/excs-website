import Image from "next/image"
import data from "../../data/new.json"
import Link from "next/link"


export function NewList() {
	return (
		<div className="w-full h-fit flex flex-col gap-8">
			{
				data.map((thing, index) => {
					return (
						<Link href={thing.link} key={index} target={"_blank"} className="flex max-xl:flex-col gap-4 w-full justify-between bg-primary p-8 rounded-xl border border-secondary border-solid hover:border-accent cursor-pointer transition-all duration-200">
							<div className="w-1/2 max-xl:w-full min-h-full flex flex-col">
								<div className="w-full h-fit flex justify-start">
									<div className="h-full w-fit px-8">
										<h1 className="text-6xl font-bold text-light_text">{index}.</h1>
									</div>

									<div className="w-full h-full flex flex-col justify-between items-center">
										<h1 className="text-white text-3xl max-xl:text-xl font-bold">{thing.name}</h1>
									</div>
								</div>

								<div className={thing.footnote ? "w-full flex flex-col items-center gap-4" : "h-full w-full flex flex-col justify-between items-center"}>
									<h1 className="text-light_text text-2xl max-xl:text-lg">{thing.description}</h1>
									{thing.footnote ? (
										<span className="w-fit rounded-lg border border-secondary bg-background px-4 py-2 text-xl font-bold text-accent max-xl:text-lg">
											{thing.footnote}
										</span>
									) : (
										<h1 className="text-light_text text-2xl"></h1>
									)}
								</div>
							</div>

							<div className="w-1/2 max-xl:w-full min-h-full">
								<Image
									src={thing.image}
									width={thing.imageFit === "contain" ? 1920 : 600}
									height={thing.imageFit === "contain" ? 1080 : 600}
									alt="new thing"
									className={thing.imageFit === "contain" ? "aspect-video w-full h-auto rounded-lg object-contain" : "object-cover rounded-lg w-full h-fit"}
									unoptimized
								/>
							</div>
						</Link>
					)
				})
			}
		</div>
	)
}