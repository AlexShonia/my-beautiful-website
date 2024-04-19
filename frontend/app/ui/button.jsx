function Button({ children }) {
	return (
		<button className="flex w-60 h-16 items-center justify-center rounded-full bg-button-bg dark:bg-white text-lg font-medium text-white dark:text-black transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
			{children}
		</button>
	);
}

export default Button;
