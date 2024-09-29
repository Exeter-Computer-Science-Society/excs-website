'use client'

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function ImageCarousel({ images }) {

	const onChange = (index) => {
		console.log(index);
	}

	const onClickItem = (index) => {
		console.log(index);
	}

	const onClickThumb = (index) => {
		console.log(index);
	}

	return images ? (
		<Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} className="">
			{
				images?.map((image, index) => (
					<div key={index}>
						<Image width={300} height={300} src={image} className=" max-h-72 aspect-square object-contain" alt="" unoptimized/>
						{/* <p className="legend">Legend {index}</p> */}
					</div>
				))
			}
		</Carousel>
	) : (
		<div className="w-full h-full flex justify-center items-center">
			<h1 className="text-white text-4xl font-extrabold">No images</h1>
		</div>
	)
}