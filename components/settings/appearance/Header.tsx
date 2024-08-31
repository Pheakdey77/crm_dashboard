"use client";
import { getColorConfig } from "@/utils/colorUtils";
import { BreadCrumbsComponent } from "@/components/custom/";
const color = getColorConfig();

export default function Header() {
  const breadcrumbs = ["Settings", "Appearance"];

  return (
    <div>
      <BreadCrumbsComponent items={breadcrumbs} />
    </div>
  );
}
