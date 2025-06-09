import React, { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const Container: FC<React.PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return (
        <div className={cn("mx-auto px-8 max-md:px-5", className)}>
            {children}
        </div>
    );
};

export { Container };
