import { prisma } from "./prisma-client";
import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
    productId,
    pizzaType,
    size,
}: {
    productId: number;
    pizzaType?: 1 | 2;
    size?: 20 | 30 | 40;
}) => {
    return {
        productId,
        price: randomNumber(190, 600),
        pizzaType,
        size,
    } as Prisma.ProductVariantUncheckedCreateInput;
};

/* --------------------------------------------------------------------------------------------------------------------------------------------- */

async function up() {
    // Создание пользователей
    await prisma.user.createMany({
        data: [
            {
                fullName: "Nurakhmet",
                email: "nurakhmet.dev@gmail.com",
                password: hashSync("root", 10),
                verified: new Date(),
                role: "USER",
            },
            {
                fullName: "Admin",
                email: "admin@admin.com",
                password: hashSync("root", 10),
                verified: new Date(),
                role: "ADMIN",
            },
        ],
    });

    // Создание категорий
    await prisma.category.createMany({
        data: categories,
    });

    // Создание ингредиентов
    await prisma.ingredient.createMany({
        data: ingredients,
    });

    // Создание продуктов
    await prisma.product.createMany({
        data: products,
    });

    // Создание пиццы "Пепперони фреш"
    const pizza1 = await prisma.product.create({
        data: {
            name: "Пепперони фреш",
            imgUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5),
            },
        },
    });

    // Создание пиццы "Сырная"
    const pizza2 = await prisma.product.create({
        data: {
            name: "Сырная",
            imgUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 10),
            },
        },
    });

    // Создание пиццы "Чоризо фреш"
    const pizza3 = await prisma.product.create({
        data: {
            name: "Чоризо фреш",
            imgUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 40),
            },
        },
    });

    // Создание продуктов
    await prisma.productVariant.createMany({
        data: [
            // Пицца "Пепперони фреш"
            generateProductItem({
                productId: pizza1.id,
                pizzaType: 1,
                size: 20,
            }),
            generateProductItem({
                productId: pizza1.id,
                pizzaType: 2,
                size: 30,
            }),
            generateProductItem({
                productId: pizza1.id,
                pizzaType: 2,
                size: 40,
            }),

            // Пицца "Сырная"
            generateProductItem({
                productId: pizza2.id,
                pizzaType: 1,
                size: 20,
            }),
            generateProductItem({
                productId: pizza2.id,
                pizzaType: 1,
                size: 30,
            }),
            generateProductItem({
                productId: pizza2.id,
                pizzaType: 1,
                size: 40,
            }),
            generateProductItem({
                productId: pizza2.id,
                pizzaType: 2,
                size: 20,
            }),
            generateProductItem({
                productId: pizza2.id,
                pizzaType: 2,
                size: 30,
            }),
            generateProductItem({
                productId: pizza2.id,
                pizzaType: 2,
                size: 40,
            }),

            // Пицца "Чоризо фреш"
            generateProductItem({
                productId: pizza3.id,
                pizzaType: 1,
                size: 20,
            }),
            generateProductItem({
                productId: pizza3.id,
                pizzaType: 2,
                size: 30,
            }),
            generateProductItem({
                productId: pizza3.id,
                pizzaType: 2,
                size: 40,
            }),

            // Остальные продукты
            generateProductItem({ productId: 1 }),
            generateProductItem({ productId: 2 }),
            generateProductItem({ productId: 3 }),
            generateProductItem({ productId: 4 }),
            generateProductItem({ productId: 5 }),
            generateProductItem({ productId: 6 }),
            generateProductItem({ productId: 7 }),
            generateProductItem({ productId: 8 }),
            generateProductItem({ productId: 9 }),
            generateProductItem({ productId: 10 }),
            generateProductItem({ productId: 11 }),
            generateProductItem({ productId: 12 }),
            generateProductItem({ productId: 13 }),
            generateProductItem({ productId: 14 }),
            generateProductItem({ productId: 15 }),
            generateProductItem({ productId: 16 }),
            generateProductItem({ productId: 17 }),
        ],
    });

    // Создание корзины
    await prisma.cart.createMany({
        data: [
            {
                token: "test-1",
                userId: 1,
                totalAmount: 0,
            },
            {
                token: "test-2",
                userId: 2,
                totalAmount: 0,
            },
        ],
    });

    // Создание элементов корзины
    await prisma.cartItem.create({
        data: {
            productVariantId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
            },
        },
    });
}

/* --------------------------------------------------------------------------------------------------------------------------------------------- */

async function down() {
    // Отключение проверки внешних ключей
    await prisma.$executeRawUnsafe("SET FOREIGN_KEY_CHECKS = 0;");

    // Очистка таблиц
    await prisma.$executeRawUnsafe("TRUNCATE TABLE `CartItem`;");
    await prisma.$executeRawUnsafe("TRUNCATE TABLE `Cart`;");
    // await prisma.$executeRawUnsafe("TRUNCATE TABLE `StoryItem`;");
    // await prisma.$executeRawUnsafe("TRUNCATE TABLE `Story`;");
    await prisma.$executeRawUnsafe("TRUNCATE TABLE `VerificationCode`;");
    await prisma.$executeRawUnsafe("TRUNCATE TABLE `Category`;");
    await prisma.$executeRawUnsafe("TRUNCATE TABLE `ProductVariant`;");
    await prisma.$executeRawUnsafe("TRUNCATE TABLE `Order`;");
    await prisma.$executeRawUnsafe("TRUNCATE TABLE `Ingredient`;");
    await prisma.$executeRawUnsafe("TRUNCATE TABLE `Product`;");
    await prisma.$executeRawUnsafe("TRUNCATE TABLE `User`;");

    // Включение проверки внешних ключей
    await prisma.$executeRawUnsafe("SET FOREIGN_KEY_CHECKS = 1;");
}

/* --------------------------------------------------------------------------------------------------------------------------------------------- */

async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
