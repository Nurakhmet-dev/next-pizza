import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container, Categories, SortPopup } from "./";

interface Props {
    className?: string;
}

const TopBar: FC<Props> = ({ className }) => (
    <div
        className={cn(
            "sticky top-0 bg-white py-5 border-b shadow-black/5 z-10",
            /* */ "max-md:h",
            className
        )}
    >
        <Container className="flex items-center justify-between gap-4">
            <Categories />
            <SortPopup />
        </Container>
    </div>
);

export { TopBar };
