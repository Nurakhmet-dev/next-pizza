import {
    Container,
    Title,
    TopBar,
    Filters,
    ProductsGroupList,
} from "../components/shared";
const Items = [
    {
        id: 1,
        name: "Пицца из половинок",
        price: 3200,
        items: [
            {
                price: 3200,
            },
            {
                price: 3200,
            },
        ],
        imageUrl:
            "https://media.dodostatic.net/image/r:292x292/0195dc96b2da74aabee7a671f52b731b.avif",
    },
    {
        id: 2,
        name: "Пицца из половинок",
        price: 3200,
        items: [
            {
                price: 3200,
            },
            {
                price: 3200,
            },
        ],
        imageUrl:
            "https://media.dodostatic.net/image/r:292x292/0195dc96b2da74aabee7a671f52b731b.avif",
    },
    {
        id: 3,
        name: "Пицца из половинок",
        price: 3200,
        items: [
            {
                price: 3200,
            },
            {
                price: 3200,
            },
        ],
        imageUrl:
            "https://media.dodostatic.net/image/r:292x292/0195dc96b2da74aabee7a671f52b731b.avif",
    },
    {
        id: 4,
        name: "Пицца из половинок",
        price: 3200,
        items: [
            {
                price: 3200,
            },
            {
                price: 3200,
            },
        ],
        imageUrl:
            "https://media.dodostatic.net/image/r:292x292/0195dc96b2da74aabee7a671f52b731b.avif",
    },
    {
        id: 5,
        name: "Пицца из половинок",
        price: 3200,
        items: [
            {
                price: 3200,
            },
            {
                price: 3200,
            },
        ],
        imageUrl:
            "https://media.dodostatic.net/image/r:292x292/0195dc96b2da74aabee7a671f52b731b.avif",
    },
    {
        id: 6,
        name: "Пицца из половинок",
        price: 3200,
        items: [
            {
                price: 3200,
            },
            {
                price: 3200,
            },
        ],
        imageUrl:
            "https://media.dodostatic.net/image/r:292x292/0195dc96b2da74aabee7a671f52b731b.avif",
    },
    {
        id: 7,
        name: "Пицца из половинок",
        price: 3200,
        items: [
            {
                price: 3200,
            },
            {
                price: 3200,
            },
        ],
        imageUrl:
            "https://media.dodostatic.net/image/r:292x292/0195dc96b2da74aabee7a671f52b731b.avif",
    },
    {
        id: 8,
        name: "Пицца из половинок",
        price: 3200,
        items: [
            {
                price: 3200,
            },
            {
                price: 3200,
            },
        ],
        imageUrl:
            "https://media.dodostatic.net/image/r:292x292/0195dc96b2da74aabee7a671f52b731b.avif",
    },
];
const Home = () => {
    return (
        <>
            <Container className="mt-8 max-md:mt-2">
                <Title text="Все продукты" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />
            <Container className="mt-10 pb-14">
                <div className="pb-14">
                    <div className="flex gap-[60px]">
                        {/* Filteration */}
                        <div className="w-[250px] max-md:hidden">
                            <Filters />
                        </div>

                        {/* Products */}
                        <div className="flex-1">
                            <div className="flex flex-col gap-16 scroll-smooth">
                                <ProductsGroupList
                                    key={1}
                                    categoryId={1}
                                    title="Пицца"
                                    items={Items}

                                    // key={category.id}
                                    // title={category.name}
                                    // items={category.products}
                                    // categoryId={category.id}
                                />
                                <ProductsGroupList
                                    key={2}
                                    categoryId={2}
                                    title="Комбо"
                                    items={Items}

                                    // key={category.id}
                                    // title={category.name}
                                    // items={category.products}
                                    // categoryId={category.id}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
