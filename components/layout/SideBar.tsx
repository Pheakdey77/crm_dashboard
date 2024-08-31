"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { Icon, Menu } from "@/components/custom/index";
import { siteConfig } from "@/config/site";

interface HeaderProps {
  title: string;
  img: string;
}

const Header: React.FC<HeaderProps> = ({ title, img }) => {
  return (
    <div className="flex items-center w-full gap-3 pl-6">
      {img && (
        <Image
          alt="Menu Icon"
          className="cursor-pointer rounded-full"
          height={24}
          src={img}
          width={24}
        />
      )}
      <p className="font-medium text-center hidden lg:block">{title}</p>
    </div>
  );
};

const SearchModal: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="bg-slate-50 rounded-[5px] border-1 mt-7 w-[217px] ml-4 lg:flex justify-start border-[#DADDE2] py-3 hidden"
        radius="none"
        size="sm"
        onPress={onOpen}
      >
        <Image
          alt="Search Icon"
          className="cursor-pointer opacity-50"
          height={16}
          src="/icons/search.svg"
          width={16}
        />
        <p className="font-medium opacity-70 text-[13px]">Search...</p>
      </Button>
      <Modal
        className="h-[500px]"
        isOpen={isOpen}
        radius="sm"
        size="3xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 border-b-1">
            <div className="flex gap-2">
              <Image
                alt="Search Icon"
                className="cursor-pointer opacity-60"
                height={16}
                src="/icons/search.svg"
                width={16}
              />
              <Input
                className="max-w-xs outline-0 bg-transparent"
                placeholder="Search..."
                radius="sm"
                type="text"
              />
            </div>
          </ModalHeader>
          <ModalBody>
            <Listbox>
              <ListboxItem key="home" href="/home">
                <p>Dashboard</p>
              </ListboxItem>
              <ListboxItem key="products" href="/products">
                Products
              </ListboxItem>
              <ListboxItem key="purchases" href="/purchases">
                Purchases
              </ListboxItem>
              <ListboxItem key="sales" href="/sales">
                Sales
              </ListboxItem>
              <ListboxItem key="transfer" href="/transfer">
                Transfer
              </ListboxItem>
            </Listbox>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
const MenuBar: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>("Home");
  const [selectedSubMenu, setSelectedSubMenu] = useState<string | null>(null);

  const handleMenuClick = (
    menuTitle: string,
    link: string,
    hasSubMenus: boolean,
  ) => {
    if (hasSubMenus) {
      setSelectedMenu(menuTitle);
      setSelectedSubMenu(null); // Reset sub-menu selection when a new menu is clicked
    } else {
      setSelectedMenu(menuTitle);
      setSelectedSubMenu(null); // Ensure no sub-menu is selected
    }
  };

  const handleSubMenuClick = (subMenuTitle: string) => {
    setSelectedSubMenu(subMenuTitle); // Set the selected sub-menu
  };

  return (
    <div className="w-full flex flex-col gap-2 ml-4 mt-2">
      {siteConfig.menus.map((menu, index) => (
        <Menu
          key={index}
          is_selected={selectedMenu === menu.title}
          link={menu.link} // Only assign link if no submenus
          logo={menu.logo}
          subMenus={menu.subMenus.map((subMenu) => ({
            ...subMenu,
            is_selected: selectedSubMenu === subMenu.title,
          }))}
          title={menu.title}
          onClick={() =>
            handleMenuClick(menu.title, menu.link, menu.subMenus.length > 0)
          }
          onSubMenuClick={handleSubMenuClick}
        />
      ))}
    </div>
  );
};
const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative overflow-x-hidden	">
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
        className="fixed top-2 left-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200  text-gray-600 lg:hidden"
        onClick={handleToggle}
      >
        <Icon
          className="w-4 h-4"
          name={isOpen ? "close" : "bars-staggered-solid"}
        />
      </button>

      <nav
        className={`pr-6 overflow-x-hidden bg-white base-box-shadow h-full border-r-1 pt-5 fixed lg:relative transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 md:block resize-x overflow-y-auto`}
        style={{ zIndex: 40 }}
      >
        <Header
          img="https://avatars.githubusercontent.com/u/121384386?v=4"
          title="Next"
        />
        <SearchModal />
        <div className="w-full flex justify-center mt-2">
          <MenuBar />
        </div>
      </nav>

      {isOpen && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={handleToggle}
        />
      )}
    </div>
  );
};

export default SideBar;
