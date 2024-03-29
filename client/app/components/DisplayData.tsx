"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface IProduct {
    name: string;
    description: string;
    price: number;
}

export default function DisplayData() {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/products"
                );
                if (response.status === 200) {
                    const data = response.data;
                    console.log(data);
                    setProducts(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <section className="container mx-auto p-6">
                {" "}
                {/* Container for centering */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Responsive product grid */}
                    {products.map((product) => (
                        <div
                            key={product.name}
                            className="border rounded-md p-4 shadow-md flex flex-col items-start"
                        >
                            <h3 className="font-bold text-lg mb-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-600">
                                {product.description}
                            </p>
                            <p className="font-medium mt-auto">
                                Price: ${product.price}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
