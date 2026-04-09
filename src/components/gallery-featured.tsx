import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Gallery10, Gallery11, Gallery5 } from "@/assets/images/Gallery/gallery";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  { src: Gallery10, alt: "Somo Transporters operations" },
  { src: Gallery5, alt: "Somo Transporters operations" },
  { src: Gallery11, alt: "Somo Transporters operations" },
];

const FeaturedGallery = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Gallery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at our operations and experience the excellence of Somo
            Transporters
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-10">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="flex-1 relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button size="lg" className="rounded-md shadow-md hover:shadow-lg">
              View Our Gallery
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
