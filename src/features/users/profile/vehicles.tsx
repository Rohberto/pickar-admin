import Image from "next/image";

interface VehicleCardProps {
  id: string;
  name: string;
  color: string;
  plateNumber: string;
  imageUrl: string;
}

interface VehiclesSectionProps {
  vehicles: VehicleCardProps[];
}

const VehicleCard = ({
  name,
  plateNumber,
  color,
  imageUrl,
}: VehicleCardProps) => {
  return (
    <div className="relative flex items-center gap-x-4 p-3 border-b border-[#f5f5f5]">
      <div className="relative h-18 w-28 rounded-sm overflow-hidden">
        <Image
          src={imageUrl}
          alt={"document-cover"}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-px">
        <p className="font-medium text-sm tracking-tight text-[#3b3b3b]">
          {name}
        </p>
        <p className="flex items-center gap-x-1">
          <span className="font-medium text-xs tracking-tight text-[#a7a7a7] capitalize">
            {color}
          </span>
          <span className="font-medium text-xs text-[#a7a7a7] leading-none">
            •
          </span>
          <span className="text-[#861313] underline decoration-[#861313] font-medium text-xs tracking-tight">
            {plateNumber}
          </span>
        </p>
      </div>
    </div>
  );
};

const Vehicles = ({ vehicles }: VehiclesSectionProps) => {
  return (
    <div>
      {vehicles?.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          id={vehicle.id}
          name={vehicle.name}
          color={vehicle.color}
          plateNumber={vehicle.plateNumber}
          imageUrl={vehicle.imageUrl}
        />
      ))}
    </div>
  );
};

export default Vehicles;
