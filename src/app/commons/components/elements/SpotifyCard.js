"use client";
import Image from "next/image";
import Link from "next/link";
import { useGetDataSpotify } from "../hooks/useGetDataSpotify";
import SectionHeading from "./SectionHeading";
import SectionSubHeading from "./SectionSubHeading";
import { BiLogoSpotify } from "react-icons/bi";
import { motion } from "framer-motion";
export default function SpotifyCard() {
  const { data, error, isLoading } = useGetDataSpotify();
  if (isLoading || error)
    return (
      <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Spotify" icon={<BiLogoSpotify className= "text-green-500" size={24} />}/>
        <SectionSubHeading>
          <p>Fetch API from Spotify</p>
        </SectionSubHeading>
      <div className="w-full flex bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-4 items-center">
        <div className="relative w-full">
          <div className="flex  items-center gap-8">
            <div className="w-[75px] h-[75px] overflow-hidden rounded-lg sm:w-[100px] sm:h-[100px]  bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
            <div className="flex flex-col items-start gap-1 md:gap-3">
              <div className="w-[178px] rounded h-4 bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
              <div className="w-[187px] rounded h-5 bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
              <div className="w-[143px] rounded h-4 bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
            </div>
          </div>
          <Link
            href={"https://spotify.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 right-0 "
          >
            <BiLogoSpotify className="md:w-8 md:h-8 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
    );
  if (data)
    return (
      <>
        <div className="w-full flex bg-neutral-100 dark:bg-neutral-800 rounded-xl p-4 flex-col ">
          <div className="w-full mb-2 relative">
            <h1 className="text-md md:text-lg font-bold ">
              {data.currentlyPlaying ? "LISTENING TO SPOTIFY" : "LAST PLAYED"}
            </h1>
            <div className="absolute top-0 right-0">
              <BiLogoSpotify className="md:w-8 md:h-8 w-6 h-6" size={40} />
            </div>
          </div>
          <div className="flex gap-4">
            <Image
              src={data?.albumArt.url}
              alt="Album art"
              width={100}
              height={100}
              className=" rounded-sm"
            />
            <div className="flex-col flex gap-1 justify-center">
              <Link
                href={data?.href}
                className=" text-md md:text-lg font-semibold hover:underline "
              >
                {data.name}
              </Link>
              <p>
                by{" "}
                {data.artists.map((artist, i) => (
                  <Link
                    key={i}
                    href={artist.href}
                    className="text-sm font-medium hover:underline "
                  >
                    {artist.name + (i < data.artists.length - 1 ? ", " : "")}
                  </Link>
                ))}
              </p>
              <p>
                on{" "}
                <Link
                  href={data.playlistHref}
                  className="hover:underline text-sm font-medium capitalize"
                >
                  {data.playlistName}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>);}