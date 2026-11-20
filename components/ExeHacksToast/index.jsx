"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Press_Start_2P } from "next/font/google"

const pixel = Press_Start_2P({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
})

const DISMISS_KEY = "exehacks-2027-toast-dismissed"
const DISMISS_FOR_MS = 7 * 24 * 60 * 60 * 1000
const ENTER_DELAY_MS = 1500

function dismissedRecently() {
	try {
		const at = Number(window.localStorage.getItem(DISMISS_KEY))
		if (!at) return false
		return Date.now() - at < DISMISS_FOR_MS
	} catch {
		return false
	}
}

export function ExeHacksToast() {
	const [open, setOpen] = useState(false)
	const [reduceMotion, setReduceMotion] = useState(false)

	useEffect(() => {
		if (dismissedRecently()) return

		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
		setReduceMotion(reduce)

		if (reduce) {
			setOpen(true)
			return
		}

		const timer = window.setTimeout(() => setOpen(true), ENTER_DELAY_MS)
		return () => window.clearTimeout(timer)
	}, [])

	function dismiss() {
		try {
			window.localStorage.setItem(DISMISS_KEY, String(Date.now()))
		} catch {
			// Private mode can block storage. Hiding for this view is enough.
		}
		setOpen(false)
	}

	if (!open) return null

	return (
		<aside
			className={reduceMotion ? "exehacks-toast" : "exehacks-toast exehacks-toast--enter"}
			role="status"
			aria-label="ExeHacks 2027"
		>
			<div className="exehacks-toast__bar">
				<p className={`exehacks-toast__title ${pixel.className}`}>.EXEHACKS 2027</p>
				<button
					type="button"
					className="exehacks-toast__close"
					onClick={dismiss}
					aria-label="Dismiss ExeHacks notification"
				>
					X
				</button>
			</div>
			<div className="exehacks-toast__body">
				<Image
					src="images/exehacks-2027-hero.png"
					width={1920}
					height={1080}
					alt=""
					className="exehacks-toast__thumb"
					unoptimized
				/>
				<div className="exehacks-toast__copy">
					<p>24h hackathon, 6-7 Feb, Exeter</p>
					<Link href="https://exehacks.excs.uk" target="_blank" className="exehacks-toast__cta">
						Apply / Learn more
					</Link>
				</div>
			</div>
		</aside>
	)
}
