import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface UserCardProps {
  name: string;
  content: string;
  avatarUrl: string;
}

interface UserComponentProps {
  users: UserCardProps[];
  className?: string;
}

const UserCard = ({ name, content, avatarUrl }: UserCardProps) => {
  return (
    <div className="flex gap-x-6">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-[#d9d9d9] border-4 border-[#f5f5f5]">
        <Image
          src={avatarUrl}
          alt={`${name}'s avatar`}
          width={48}
          height={48}
          priority
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="font-bold text-base text-[#3c3b3b]">{name}</p>
        <span className="font-normal text-xs text-[#969595]">{content}</span>
      </div>
    </div>
  );
};

const Users = ({ users, className = "" }: UserComponentProps) => {
  return (
    <div
      className={`border border-[#f5f5f5] flex flex-col gap-y-7 rounded-[20px] px-3 py-5 ${className}`}
    >
      <div className="flex items-center justify-between gap-1">
        <span className="font-medium text-lg font-sans text-[#3c3b3b]">
          Users
        </span>
        {users?.length > 0 && (
          <span className="flex font-normal gap-1 items-center text-base whitespace-nowrap font-sans text-[#861313]">
            See all <ChevronRight size={16} />
          </span>
        )}
      </div>
      {users?.length > 0 ? (
        users?.map((user, index) => {
          const { name, content, avatarUrl } = user;
          return (
            <UserCard
              key={index}
              name={name}
              content={content}
              avatarUrl={avatarUrl}
            />
          );
        })
      ) : (
        <p className="text-center text-sm text-[#969595]">No recent users</p>
      )}
    </div>
  );
};

export default Users;
