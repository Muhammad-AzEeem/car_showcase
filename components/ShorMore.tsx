"use client";

// == step 34 create comp

import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  // == step 35
  function handleNavigation() {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  }

  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

// == step 35 is a last step
