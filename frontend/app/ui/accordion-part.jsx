import Image from "next/image";
import AccordionContent from "./accordion-content";

function AccordionPart({ number, accordionOpen, setAccordionOpen }) {
	return (
		<div
			className={`flex justify-center rounded-3xl border bg-white  ${
				number == 1 ? " rounded-r-none" : ""
			} ${number > 1 && number < 5 ? "rounded-none" : ""} ${
				number == 5 ? " rounded-l-none" : ""
			} `}
		>
			{number == 1 && (
				<button
					className="font-bold flex flex-col justify-between items-center w-10vh px-5 py-8"
					onClick={() => setAccordionOpen(number)}
				>
					<Image src="/yt-logo.png" width={40} height={20} />
					<div className="-rotate-90 mb-4">Youtube</div>
				</button>
			)}
			{number == 2 && (
				<button
					className="font-bold flex flex-col justify-between items-center w-10vh px-5 py-8"
					onClick={() => setAccordionOpen(number)}
				>
					<Image src="/telegram.webp" width={40} height={20} />
					<div className="-rotate-90 mb-4">Telegram</div>
				</button>
			)}
			{number == 3 && (
				<button
					className="font-bold flex flex-col justify-between items-center w-10vh px-5 py-8"
					onClick={() => setAccordionOpen(number)}
				>
					<Image src="/twitter.png" width={40} height={20} />
					<div className="-rotate-90 mb-4">Twitter</div>
				</button>
			)}
			{number == 4 && (
				<button
					className="font-bold flex flex-col justify-between items-center w-10vh px-5 py-8"
					onClick={() => setAccordionOpen(number)}
				>
					<Image src="/patreon.png" width={40} height={20} />
					<div className="-rotate-90 mb-4">Patreon</div>
				</button>
			)}
			{number == 5 && (
				<button
					className="font-bold flex flex-col justify-between items-center w-10vh px-5 py-8"
					onClick={() => setAccordionOpen(number)}
				>
					<Image src="/discord.png" width={40} height={20} />
					<div className="-rotate-90 mb-4">Discord</div>
				</button>
			)}
			<div
				className={`grid overflow-hidden transition-opacity duration-500 ease-in-out py-8 ${
					accordionOpen == number
						? "grid-cols-[1fr] opacity-100"
						: " grid-cols-[0fr] opacity-0 w-0"
				}
                `}
			>
				<AccordionContent isOpen={accordionOpen == number} />
			</div>
		</div>
	);
}

export default AccordionPart;
