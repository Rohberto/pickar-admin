import { Tabs, TabsContent } from "@/components/ui/tabs";
import UserSummary from "./summary";
import {
  StyledTabsList,
  StyledTabsTrigger,
} from "@/components/shared/tabs-components";
import PersonalInfo from "./personal-info";
import KycDocuments from "./kyc-documents";
import BankAccounts from "./bank-accounts";
import Vehicles from "./vehicles";
import { Button } from "@/components/ui/button";

const tabs = [
  { label: "Personal Information", value: "personal-information" },
  { label: "KYC Documents", value: "kyc-documents" },
  { label: "Bank Accounts", value: "bank-accounts" },
  { label: "Vehicles", value: "vehicles" },
];

const personalInfo = {
  nationality: "Nigerian",
  stateOfOrigin: "Lagos State",
  localGovernment: "Alimosho Local Government",
  residentialAddress: "12, Salawu Abeni Street",
  stateOfResidence: "Lagos State",
  residenceLocalGovernment: "Alimosho Local Government",
  cityYouDriveIn: "Ikeja",
  residenceZipCode: "1000253",
};

interface Document {
  id: string;
  name: string;
  status: "pending" | "verified" | "rejected";
  imageUrl: string;
  // documentUrl: string;
}

const documents: Document[] = [
  {
    id: "1",
    name: "Drivers License",
    status: "verified",
    imageUrl: "https://picsum.photos/200",
    // documentUrl: "",
  },
  {
    id: "2",
    name: "Government-Issued ID",
    status: "verified",
    imageUrl: "https://picsum.photos/200",
    // documentUrl: "",
  },
  {
    id: "3",
    name: "Vehicle Insurance",
    status: "verified",
    imageUrl: "https://picsum.photos/200",
    // documentUrl: "",
  },
  {
    id: "4",
    name: "Vehicle Permit",
    status: "verified",
    imageUrl: "https://picsum.photos/200",
    // documentUrl: "",
  },
  {
    id: "5",
    name: "Vehicle Registration Certificate",
    status: "verified",
    imageUrl: "https://picsum.photos/200",
    // documentUrl: "",
  },
];

const bankAccounts = [
  {
    id: "1",
    name: "John Doe",
    bankName: "First Bank",
    accountNumber: "1234567890",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: "2",
    name: "John Doe",
    bankName: "Sterling Bank",
    accountNumber: "1234567890",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: "3",
    name: "John Doe",
    bankName: "GTB Bank",
    accountNumber: "1234567890",
    imageUrl: "https://picsum.photos/200",
  },
];

const vehicles = [
  {
    id: "1",
    name: "Benz GLE 350",
    color: "Silver",
    plateNumber: "APP7890",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: "2",
    name: "Bugatti Chiron",
    color: "Black",
    plateNumber: "EKY1234",
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: "3",
    name: "Porsche Cayenne",
    color: "Red",
    plateNumber: "AGG4567",
    imageUrl: "https://picsum.photos/200",
  },
];

const UserProfile = () => {
  return (
    <div>
      <UserSummary
        avatarUrl={"https://picsum.photos/200"}
        name={"John Doe"}
        phone={"+1 234 567 890"}
        email={"userprofile@mail.com"}
        totalTrips={120}
        averageRating={4.5}
        yearsOfService={3}
      />

      <div className="py-3">
        <Tabs defaultValue="personal-information" className="w-full gap-y-4">
          <StyledTabsList>
            {tabs.map((tab, index) => (
              <StyledTabsTrigger key={index} value={tab.value}>
                {tab.label}
              </StyledTabsTrigger>
            ))}
          </StyledTabsList>
          <TabsContent value="personal-information">
            <PersonalInfo
              nationality={personalInfo.nationality}
              state_of_origin={personalInfo.stateOfOrigin}
              state_of_residence={personalInfo.stateOfResidence}
              residence_local_government={personalInfo.residenceLocalGovernment}
              residence_zip_code={personalInfo.residenceZipCode}
              residential_address={personalInfo.residentialAddress}
              city_you_drive_in={personalInfo.cityYouDriveIn}
              local_government={personalInfo.localGovernment}
            />
          </TabsContent>
          <TabsContent value="kyc-documents">
            <KycDocuments kycDocuments={documents} />
          </TabsContent>
          <TabsContent value="bank-accounts">
            <BankAccounts bankAccounts={bankAccounts} />
          </TabsContent>
          <TabsContent value="vehicles">
            <Vehicles vehicles={vehicles} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-3 w-full gap-x-2">
        <Button
          variant="outline"
          className="font-medium text-sm tracking-wide text-[#00b227] bg-[#d6ffdf] px-3 py-4"
        >
          Approve
        </Button>
        <Button
          variant="outline"
          className="font-medium text-sm tracking-wide text-[#b27a00] bg-[#fff2d6] px-3 py-4"
        >
          Pending
        </Button>
        <Button
          variant="outline"
          className="font-medium text-sm tracking-wide text-[#7a0e1f] bg-[#ffebdb] px-3 py-4"
        >
          Reject
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
