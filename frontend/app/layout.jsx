import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Crypto Seth",
	description: "Crypto website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} bg-slate-100 dark:bg-dark`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
