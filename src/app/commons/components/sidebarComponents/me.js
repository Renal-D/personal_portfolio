import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Verified from "./../elements/verified";
import Status from "./../elements/Status";
import useHasMounted from "../hooks/useHasMounted";

export default function Me({ activeProps }) {
  const mounted = useHasMounted();

  if (!mounted) return null;

  return (
    <>
      <div className="self-center md:self-auto ">
        <div className=" rounded-lg hidden md:flex relative">
          <Status />
          <div className="dark:brightness-50 relative w-full h-24 overflow-hidden rounded-xl">
            <Image
              src="https://res.cloudinary.com/hevo/image/upload/c_scale,w_648,h_321/f_auto,q_auto/v1685903403/hevo-learn-1/Data-Science-Applications-Data-Science-in-Gaming.jpg?_i=AA"
              width={640}
              height={480}
              alt="bgprofile"
              aspe
              priority
              className="w-full rounded-xl aspect-auto scale-125"
            ></Image>
          </div>
        </div>

        <div
          className={`flex md:flex-col ${
            activeProps ? "flex-col" : "flex-row  items-center"
          } md:justify-center md:items-center gap-2 md:gap-0 transition-all duration-1000 ease-in-out`}
        >
          <motion.div
            className="md:-mt-12 mt-0 shadow-md md:border-2 md:z-10 z-0 md:border-white dark:md:border-dark border-transparent  w-fit rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="rounded-full overflow-hidden ">
              <motion.img
                initial={{ filter: "blur(20px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.5 }}
                src="https://th.bing.com/th/id/OIG.Xjeu.69tpDUelOADpSgL?pid=ImgGn"
                loading="lazy"
                width={90}
                height={90}
                alt="me"
                className={`rounded-full scale-110 aspect-square transition-all duration-300  delay-50 ease-linear md:w-[90px]  md:h-[90px]  ${
                  activeProps ? "w-[80px] h-[80px] " : "h-[40px] w-[40px]"
                } `}
              ></motion.img>
            </div>
          </motion.div>
          <div className="md:mt-4 mt-2 text-xl font-bold flex justify-center items-center gap-2">
            <h1 className="md:text-l text-lg">Renaldi D. Saputra</h1>
            <Verified />
          </div>

          <p className="text-sm text-neutral-700 dark:text-neutral-500 hidden md:flex">
            @renaldii06
          </p>
        </div>
      </div>
    </>
  );
}
