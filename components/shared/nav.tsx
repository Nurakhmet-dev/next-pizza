import { FC } from "react";
import { cn } from "@/lib/utils";

import { Button } from "../ui";

import { User, ShoppingCart, ArrowRight, Menu, X } from "lucide-react";

interface Props {
    className?: string;
    setIsOpen?: (isOpen: boolean) => void;
    isOpen?: boolean;
}

const NavLinks = () => (
    <>
        <Button variant={"outline"} className="flex items-center gap-1">
            <User size={16} />
            Войти
        </Button>

        <div>
            <Button className="group relative">
                <b>520 TG</b>
                <span className="h-full w-[1px] bg-white/30 mx-3" />
                <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                    <ShoppingCart
                        className="h-4 w-4 relative"
                        strokeWidth={2}
                    />
                    <b>3</b>
                </div>
                <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
        </div>
    </>
);

const Nav: FC<Props> = ({ className, isOpen, setIsOpen }) => {
    const toggleMenu = () => {
        setIsOpen?.(!isOpen);
    };
    return (
        <nav>
            <div
                className={cn(
                    "md:flex items-center gap-3 max-md:hidden",
                    className
                )}
            >
                <NavLinks />
            </div>

            <div className="md:hidden">
                {!isOpen && (
                    <Button
                        variant={"default"}
                        className="sm:hidden p-2 rounded-sm"
                        onClick={toggleMenu}
                    >
                        <Menu />
                    </Button>
                )}
                {isOpen && (
                    <div
                        className="fixed top-0 left-0 z-20
					w-full h-screen bg-white p-10"
                    >
                        <Button
                            variant={"default"}
                            className="sm:hidden p-2 rounded-sm"
                            onClick={toggleMenu}
                        >
                            <X />
                        </Button>
                        <div className="flex flex-col gap-5 mt-10">
                            <NavLinks />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export { Nav };
