interface PersonalInfoProps {
  nationality: string;
  state_of_origin: string;
  local_government: string;
  residential_address: string;
  state_of_residence: string;
  residence_local_government: string;
  city_you_drive_in: string;
  residence_zip_code: string;
}

const InfoCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="p-4 border border-[#f5f5f5] flex flex-col gap-y-1 rounded-lg">
      <span className="font-medium text-sm tracking-tight text-[#a7a7a7]">
        {title}
      </span>
      <span className="font-normal text-lg tracking-tight text-[#3c3b3b]">
        {value}
      </span>
    </div>
  );
};

const PersonalInfo = ({
  nationality,
  state_of_origin,
  state_of_residence,
  local_government,
  residence_local_government,
  residence_zip_code,
  residential_address,
  city_you_drive_in,
}: PersonalInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
      <InfoCard title="Nationality" value={nationality} />
      <InfoCard title="State of Origin" value={state_of_origin} />
      <InfoCard title="Local Government" value={local_government} />
      <InfoCard title="Residential Address" value={residential_address} />
      <InfoCard title="State of Residence" value={state_of_residence} />
      <InfoCard
        title="Residence Local Government"
        value={residence_local_government}
      />
      <InfoCard title="City You Drive In" value={city_you_drive_in} />
      <InfoCard title="Residence Zip Code" value={residence_zip_code} />
    </div>
  );
};

export default PersonalInfo;
