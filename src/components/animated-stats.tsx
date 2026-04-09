"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTruck, FaUsers, FaCalendarAlt, FaRoad } from "react-icons/fa";
import { Card, CardContent } from "./ui/card";

const AnimatedStats = () => {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: <FaTruck className="w-8 h-8" />, value: 30, suffix: "+", label: "Trucks" },
    { icon: <FaUsers className="w-8 h-8" />, value: 22, suffix: "+", label: "Customers" },
    { icon: <FaCalendarAlt className="w-8 h-8" />, value: 20, suffix: "+", label: "Years Experience" },
    { icon: <FaRoad className="w-8 h-8" />, value: 200000, suffix: "+", label: "Trips Completed" },
  ];

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="py-16 bg-accent/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="text-primary bg-accent p-4 rounded-full">
                    {stat.icon}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-card-foreground">
                      {isMounted && (
                        <CountUp start={0} end={stat.value} duration={2.5} formattingFn={formatNumber} />
                      )}
                    </span>
                    <span className="text-primary text-xl">{stat.suffix}</span>
                  </div>
                  <p className="text-lg font-medium text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface CountUpProps {
  start: number;
  end: number;
  duration: number;
  formattingFn?: (num: number) => string;
}

const CountUp: React.FC<CountUpProps> = ({ start, end, duration, formattingFn }) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let current = start;
    const increment = (end - start) / (duration * 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(timer);
        current = end;
      }
      setCount(Math.floor(current));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <>{formattingFn ? formattingFn(count) : count}</>;
};

export default AnimatedStats;
