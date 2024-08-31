"use client";
import { Tooltip } from "@nextui-org/tooltip";
import { Select, SelectItem } from "@nextui-org/select";
import { Avatar } from "@nextui-org/avatar";

import Header from "./Header";

export default function Appearance() {
  return (
    <>
      <Header />
      <div className="mt-4 md:ml-4 pb-8">
        {/* Company Logo */}
        <main className="p-5">
          <section>
            <div>
              <h2 className="font-medium text-gray-700">Company Logo</h2>
              <p className="text-gray-500">Update your company logo.</p>
            </div>
            <div />
          </section>
        </main>

        {/* Branding Color */}
        <main className="p-5">
          <section className="flex flex-col md:flex-row  md:items-center md:justify-between ">
            <div className="mb-3 md:mb-[0px]">
              <h2 className="font-medium text-gray-700">Branding Color </h2>
              <p className="text-gray-500">
                Select or customize your brand color.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-gray-400 rounded-full w-8 h-8 cursor-pointer shadow-sm outline-10 outline-gray-500" />
              <div className="bg-blue-400 rounded-full w-8 h-8 cursor-pointer shadow-sm" />
              <div className="bg-red-400 rounded-full w-8 h-8 cursor-pointer shadow-sm" />
              <div className="bg-green-300 rounded-full w-8 h-8 cursor-pointer shadow-sm" />
              <div className="bg-yellow-200 rounded-full w-8 h-8 cursor-pointer shadow-sm" />
            </div>
            <div />
          </section>
        </main>

        {/* Colors System */}
        <main className="p-5 ">
          <section className="flex flex-col md:flex-row md:items-center md:justify-between md:w-[1200px] ">
            <div className="mb-3 md:mb-[0px]">
              <h2 className="font-medium text-gray-700">Interface Theme </h2>
              <p className="text-gray-500">Select your System color.</p>
            </div>
            <div className="flex gap-4 ">
              <Tooltip content="Dark">
                <div className="bg-gray-900 rounded-full w-8 h-8 cursor-pointer shadow-sm outline-10 outline-gray-500" />
              </Tooltip>
              <Tooltip content="Light">
                <div className="bg-white rounded-full w-8 h-8 cursor-pointer shadow-sm border-2" />
              </Tooltip>
            </div>
            <div />
          </section>
        </main>

        {/* Select Language */}
        <main className="p-5 md:w-[1200px]">
          <section className="flex flex-col md:flex-row md:items-center md:justify-between md:w-[1200px]">
            <div className="mb-3 md:mb-[0px] w-[200px]">
              <h2 className="font-medium text-gray-700">Language </h2>
              <p className="text-gray-500">Select your Prefer Language </p>
            </div>
            <div className="w-[350px] md:w-[200px]">
              <Select label="Select Language" size="md">
                <SelectItem
                  key="argentina"
                  startContent={
                    <Avatar
                      alt="Argentina"
                      className="w-6 h-6"
                      src="https://flagcdn.com/us.svg"
                    />
                  }
                >
                  English
                </SelectItem>
                <SelectItem
                  key="venezuela"
                  startContent={
                    <Avatar
                      alt="Venezuela"
                      className="w-6 h-6"
                      src="https://flagcdn.com/kh.svg"
                    />
                  }
                >
                  Khmer
                </SelectItem>
                <SelectItem
                  key="brazil"
                  startContent={
                    <Avatar
                      alt="Brazil"
                      className="w-6 h-6"
                      src="https://flagcdn.com/cn.svg"
                    />
                  }
                >
                  Chinese
                </SelectItem>
              </Select>
            </div>
            <div />
          </section>
        </main>

        {/* Select Size SideBar */}
        <main className="p-5  md:w-[1200px]">
          <section className="flex flex-col md:flex-row md:items-center md:justify-between md:w-[1200px] ">
            <div className="mb-3 md:mb-[0px] w-[200px]">
              <h2 className="font-medium text-gray-700">Sidebar Size </h2>
              <p className="text-gray-500">Select your Prefer Size </p>
            </div>

            <div className="w-[350px] md:w-[200px]">
              <Select label="Select Size" size="md">
                <SelectItem key="200px">200px</SelectItem>
                <SelectItem key="350px">350px</SelectItem>
                <SelectItem key="400px">400px</SelectItem>
              </Select>
            </div>
            <div />
          </section>
        </main>

        {/* Select Font Size */}
        <main className="p-5  md:w-[1200px]">
          <section className="flex flex-col md:flex-row md:items-center md:justify-between md:w-[1200px] ">
            <div className="mb-3 md:mb-[0px] w-[200px]">
              <h2 className="font-medium text-gray-700">Font Size </h2>
              <p className="text-gray-500">Select your Prefer Size </p>
            </div>

            <div className="w-[350px] md:w-[200px]">
              <Select label="Select Size" selectedKeys="Medium(24px)" size="md">
                <SelectItem key="Small(12px)">Small(12px)</SelectItem>
                <SelectItem key="Medium(24px)">Medium(24px)</SelectItem>
                <SelectItem key="Large(16px)">Large(16px)</SelectItem>
              </Select>
            </div>
            <div />
          </section>
        </main>
      </div>
    </>
  );
}
