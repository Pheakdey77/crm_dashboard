import { colorConfig } from "./site";
export const defaultColorConfig: colorConfig = {
  menuBar: {
    selected: "rgba(200, 200, 200, .2)", // Custom light gray
    unselected: "rgba(255, 255, 255, 0)", // Transparent
    hover: "rgba(200, 200, 200, 0.5)", // Custom light gray with opacity
  },
  text: {
    selected: "rgba(50, 50, 50, 0.9)", // Custom darker text
    unselected: "rgba(100, 100, 100, 0.7)", // Custom lighter text
  },
  border: {
    light: "rgba(180, 180, 180, 1)", // Custom light gray
    dark: "rgba(70, 70, 70, .2)", // Custom dark gray
    dark_selected: "rgba(70, 70, 70, .8)",
  },
};
