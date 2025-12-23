import Link from "next/link";

export default function Home() {
  return (
      <div className="h-full flex flex-col justify-end p-5 md:p-3">
          <div className="flex flex-col justify-end gap-3 md:gap-1 ">
          <h1 className="font-bold text-2xl md:text-lg">Welcome to PopX</h1>
          <p className="w-[80%] text-lg mb-3 md:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex flex-col gap-2">
            <button className="w-full rounded-sm cursor-pointer p-2 md:text-xs bg-[#6C25FF] text-white">
              <Link href="/signup"> Create Account</Link>{" "}
            </button>
            <button className="w-full rounded-sm p-2 cursor-pointer  md:text-xs  bg-[#CEBAFB]">
              <Link href="/signin"> Already Registered? Login</Link>{" "}
            </button>
          </div>
        </div>
      </div>
  );
}
