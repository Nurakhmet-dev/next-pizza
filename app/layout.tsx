import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import { Header } from "../components/shared/";

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Next Pizza",
    description: "Лучшая пицца в городе!",
    viewport: "width=device-width, initial-scale=1.0",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body
                className={`${nunito.variable} min-h-screen p-8 max-md:p-0  bg-orange-100`}
            >
                <div className="min-h-screen bg-white shadow-lg rounded-3xl ">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
