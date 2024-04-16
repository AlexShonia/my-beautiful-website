import Image from "next/image";
import { useState } from "react";
import AccordionContent from "./accordion-content";
import AccordionPart from "./accordion-part";

function Accordion() {
	const [accordionOpen, setAccordionOpen] = useState(1);

	return (
		<div className="flex h-90vh min-w-full mt-20 dark:text-black ">
			<AccordionPart number={1} accordionOpen={accordionOpen} setAccordionOpen={setAccordionOpen}/>
			<AccordionPart number={2} accordionOpen={accordionOpen} setAccordionOpen={setAccordionOpen}/>
			<AccordionPart number={3} accordionOpen={accordionOpen} setAccordionOpen={setAccordionOpen}/>
			<AccordionPart number={4} accordionOpen={accordionOpen} setAccordionOpen={setAccordionOpen}/>
			<AccordionPart number={5} accordionOpen={accordionOpen} setAccordionOpen={setAccordionOpen}/>
		</div>
	);
}

export default Accordion;
