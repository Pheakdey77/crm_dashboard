export type SubMenuItem = {
  title: string;
  link: string;
  is_selected: boolean;
};

export type MenuItem = {
  title: string;
  logo: string;
  link: string;
  is_selected: boolean;
  subMenus: SubMenuItem[];
};

export type colorConfig = {
  menuBar: { selected: string; unselected: string; hover: string };
  text: { selected: string; unselected: string; color: string };
  border: { light: string; dark: string; dark_selected: string };
};

export type SiteConfig = {
  name: string;
  description: string;
  menus: MenuItem[];
  colorConfig: colorConfig;
};
// site.ts

export const siteConfig: SiteConfig = {
  name: "Next",
  description: "Make beautiful websites regardless of your design experience.",
  menus: [
    {
      title: "Home",
      logo: "home",
      link: "home",
      is_selected: true,
      subMenus: [],
    },
    {
      title: "Products",
      logo: "archive",
      is_selected: false,
      link: "products",
      subMenus: [
        { title: "List", is_selected: false, link: "list" },
        { title: "Add", is_selected: false, link: "add" },
      ],
    },
    {
      title: "Purchases",
      logo: "truck",
      link: "purchases",
      is_selected: false,
      subMenus: [],
    },
    {
      title: "Sales",
      logo: "shopping-bag",
      link: "sales",
      is_selected: false,
      subMenus: [],
    },
    {
      title: "Reports",
      logo: "chart-mix",
      link: "reports",
      is_selected: false,
      subMenus: [],
    },
    {
      title: "Settings",
      logo: "adjust",
      link: "settings",
      is_selected: false,
      subMenus: [
        { title: "General", is_selected: false, link: "general" },
        { title: "Appearance", is_selected: false, link: "appearance" },
        { title: "Invoice", is_selected: false, link: "invoice" },
      ],
    },
  ],
  colorConfig: {
    menuBar: {
      selected: "rgba(200, 200, 200, .2)", // Custom light gray
      unselected: "rgba(255, 255, 255, 0)", // Transparent
      hover: "rgba(200, 200, 200, 0.5)", // Custom light gray with opacity
    },
    text: {
      selected: "rgba(50, 50, 50, 0.9)", // Custom darker text
      unselected: "rgba(100, 100, 100, 0.7)", // Custom lighter text
      color: "rgb(31 41 55)",
    },
    border: {
      light: "rgba(180, 180, 180, 1)", // Custom light gray
      dark: "rgba(70, 70, 70, .2)", // Custom dark gray
      dark_selected: "rgba(70, 70, 70, .8)",
    },
  },
};
