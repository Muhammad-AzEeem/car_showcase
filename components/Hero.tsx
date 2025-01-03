// == step 2 create the hero component

"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

export default function Hero() {
  function handleScroll() {}

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x ">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        {/* step 3 */}
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      {/* step 5 */}
      <div className="hero__image-container ">
        <div className="hero__image ">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

// == step 3 in Custom Button
// == step 6 in layout.tsx
