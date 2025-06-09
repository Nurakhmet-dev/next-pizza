"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";

import { Logo, Nav, Container, SearchInput } from "./";

interface Props {
    className?: string;
}

const Header: FC<Props> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header
            className={cn(
                "border-b border-gray-200 py-8 max-md:py-4",
                className
            )}
        >
            <Container className="flex items-center justify-between">
                {/* Left section */}
                <Logo />
                {/* Center section */}
                <div className="mx-10 flex-1">
                    <SearchInput />
                </div>
                {/* Right section */}
                <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
            </Container>
        </header>
    );
};

export { Header };
