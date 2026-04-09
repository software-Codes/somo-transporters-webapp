"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6,
  Gallery7, Gallery8, Gallery9, Gallery10, Gallery11, Gallery12,
  Gallery13, Gallery14, Gallery15, Gallery16, Gallery17, Gallery18,
  Gallery19, Gallery20, Gallery21, Gallery22, Gallery23, Gallery24,
  Gallery25, Gallery26, Gallery27, Gallery28, Gallery29,
} from "@/assets/images/Gallery/gallery";
import { Button } from "./ui/button";
import { X, ChevronLeft, ChevronRight, Search } from "lucide-react";

const galleryImages = [
  { src: Gallery1, alt: "Somo Transporters operations" },
  { src: Gallery2, alt: "Somo Transporters operations" },
  { src: Gallery3, alt: "Somo Transporters operations" },
  { src: Gallery4, alt: "Somo Transporters operations" },
  { src: Gallery5, alt: "Somo Transporters operations" },
  { src: Gallery6, alt: "Somo Transporters operations" },
  { src: Gallery7, alt: "Somo Transporters operations" },
  { src: Gallery8, alt: "Somo Transporters operations" },
  { src: Gallery9, alt: "Somo Transporters operations" },
  { src: Gallery10, alt: "Somo Transporters operations" },
  { src: Gallery11, alt: "Somo Transporters operations" },
  { src: Gallery12, alt: "Somo Transporters operations" },
  { src: Gallery13, alt: "Somo Transporters operations" },
  { src: Gallery14, alt: "Somo Transporters operations" },
  { src: Gallery15, alt: "Somo Transporters operations" },
  { src: Gallery16, alt: "Somo Transporters operations" },
  { src: Gallery17, alt: "Somo Transporters operations" },
  { src: Gallery18, alt: "Somo Transporters operations" },
  { src: Gallery19, alt: "Somo Transporters operations" },
  { src: Gallery20, alt: "Somo Transporters operations" },
  { src: Gallery21, alt: "Somo Transporters operations" },
  { src: Gallery22, alt: "Somo Transporters operations" },
  { src: Gallery23, alt: "Somo Transporters operations" },
  { src: Gallery24, alt: "Somo Transporters operations" },
  { src: Gallery25, alt: "Somo Transporters operations" },
  { src: Gallery26, alt: "Somo Transporters operations" },
  { src: Gallery27, alt: "Somo Transporters operations" },
  { src: Gallery28, alt: "Somo Transporters operations" },
  { src: Gallery29, alt: "Somo Transporters operations" },
];

const GalleryMainComponent = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: StaticImageData; alt: string } | null>(null);

  const openLightbox = (image: { src: StaticImageData; alt: string }) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  }, []);

  const navigateImage = useCallback((direction: string) => {
    if (!selectedImage) return;
    const currentIndex = galleryImages.findIndex((img) => img.src === selectedImage.src);
    const newIndex = direction === "next"
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
  }, [selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, closeLightbox, navigateImage]);

  return (
    <div className="w-full bg-background">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Our Photo Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of photos showcasing Somo Transporters&apos;
            excellence in action.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => openLightbox(image)}
            >
              <div className="relative h-40 sm:h-56 md:h-56 lg:h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Search className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 sm:top-6 sm:right-6 text-white hover:bg-white/20 z-50 h-10 w-10 sm:h-12 sm:w-12"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            <X className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          {/* Prev */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50 h-10 w-10 sm:h-12 sm:w-12"
            onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          {/* Next */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-50 h-10 w-10 sm:h-12 sm:w-12"
            onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </Button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full h-[70vh] sm:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryMainComponent;
