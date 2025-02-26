"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
  Gallery11,
  Gallery12,
  Gallery13,
  Gallery14,
  Gallery15,
  Gallery16,
  Gallery17,
  Gallery18,
  Gallery19,
  Gallery20,
  Gallery21,
  Gallery22,
  Gallery23,
  Gallery24,
  Gallery25,
  Gallery26,
  Gallery27,
  Gallery28,
  Gallery29,
} from "@/assets/images/Gallery/gallery";

const GalleryMainComponent = () => {
  // State for the lightbox
  const [selectedImage, setSelectedImage] = useState<{ src: StaticImageData; alt: string } | null>(null);

  // Gallery images array
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
    {src : Gallery20, alt: "Somo Transporters operations" },
    {src : Gallery21, alt: "Somo Transporters operations" },
    {src : Gallery22, alt: "Somo Transporters operations" },
    {src : Gallery23, alt: "Somo Transporters operations" },
    {src : Gallery24, alt: "Somo Transporters operations" },
    {src : Gallery25, alt: "Somo Transporters operations" },
    {src : Gallery26, alt: "Somo Transporters operations" },
    {src : Gallery27, alt: "Somo Transporters operations" },
    {src : Gallery28, alt: "Somo Transporters operations" },
    {src : Gallery29, alt: "Somo Transporters operations" },
    
  ];

  // Modal/lightbox functions
  const openLightbox = (image: { src: StaticImageData; alt: string }) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Navigate through images in lightbox
  const navigateImage = (direction: string) => {
    const currentIndex = galleryImages.findIndex(
      (img) => selectedImage && img.src === selectedImage.src
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }

    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      {/* <div className="relative w-full">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[750px] relative">
          <Image
            src={Frontview}
            alt="Somo Transporters operations"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              View Gallery for{" "}
              <span className="text-orange-500">Somo Transporters</span>
            </h1>
            <p className="text-white font-sans text-lg md:text-xl max-w-2xl mx-auto">
              Capturing the best moments of our operations
            </p>
          </div>
        </div>
      </div> */}

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Photo Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Explore our collection of photos showcasing Somo Transporters'
            excellence in action.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => openLightbox(image)}
            >
              <div className="relative h-64 sm:h-60 md:h-56 lg:h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox/Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-4xl hover:text-orange-500 transition z-50"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            &times;
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white z-50"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white z-50"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-screen max-h-[80vh] w-screen max-w-5xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryMainComponent;
