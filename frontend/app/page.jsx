"use client";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Nav from "./ui/nav";
import Accordion from "./ui/accordion";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false);
	async function fetchSmth() {
		console.log("Fetching revenue data...");
		const thing = await new Promise((resolve) => setTimeout(resolve, 7000));
		setIsLoaded(true);
	}

	useEffect(() => {
		fetchSmth();
	}, []);

	return (
		<>
			{!isLoaded ? (
				<Loading></Loading>
			) : (
				<>
					<header>
						<Nav></Nav>
					</header>
					<main className="sm:mt-12 sm:w-[92%] mx-auto xs:mt-0 flex flex-col items-center justify-center">
						<div className="flex justify-between items-center md:flex-row xs:flex-col">
							<div
								className="sm:w-6/12 flex flex-col justify-between xs:w-full"
								style={{ height: "665px" }}
							>
								<h1 className="2xl:text-9xl xl:text-8xl lg:text-7xl font-bold ">
									WELCOME, I'M CRYPTO
								</h1>
								<div className="flex items-center">
									<h1 className="2xl:text-9xl xl:text-8xl lg:text-7xl mr-8 font-bold">
										SETH
									</h1>
									<button className="h-24 w-64 flex items-center justify-center outline-2 outline-slate-200 dark:outline-button-dark outline rounded-4xl">
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
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Tempore rem pariatur
									eligendi enim, expedita iste minima
									veritatis assumenda inventore adipisci aut
									tenetur ad. Quod a voluptatem, fugiat
									inventore aliquid nihil! Tempore rem
									pariatur eligendi enim.
								</p>
								<div className="flex items-center mt-8">
									<a
										className="rounded-full bg-white dark:bg-button-dark p-5 w-16 h-16 antialiased mr-6"
										href="#myActivities"
									>
										{/* TODO: animate better */}
										<div className="animate-bounce">
											<ArrowDownIcon />
										</div>
									</a>
									Scroll Down
								</div>
							</div>
							<Image
								className="rounded-3xl w-5/12"
								src="/youtuber1.png"
								width={650}
								height={665}
							/>
						</div>
						<div
							className="pt-4 mt-36 flex flex-col items-center justify-center w-8/12 "
							id="myActivities"
						>
							<button className="text-button-dark font-medium text-lg bg-light-purple rounded-full p-2 px-5">
								My activites
							</button>
							<h2 className="text-8xl text-center font-bold mt-8">
								MEDIUM LENGTH SECTION HEADING GOES HERE
							</h2>
							<p className="text-center font-medium w-3/4 mt-10">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nam consectetur sunt quam
								facere aut, dicta dolores mollitia commodi, modi
								eius animi hic temporibus vel quas impedit nulla
								officia? Nulla, aliquam? animi hic temporibus
								vel quas impedit nulla officia? Nulla, aliquam
							</p>
						</div>

						<Accordion />

						<div className="mt-20"></div>
					</main>
				</>
			)}
		</>
	);
}
