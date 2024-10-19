import Image from "next/image";

export default function SidebarItem({ user, activeUser,setActiveUser }) {

  return (
    <li onClick={() => setActiveUser(user.id)}
      className={`flex justify-between p-2 rounded-md cursor-pointer ${
        activeUser === user.id ? "bg-primary-400 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <Image
            src={user.imageUrl}
            alt="chat-1"
            width={40}
            height={40}
            className="rounded-full"
          />

          <div className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full border-[2px] border-white" />
        </div>

        <div>
          <h3 className="text-[15px] leading-[20px]">{user.name}</h3>
          <span
            className="text-[13px]
                            "
          >
            {user.post}
          </span>
        </div>
      </div>
      <div className="text-[13px] whitespace-nowrap">{user.date}</div>
    </li>
  );
}
