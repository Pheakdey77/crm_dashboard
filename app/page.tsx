import { DateRangePicker } from "@nextui-org/date-picker";
export default function Home() {
  return (
    <>
      <div className={"  "}>
        <div className="flex w-full items-center py-1 flex-wrap md:flex-nowrap gap-4 flex justify-end border-b-1">
          <div className={"pr-10"}>
            <DateRangePicker
              color="primary"
              pageBehavior="single"
              // eslint-disable-next-line react/jsx-sort-props
              className="h-[40px] bg-white text-sm"
              // label="Date"
              visibleMonths={2}
            />
          </div>
        </div>
      </div>
    </>
  );
}
