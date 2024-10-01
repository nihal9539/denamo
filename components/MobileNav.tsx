import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {

  return (
    <div className="hidden max-lg:flex h-[10vh] top-0 left-0 z-50 fixed bg-white w-full items-center justify-between p-3 px-10 shadow-sm">
      <h1 className="font-bold text-3xl">
      <Link href={"/"}><img src="/fafa-logo.png" width={100}/></Link>
      </h1>

      <div className="z-[999]">
      <Sheet  >
        <SheetTrigger >
          <AlignJustify size={35} strokeWidth={3} />
        </SheetTrigger>
        <SheetContent className="pt-28 flex flex-col items-start">
          <SheetHeader>
            <div className="flex flex-col gap-5 ">
              <SheetClose asChild>
                <Link
                  className="font-bold  text-start text-lg uppercase"
                  href={"/"}
                >
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-bold  text-start text-lg uppercase"
                  href={"/shop"}
                >
                  shop
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-bold  text-start text-lg uppercase"
                  href={"/cart"}
                >
                  Cart
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-bold  text-start text-lg uppercase"
                  href={"/contact"}
                >
                  Contact
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-bold  text-start text-lg uppercase"
                  href={"/about"}
                >
                  About
                </Link>
              </SheetClose>
             
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
