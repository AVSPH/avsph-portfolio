"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { portfolioItems } from "./portfolio-data";

export default function PortfolioMarquee() {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);

  // Filter images from portfolio (Social Media Posts and Proof items)
  const getMarqueeImages = () => {
    const socialPosts = portfolioItems.filter(
      (item) => item.category === "Social Media Post",
    );

    // Get all images from social media posts
    const allImages: string[] = [];
    socialPosts.forEach((item) => {
      if (item.images) {
        allImages.push(...item.images);
      }
    });

    return allImages;
  };

  const images = getMarqueeImages();

  // Distribute images across 3 columns
  const getColumnImages = (columnIndex: number) => {
    return images.filter((_, idx) => idx % 3 === columnIndex);
  };

  useEffect(() => {
    const column1Images = getColumnImages(0);
    const column2Images = getColumnImages(1);
    const column3Images = getColumnImages(2);

    if (!column1Ref.current || !column2Ref.current || !column3Ref.current)
      return;

    const animateColumn = (
      columnEl: HTMLDivElement,
      columnImages: string[],
      direction: "up" | "down",
    ) => {
      const itemCount = columnImages.length;
      const itemHeight = columnEl.offsetHeight / itemCount;
      const totalHeight = itemCount * itemHeight;

      if (direction === "up") {
        gsap.to(columnEl, {
          y: -totalHeight,
          duration: 40,
          repeat: -1,
          ease: "none",
          onRepeat: () => {
            gsap.set(columnEl, { y: 0 });
          },
        });
      } else {
        gsap.to(columnEl, {
          y: totalHeight,
          duration: 40,
          repeat: -1,
          ease: "none",
          onRepeat: () => {
            gsap.set(columnEl, { y: 0 });
          },
        });
      }
    };

    animateColumn(column1Ref.current, column1Images, "up");
    animateColumn(column2Ref.current, column2Images, "down");
    animateColumn(column3Ref.current, column3Images, "up");

    return () => {
      gsap.killTweensOf([
        column1Ref.current,
        column2Ref.current,
        column3Ref.current,
      ]);
    };
  }, []);

  const column1Images = getColumnImages(0);
  const column2Images = getColumnImages(1);
  const column3Images = getColumnImages(2);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl border border-[var(--border-light)] bg-[var(--background-alt)] shadow-xl">
      <div className="absolute inset-0 flex gap-4 p-4">
        {/* Column 1 - Scrolls Up */}
        <div className="flex-1 overflow-hidden rounded-2xl">
          <div
            ref={column1Ref}
            className="flex flex-col gap-4 will-change-transform"
          >
            {[...column1Images, ...column1Images].map((src, idx) => (
              <div
                key={`col1-${idx}`}
                className="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Portfolio item ${idx}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 - Scrolls Down */}
        <div className="flex-1 overflow-hidden rounded-2xl">
          <div
            ref={column2Ref}
            className="flex flex-col gap-4 will-change-transform"
          >
            {[...column2Images, ...column2Images].map((src, idx) => (
              <div
                key={`col2-${idx}`}
                className="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Portfolio item ${idx}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Column 3 - Scrolls Up */}
        <div className="flex-1 overflow-hidden rounded-2xl">
          <div
            ref={column3Ref}
            className="flex flex-col gap-4 will-change-transform"
          >
            {[...column3Images, ...column3Images].map((src, idx) => (
              <div
                key={`col3-${idx}`}
                className="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Portfolio item ${idx}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[var(--background-alt)] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[var(--background-alt)] to-transparent z-10 pointer-events-none" />
    </div>
  );
}
