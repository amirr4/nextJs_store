"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "../types/product";
import Image from "next/image";
import { useCartStore } from "@/modules/cart/store/cartStore";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="rounded-2xl"
    >
      <Link
        href={`/products/${product.id}`} prefetch
        className="flex-1 flex flex-col justify-between"
      >
        <Card className="rounded-2xl shadow-md hover:shadow-xl transition flex flex-col  justify-between h-[320px]">
          <CardHeader className="flex items-center justify-center h-[150px]">
            <Image
              src={product.image}
              alt={product.title}
              width={120}
              height={120}
              className="object-contain"
            />
          </CardHeader>
          <CardContent className="flex flex-col justify-between h-[170px]">
            <div>
              <h3 className="font-semibold text-lg truncate">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500">${product.price}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
      <Button
        onClick={() =>
          addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
          })
        }
        className="mt-3 w-full"
      >
        Add to Cart
      </Button>
    </motion.div>
  );
}
