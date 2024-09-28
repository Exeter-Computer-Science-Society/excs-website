// styling
import localFont from "next/font/local"
import "./globals.css"

// components
import { Footer } from "@/components/Footer"
import { TopBar } from "@/components/TopBar"
import { RefProvider } from "@/contexts/refContext"

// hooks


const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})

const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata = {
	title: "Exeter Computer Science Society",
	description: "Our societies home page",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="w-screen h-full overflow-x-hidden">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`} >
				<TopBar />

				<RefProvider>
					{children}
				</RefProvider>

				<Footer />
			</body>
		</html>

	)
}
