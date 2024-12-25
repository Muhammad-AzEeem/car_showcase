// == step 28 create comp
"use client";

import React, { Fragment, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { updateSearchParams } from "@/utils";

export default function CustomFilter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  // == step 30
  function handleUpdateParams(e: { title: string; value: string }) {
    // == step 32
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName, { scroll: false });
  }

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </ListboxButton>

          {/* step 29 */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {options.map((option) => (
                <ListboxOption
                  key={option.title}
                  value={option}
                  className={({ focus }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      focus ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected, focus }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

// == step 31 in utils folder index.ts file
// == step 33 in page.tsx
