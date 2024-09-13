'use client'

import { useEffect } from "react"
import data from "../../data/committee.json"
import Image from "next/image"

import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLink } from "react-icons/io5";


export function Committee() {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,2fr))] gap-4 h-full w-full">
			{
				data.map((member, index) => {
					return (
						<div key={index} className="w-fit h-fit flex flex-col gap-1 p-4 rounded-lg bg-primary bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary from-0% to-secondary to-100%%">
							<Image src={member.image} width={300} height={300} alt="user" className="rounded-xl border border-white"/>

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
															<a href={link.url} target="_blank">
																<IoLogoInstagram size={24} />
															</a>
														) : link.type === "github" ? (
															<a href={link.url} target="_blank">
																<FiGithub size={24} />
															</a>
														) : link.type === "linkedin" ? (
															<a href={link.url} target="_blank">
																<IoLogoLinkedin size={24} />
															</a>
														) : link.type === "other" ? (
															<a href={link.url} target="_blank">
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