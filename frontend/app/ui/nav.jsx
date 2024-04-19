import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Button from "./button";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Nav() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	function chooseLogo() {
		if (!mounted) return "/loading-logo.png";
		return resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png";
	}
	return (
		<nav className="nav-appear sm:py-6 sm:w-[92%] mx-auto flex justify-between items-center">
			<div className="flex w-3/12 justify-start">
				<Image
					src={chooseLogo()}
					width={60}
					height={60}
					className="mr-3"
				/>
				<h1 className="md:text-xl flex items-center font-bold mr-6">
					CRYPTO SETH
				</h1>
				<label class="inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						value=""
						class="sr-only peer"
						onClick={() =>
							setTheme(
								resolvedTheme === "light" ? "dark" : "light"
							)
						}
					/>
					<div class="relative w-11 h-6 bg-black dark:bg-button-dark peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:-translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:end-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
					<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300" />
				</label>
			</div>
			<div className="flex md:flex-row flex-col w-3/12 justify-between font-medium">
				<button className="text-lg">Membership</button>
				<button className="text-lg">Courses</button>
				<button className="text-lg">Contact</button>
			</div>
			<div className="flex w-3/12 justify-end space-x-4">
				<Button>
					<div className="dot-pulse">•</div>&nbsp; BECOME A MEMBER
				</Button>
				<button className="rounded-full bg-white dark:bg-button-dark p-5 w-16 h-16 antialiased">
					<Bars3BottomLeftIcon />
				</button>
			</div>
		</nav>
	);
}

export default Nav;
