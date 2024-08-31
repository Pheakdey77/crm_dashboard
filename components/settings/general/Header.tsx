import { BreadCrumbsComponent } from "@/components/custom";
export default function Header() {
  return (
    <>
      <BreadCrumbsComponent items={["Settings", "General"]} />
    </>
  );
}
