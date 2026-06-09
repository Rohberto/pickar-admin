import Image from "next/image";

interface BankCardProps {
  id: string;
  name: string;
  imageUrl: string;
  bankName: string;
  accountNumber: string;
}

interface BankSectionProps {
  bankAccounts: BankCardProps[];
}

const BankCard = ({
  name,
  bankName,
  accountNumber,
  imageUrl,
}: BankCardProps) => {
  return (
    <div className="relative flex items-center gap-x-4 p-3 border-b border-[#f5f5f5]">
      <div className="relative h-14 w-14 rounded-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={"bank-cover"}
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
            {bankName}
          </span>
          <span className="font-medium text-xs text-[#a7a7a7] leading-none">
            -
          </span>
          <span className="font-medium text-xs tracking-tight text-[#a7a7a7] capitalize">
            {accountNumber}
          </span>
        </p>
      </div>
    </div>
  );
};

const BankAccounts = ({ bankAccounts }: BankSectionProps) => {
  return (
    <div>
      {bankAccounts?.map((account) => (
        <BankCard
          key={account.id}
          id={account.id}
          name={account.name}
          accountNumber={account.accountNumber}
          bankName={account.bankName}
          imageUrl={account.imageUrl}
        />
      ))}
    </div>
  );
};

export default BankAccounts;
