import Image from "next/image";
import { RiCheckDoubleLine } from "react-icons/ri";
import Profile from "./Profile";
import SubmitMessage from "./SubmitMessage";

export default function Chat() {
  return (
    <div className="w-2/3  bg-[#2f2b3d1f]  border">
      <Profile />

      <div className="p-6  ">
        {/* Receiver message */}
        <div className="flex flex-row-reverse gap-4  items-center">
          <Image
            src="/images/avatar-1.png"
            width={32}
            className="rounded-full"
            height={32}
          ></Image>

          <div className="text-white ">
            <h1 className="px-4 py-2 rounded-tr-none rounded-md mt-5 bg-primary-400 ">
              How can we help? We're here for you!
            </h1>
            <p className="flex justify-end gap-2 items-center text-black/50 text-sm">
              <RiCheckDoubleLine className="text-green-500 font-bold" />
              <span>1:15 PM</span>
            </p>
          </div>
        </div>
        {/* Sender Message */}
        <div className="flex flex-row gap-4 mt-5  items-start">
          <Image
            src="/images/sender-avatar.png"
            width={32}
            className="rounded-full"
            height={32}
          ></Image>

          <div className="text-white max-w-[430px] ">
            <h1 className="px-4 py-2 rounded-tl-none rounded-md  bg-white text-black ">
              Hey John, I am looking for the best admin template. Could you
              please help me to find it out?{" "}
            </h1>
            <div>
              <h1 className="px-4 w-fit py-2 rounded-tl-none rounded-md mt-2 bg-white text-black ">
                It should be MUI v5 compatible.
              </h1>
              <p className="  py-1 text-black/50 text-sm">1:15 PM</p>
            </div>
          </div>
        </div>

        {/* Receiver message */}
        <div className="flex flex-row-reverse gap-4 mt-5  items-start">
          <Image
            src="/images/avatar-1.png"
            width={32}
            className="rounded-full"
            height={32}
          ></Image>

          <div className="text-white flex flex-col justify-end items-end max-w-[430px] ">
            <h1 className="px-4 py-2 rounded-tr-none rounded-md  bg-primary-400 text-white ">
              Absolutely!
            </h1>
            <div>
              <h1 className="px-4 w-fit py-2 rounded-tr-none rounded-md mt-2  bg-primary-400 text-white ">
                This admin template is built with MUI!{" "}
              </h1>
              <p className="flex justify-end gap-2 items-center text-black/50 text-sm">
                <RiCheckDoubleLine className="text-green-500 font-bold" />
                <span>1:16 PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Sender message */}

        <div className="flex flex-row gap-4 mt-5  items-start">
          <Image
            src="/images/sender-avatar.png"
            width={32}
            className="rounded-full"
            height={32}
          ></Image>

          <div className="text-white max-w-[430px] ">
            <h1 className="px-4 py-2 rounded-tl-none rounded-md  bg-white text-black ">
              Looks clean and fresh UI. 😍
            </h1>
            <div>
              <h1 className="px-4 w-fit py-2 rounded-tl-none rounded-md mt-2 bg-white text-black ">
                It's perfect for my next project.
              </h1>
              <h1 className="px-4 w-fit py-2 rounded-tl-none rounded-md mt-2 bg-white text-black ">
                How can I purchase it?
              </h1>
              <p className="  py-1 text-black/50 text-sm">1:17 PM</p>
            </div>
          </div>
        </div>
      </div>

      <SubmitMessage />
    </div>
  );
}
