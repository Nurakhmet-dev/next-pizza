"use client";

import { useRef, useEffect, FC } from "react";

import { useCategoryStore } from "@/store/category";
import { useIntersection } from "react-use";

import { ProductCard, Title } from "./";
import { cn } from "@/lib/utils";

interface Props {
    title: string;
    items: {
        id: number;
        name: string;
        imageUrl: string;
        items: { price: number }[];
    }[];
    // items: CategoryProducts["products"];
    listClassName?: string;
    categoryId: number;
    className?: string;
}

const ProductsGroupList: FC<Props> = ({
    className,
    title,
    items,
    listClassName,
    categoryId,
}) => {
    const setActiveId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });
    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveId(categoryId);
        }
    }, [intersection?.isIntersecting, categoryId, setActiveId]);

    return (
        <div className={className} id={title}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div
                ref={intersectionRef}
                className={cn(
                    "grid md:max-2xl:grid-cols-3 md:max-xl:grid-cols-2 max-lg:grid-cols-1 grid-cols-4 gap-[50px]",
                    listClassName
                )}
            >
                {items
                    // .filter((product) => product.items.length > 0)
                    .map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.items[0].price}
                        />
                    ))}

                {/* <ProductCard
						id={1}
						name="Пицца из половинок"
						price={3200}
						imageUrl="https://media.dodostatic.net/image/r:292x292/0195dc96b2da74aabee7a671f52b731b.avif"
					/> */}
            </div>
        </div>
    );
};

export { ProductsGroupList };
