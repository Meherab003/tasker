import { PiCactusDuotone } from "react-icons/pi";

const NoTaskFound = () => {
  return (
    <div className="w-full lg:min-w-[1050px] flex flex-col items-center justify-center gap-3">
      <h1 className="text-5xl font-semibold">No Task Added</h1>
      <PiCactusDuotone className="text-9xl text-blue-300" />
      <p className="text-2xl">Please Add One</p>
    </div>
  );
};

export default NoTaskFound;
