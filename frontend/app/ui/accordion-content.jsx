import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

function AccordionContent({ isOpen }) {
	return (
		<div className="flex ml-6">
			<div className="overflow-hidden px-8 flex flex-col justify-between">
				<h3 className="text-5xl font-bold w-9/12">
					YOUTUBE SHORT HEADING GOES HERE
				</h3>
				<p className="w-10/12 pb-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Praesentium possimus, aliquam tempora esse libero itaque
					veritatis molestiae fuga debitis blanditiis laboriosam
					dolores, repudiandae placeat accusamus maiores. Quis illum
					iure sapiente.repudiandae placeat accusamus maiores. Quis
					illum iure sapiente.
				</p>
				<Image
					className="rounded-3xl pb-12"
					src="/youtuber3.png"
					width={850}
					height={665}
				/>
			</div>
			<div className="flex flex-col items-center mr-12">
				<button className="flex w-36 h-16 items-center justify-center rounded-full bg-button-bg text-l font-medium text-white dark:text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
					Link <ArrowUpRightIcon className="ml-2 w-6" />
				</button>
				<div className="mt-12">21.5k+ viewers</div>
			</div>
		</div>
	);
}

export default AccordionContent;
