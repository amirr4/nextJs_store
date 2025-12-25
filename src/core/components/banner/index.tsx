// src/modules/home/components/Banner.tsx
import Image from 'next/image';
import * as React from 'react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@/components/ui';

interface CategoryImage {
  category: string;
  image: string;
}

async function getCategoryImages(): Promise<CategoryImage[]> {
  const categories = ["men's clothing", "women's clothing", 'jewelery', 'electronics'];

  const promises = categories.map(async (cat) => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(cat)}`,
        { cache: 'no-store' }, // مهم برای SSR
      );

      if (!res.ok) {
        console.error('Failed to fetch category:', cat);
        return { category: cat, image: '/placeholder.png' };
      }

      const data = await res.json();
      return { category: cat, image: data?.[1]?.image || '/placeholder.png' };
    } catch (err) {
      console.error('Error fetching category:', cat, err);
      return { category: cat, image: '/placeholder.png' };
    }
  });

  return Promise.all(promises);
}

export default async function Banner() {
  const images = await getCategoryImages();

  return (
    <Carousel opts={{ align: 'start' }} className="w-full">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`/products?category=${encodeURIComponent(img.category)}`}>
              <Card className="hover:shadow-xl transition cursor-pointer">
                <CardContent className="relative aspect-square h-[360px] w-full flex items-center justify-center p-4">
                  <Image
                    src={img.image}
                    alt={img.category}
                    fill
                    className="object-contain rounded-lg"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/60 text-white px-3 py-1 rounded text-sm">
                    {img.category}
                  </span>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
