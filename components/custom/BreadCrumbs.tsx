"use client";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
interface BreadcrumbProp {
  items: String[];
}
export default function BreadCrumbsComponent({ items }: BreadcrumbProps) {
  return (
    <div className="mx-5 mt-3">
      <Breadcrumbs>
        {items.map((item, index) => (
          <BreadcrumbItem key={index} className="text-medium">
            {item}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
}
