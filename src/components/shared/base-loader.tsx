import { Spinner } from "../ui/spinner";

export const BaseLoader = () => {
  return (
    <div
      className="my-8 flex items-center justify-center"
      data-testid="generic-loader"
    >
      <Spinner className="size-4 text-[#861313]" />
    </div>
  );
};
