import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Phemis Portfolio | Software Architect & LLM Engineer",
    description: "Senior SSD Software Architect & LLM Systems Engineer. Building intelligent platforms with advanced AI and distributed systems.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(inter.variable, "bg-background font-sans antialiased")}>
                {children}
            </body>
        </html>
    );
}
