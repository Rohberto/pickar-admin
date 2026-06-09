import { Spinner } from "../ui/spinner";

export const DialogLoader = () => {
  return (
    <div
      className="absolute inset-0 z-9 flex items-center justify-center ml-[15.825rem]"
      data-testid="dialog-loader"
    >
      <Spinner className="size-8 text-[#861313]" />
    </div>
  );
};
