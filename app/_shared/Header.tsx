"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
function Header() {
  const {user} = useUser();
  return (
    <div className="flex items-center justify-between p-4 px-5 md:px-10">
      <div className="flex items-center gap-3">
        <Image
          src="/UiUx_logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="object-contain hover:scale-105 transition-transform cursor-pointer"
        />
        <h2 className="text-2xl font-bold tracking-tighter">
          <span className="text-primary">AI</span> UX Studio
        </h2>
      </div>

      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600">
        <li className="cursor-pointer hover:text-primary transition-colors">
          Home
        </li>
        <li className="cursor-pointer hover:text-primary transition-colors">
          Pricing
        </li>
      </ul>
  {!user?
        <Button className="font-semibold shadow-md">Get Started</Button>:
<UserButton/>
  }
  
      </div>
  );
}

export default Header;
