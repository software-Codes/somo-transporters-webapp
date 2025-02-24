"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import {
  BanodaImg,
  CityOilImg,
  DonOilImg,
  HaredImg,
  KobilImg,
  MogasImg,
  StabexImg,
} from "@/assets/images/client-slider/Slider";

const ClientsSlider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0%" });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sliderWidth, setSliderWidth] = useState(0);
  const controls = useAnimation();

  const clients = [
    { img: KobilImg, alt: "Kobil" },
    { img: DonOilImg, alt: "Don Oil" },
    { img: MogasImg, alt: "Mogas" },
    { img: BanodaImg, alt: "Banoda Oil" },
    { img: StabexImg, alt: "Stabex International" },
    { img: CityOilImg, alt: "City Oil" },
    { img: HaredImg, alt: "Hared Petroleum" },
  ];

  const triplicatedClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        const singleSetWidth = ref.current.scrollWidth / 3;
        setSliderWidth(singleSetWidth);

        controls.start({
          x: -singleSetWidth,
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        });
      }
    };

    updateWidth();
    const resizeObserver = new ResizeObserver(updateWidth);
    if (ref.current) resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [controls]);

  return (
    <section className="w-full py-8 bg-gray-50 overflow-hidden sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-center text-gray-600 text-base font-medium mb-6 sm:text-lg sm:mb-8 md:mb-12">
          World-wide Trusted by Oil Industry Leaders
        </h3>

        <div
          ref={ref}
          className="relative h-20 w-full overflow-hidden sm:h-20 md:h-24 lg:h-32"
        >
          <motion.div
            className="absolute flex items-center gap-6 sm:gap-6 md:gap-8 lg:gap-16"
            animate={controls}
            initial={{ x: 0 }}
          >
            {triplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.alt}-${index}`}
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0.8,
                  transition: { duration: 0.5, delay: index * 0.1 },
                }}
              >
                <div className="relative w-16 h-10 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-40 lg:h-20">
                  <Image
                    src={client.img}
                    alt={client.alt}
                    fill
                    priority={index < 7}
                    className="object-contain"
                    sizes="(max-width: 640px) 64px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 160px"
                    quality={100}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
