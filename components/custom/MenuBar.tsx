"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { getColorConfig } from "@/utils/colorUtils";
import { Icon } from "@/components/custom/index"; // Adjust import path

interface LocalSubMenuProps {
  title: string;
  is_selected: boolean;
  link: string;
  onClick: () => void;
}
interface MenuProps {
  title: string;
  logo: string;
  is_selected: boolean;
  subMenus: { title: string; is_selected: boolean; link: string }[];
  onClick: () => void;
  onSubMenuClick: (subMenuTitle: string, link: string) => void;
  link?: string;
}

const LocalSubMenu: React.FC<LocalSubMenuProps> = ({
  title,
  is_selected,
  link,
  onClick,
}) => {
  const router = useRouter();
  const colorConfig = getColorConfig();

  return (
    <motion.div
      className={`h-[30px] cursor-pointer w-full rounded-md flex items-center pl-4`}
      style={{
        backgroundColor: is_selected ? colorConfig.menuBar.selected : "",
      }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => {
        onClick();
        router.push(link);
      }}
    >
      <span
        className={`ml-2 border-1 items-center w-px h-full mx-[9.5px] relative `}
        style={{
          backgroundColor: colorConfig.border.light,
        }}
      >
        <span
          className={`w-1 h-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${is_selected ? "text-bold" : "text-bold"}`}
          style={{
            backgroundColor: is_selected
              ? colorConfig.border.dark_selected
              : colorConfig.border.dark,
          }}
        />
      </span>
      <span
        className={`ml-1 text-sm ${is_selected ? "font-medium" : "font-normal"}`}
        style={{
          color: is_selected
            ? colorConfig.text.selected
            : colorConfig.text.unselected,
        }}
      >
        {title}
      </span>
    </motion.div>
  );
};

const Menu: React.FC<MenuProps> = ({
  title,
  logo,
  is_selected,
  subMenus,
  onClick,
  onSubMenuClick,
  link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const colorConfig = getColorConfig();

  const handleMenuClick = () => {
    if (subMenus.length > 0) {
      // Toggle submenu visibility
      setIsExpanded(!isExpanded);
      onClick();
    } else if (link) {
      // Navigate if no submenus
      onClick();
      router.push(`/${link}`);
    }
  };

  return (
    <div className="relative">
      <motion.div
        animate={{
          backgroundColor: is_selected
            ? colorConfig.menuBar.selected
            : colorConfig.menuBar.unselected,
        }}
        className={`flex cursor-pointer justify-between items-center w-full max-w-xs md:max-w-sm lg:max-w-md h-8 px-2 py-1 rounded-md ${
          is_selected
            ? `bg-[${colorConfig.menuBar.selected}]`
            : `bg-[${colorConfig.menuBar.unselected}]`
        }`}
        transition={{ duration: 0.1 }}
        onClick={handleMenuClick}
      >
        <div className="flex items-center gap-2">
          <Icon
            className={`transition-opacity ${is_selected ? "opacity-65" : "opacity-40"} w-6 h-6`}
            name={logo}
          />
          <p
            className={`text-sm ${is_selected ? "font-medium" : "font-normal"}`}
            style={{
              color: is_selected
                ? colorConfig.text.selected
                : colorConfig.text.unselected,
            }}
          >
            {title}
          </p>
        </div>
        {subMenus.length > 0 && (
          <Icon
            className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : "rotate-0"} opacity-50 w-4 h-4`}
            name="angle-down"
          />
        )}
      </motion.div>
      <AnimatePresence>
        {isExpanded && subMenus.length > 0 && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="mt-1"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, linear: [0.17, 0.67, 0.83, 0.67] }}
          >
            {subMenus.map((subMenu, index) => (
              <LocalSubMenu
                key={index}
                is_selected={subMenu.is_selected}
                link={`/${link}/${subMenu.link}`} // Combine main menu link with submenu link
                title={subMenu.title}
                onClick={() =>
                  onSubMenuClick(subMenu.title, `${link}/${subMenu.link}`)
                } // Pass full link to onSubMenuClick
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
