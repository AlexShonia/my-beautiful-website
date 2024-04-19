"use client";
import { useState, useEffect } from "react";

function Loading() {
	const [progress, setProgress] = useState(0);
	const [mounted, setMounted] = useState(false);
	const [inter, setInter] = useState(1000);

	useEffect(() => {
		setMounted(true);
		const timer = setInterval(() => {
			setInter(100);
			if (progress < 100) {
				setProgress((prevProgress) => prevProgress + 1);
			}
			if (progress > 10) {
				setInter(50);
			}
			if (progress > 30) {
				setInter(34);
			}
			if (progress > 50) {
				setInter(24);
			}
		}, inter);

		return () => {
			clearInterval(timer);
		};
	}, [progress]);
	return (
		<>
			{mounted && (
				<div className="dark:bg-button-dark bg-light-purple fade-away">
					<div className="dark:bg-white progress-bar bg-button-bg w-0 h-4"/>
				</div>
			)}
			<div className="sm:w-[92%] sm:h-[84vh] mt-[8vh] mx-auto flex flex-col justify-between fade-away">
				{mounted && (
					<>
						<div>
							<div className="overflow-hidden">
								<h3 className="text-7xl font-extrabold text-appear">
									CRYPTO YOUTUBER,
								</h3>
							</div>
							<div className="overflow-hidden">
								<h3 className="text-7xl font-extrabold text-appear">
									& GRAND MASTER
								</h3>
							</div>
							<div className="overflow-hidden">
								<h3 className="text-7xl font-extrabold text-appear">
									GEM HUNTER.
								</h3>
							</div>
						</div>
						<h1 className="flex justify-end text-9xl font-extrabold color-appear">
							{progress}{" "}
							<div className="text-6xl flex items-end pb-4 font-extrabold">
								%
							</div>
						</h1>
					</>
				)}
			</div>
		</>
	);
}

export default Loading;
