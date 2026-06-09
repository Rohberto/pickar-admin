import { SaveIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

interface KycCardProps {
  id: string;
  name: string;
  status: "pending" | "verified" | "rejected";
  imageUrl: string;
}

interface KycDocumentsProps {
  kycDocuments: KycCardProps[];
}

const KycCard = ({ name, status, imageUrl }: KycCardProps) => {
  return (
    <div className="relative flex items-center gap-x-4 p-3 border-b border-[#f5f5f5]">
      <div className="relative h-14 w-14 rounded-sm overflow-hidden">
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
            {status}
          </span>
          <span className="font-medium text-xs text-[#a7a7a7] leading-none">
            •
          </span>
          <Link
            href=""
            className="text-[#861313] underline decoration-[#861313] font-medium text-xs tracking-tight"
          >
            View Document
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer">
        <SaveIcon />
        <span className="font-normal text-xs tracking-tight text-[#3c3b3b]">
          Save
        </span>
      </div>
    </div>
  );
};

const KycDocuments = ({ kycDocuments }: KycDocumentsProps) => {
  return (
    <div>
      {kycDocuments?.map((doc) => (
        <KycCard
          key={doc.id}
          id={doc.id}
          name={doc.name}
          status={doc.status}
          imageUrl={doc.imageUrl}
        />
      ))}
    </div>
  );
};

export default KycDocuments;
