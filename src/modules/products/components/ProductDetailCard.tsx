"use client";

import { Product } from "../types/product";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCartStore } from "@/modules/cart/store/cartStore";
import { motion } from "framer-motion";

interface Props {
  product: Product;
}

export default function ProductDetailCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="rounded-2xl shadow-lg flex flex-col lg:flex-row gap-6 p-6">
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </div>

        <CardContent className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">${product.price}</p>
            <p className="text-sm text-gray-500"></p>
          </div>

          <Button
            onClick={() =>
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
              })
            }
            className="mt-6 w-full lg:w-auto"
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
