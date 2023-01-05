import { create } from "@storybook/theming";
import logoUrl from "../public/mayday.png";

export default create({
  brandImage: process.env.NODE_ENV === "production" ? logoUrl : "/mayday.png",
  brandTitle: "MAYDAY",
});
