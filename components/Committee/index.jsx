'use client'

import Image from "next/image"

import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLink } from "react-icons/io5";


export function Committee({data, detailed=false}) {
	return !detailed ? (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,2fr))] gap-4 h-full w-full">
			{
				data.map((member, index) => {
					return (
						<div key={index} className="w-fit h-full flex flex-col justify-center items-center gap-1 p-4 rounded-lg bg-primary bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary from-0% to-secondary to-100%">
							<Image src={member.image} width={300} height={300} alt="user" className="rounded-xl border border-white object-cover aspect-square" unoptimized />

							<div className="w-full h-fit flex flex-col justify-center items-center text-light_text">
								<h1 className="text-white font-bold text-2xl">{member.position}</h1>
								<h1 className="text-lg">{member.name}</h1>
								<div className="flex gap-3 pt-3">
									{
										member.links.map((link, index) => {
											return (
												<div key={index}>
													{
														link.type === "instagram" ? (
															<a href={link.url} target="_blank" className="hover:text-white transition-all duration-200 cursor-pointer">
																<IoLogoInstagram size={24} />
															</a>
														) : link.type === "github" ? (
															<a href={link.url} target="_blank" className="hover:text-white transition-all duration-200 cursor-pointer">
																<FiGithub size={24} />
															</a>
														) : link.type === "linkedin" ? (
															<a href={link.url} target="_blank" className="hover:text-white transition-all duration-200 cursor-pointer">
																<IoLogoLinkedin size={24} />
															</a>
														) : link.type === "other" ? (
															<a href={link.url} target="_blank" className="hover:text-white transition-all duration-200 cursor-pointer">
																<IoLink size={24} />
															</a>
														) : null
													}
												</div>
											)
										})
									}
								</div>
							</div>
						</div>
					)
				})	
			}
		</div>
	) : (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(28rem,3fr))] gap-4 h-full w-full">
			{
				data.map((member, index) => {
					return (
						<div key={index} className="w-full h-full flex flex-col justify-around gap-4 p-8 rounded-lg bg-primary bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary from-0% to-secondary to-100% border border-background hover:border-accent transition-all duration-200 cursor-pointer">
							<div className="flex gap-8">
								<Image src={member.image} width={100} height={100} alt="user" className="w-44 h-44 rounded-xl border border-white aspect-square object-cover" unoptimized />

								<div className="flex flex-col gap-4">
									<h1 className="text-white font-bold text-4xl">{member.position}</h1>
									<h1 className="text-light_text text-2xl">{member.name}</h1>
								</div>
							</div>

							<div className="w-full h-full flex flex-col gap-16 justify-between items-center text-light_text">
								<h1 className="text-light_text text-lg max-xl:text-sm text-wrap">{member.description}</h1>
								<div className="w-full flex justify-start gap-3 pt-3">
									{
										member.links.map((link, index) => {
											return (
												<div key={index}>
													{
														link.type === "instagram" ? (
															<a href={link.url} target="_blank" className="hover:text-white transition-all duration-200 cursor-pointer">
																<IoLogoInstagram size={24} className="rounded-2xl hover:bg-white"/>
															</a>
														) : link.type === "github" ? (
															<a href={link.url} target="_blank" className="hover:text-white transition-all duration-200 cursor-pointer">
																<FiGithub size={24} />
															</a>
														) : link.type === "linkedin" ? (
															<a href={link.url} target="_blank" className="hover:text-white transition-all duration-200 cursor-pointer">
																<IoLogoLinkedin size={24} />
															</a>
														) : link.type === "other" ? (
															<a href={link.url} target="_blank" className="hover:text-white transition-all duration-200 cursor-pointer">
																<IoLink size={24} />
															</a>
														) : null
													}
												</div>
											)
										})
									}
								</div>
							</div>
						</div>
					)
				})	
			}
		</div>
	)
}