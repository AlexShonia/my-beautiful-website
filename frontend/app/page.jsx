import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Nav from "./ui/nav";

export default function Home() {
	return (
		<>
			<Nav></Nav>
			<main className="mt-12 px-20">
				<div className="flex justify-between items-center">
					<div className="w-6/12 flex flex-col justify-between" style={{height: "665px"}}>
						<h1 className="text-9xl  font-bold">
							WELCOME, I'M CRYPTO
						</h1>
						<div className="flex items-center">
							<h1 className="text-9xl mr-8 font-bold">SETH</h1>
							<button className="h-24 w-64 flex items-center justify-center outline-2 outline-slate-200 outline rounded-4xl">
								<Image
									src="/yt-logo.png"
									width={60}
									height={20}
									className="mr-5 ml-2"
								/>
								<div className="w-6/12 text-start">
									21.5k+ viewers on youtube
								</div>
							</button>
						</div>
						<p className="font-medium w-2/3 my-9">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tempore rem pariatur eligendi enim, expedita
							iste minima veritatis assumenda inventore adipisci
							aut tenetur ad. Quod a voluptatem, fugiat inventore
							aliquid nihil! Tempore rem pariatur eligendi enim.
						</p>
						<div className="flex items-center mt-8">
							<button className="rounded-full bg-white p-5 w-16 h-16 antialiased mr-6">
								<ArrowDownIcon />
							</button>
							Scroll Down
						</div>
					</div>
					<Image
						className="rounded-3xl "
						src="/youtuber1.png"
						width={650}
						height={665}
					/>
				</div>
			</main>
		</>
	);
}
