"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import MerchOne from "@/public/merch-1.png"
import MerchOneBack from "@/public/merch-1-back.png"
import MerchOneFront from "@/public/merch-1-front.png"
import MerchTwo from "@/public/merch-2.png"
import MerchTwoFront from "@/public/merch-2-front.png"
import MerchTwoBack from "@/public/merch-2-back.png"
import VillaKayu from "@/public/villa-kayu.png"
import Qr from "@/public/qr.png"
import Iframe from "react-iframe";
import Countdown from "react-countdown";
import { useEffect, useState } from "react";

export default function Home() {
  const getTimeComponents = (time: any) => {
    const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');
    return { days, hours, minutes, seconds };
  };
  const targetDate = new Date("2025-02-22T00:00:00");
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = Date.now();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setIsEventStarted(true);
        setTimeLeft(0);
      } else {
        setTimeLeft(distance);
      }
    };

    updateTimeLeft(); // Set initial time left
    const timer = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]); // Only run when targetDate changes

  // Ensure consistent initial state
  const { days, hours, minutes, seconds } = timeLeft !== null ? getTimeComponents(timeLeft) : { days: '00', hours: '00', minutes: '00', seconds: '00' };
  return (
    <div className="bg-white max-w-[440px] min-h-screen mx-auto snap-y">
      <section
        className="w-full flex overflow-x-hidden flex-col h-screen bg-cover bg-center max-w-full"
        style={{ backgroundImage: `url("/hero-2.png")` }}
      >
        <h1 className="mt-8">
          <Image src={"/mk22.png"} width={200} height={200} alt="MK 22" />
        </h1>
        <div className="-rotate-[10deg] scale-[1.15] -mt-10">
          <Image src={"/line.png"} width={600} height={600} alt="MK 22" />
        </div>
        <div className="flex-1 p-6 flex flex-col justify-end">
          <div className="flex justify-between">
            <div>
              <p>INFORMATIKA</p>
              <p className="ml-2">INFORMATIKA</p>
              <p className="ml-4">INFORMATIKA</p>
            </div>
            <div className="animate-float">
              <div className="bg-white max-w-32 text-black text-xs backdrop-blur-sm p-2 rounded-lg mb-2 absolute w-max -top-14 -left-8">
                <div className="absolute left-[6] -bottom-[10] text-white -rotate-[20deg]">
                  ▼
                </div>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Youre invited to our event🚀✨",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Scroll down to see the details",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
              <Image
                className="cursor-pointer"
                src={"/logos.png"}
                width={80}
                height={80}
                alt="logo MK 22"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-no-repeat h-screen relative flex flex-col"
        style={{ backgroundImage: `url("/star.png")` }}
      >
        <Image
          className="absolute right-0"
          src={"/tree.png"}
          width={400}
          height={400}
          alt="Pohon Angkatan"
        />
        <div className="p-6 space-y-4">
          <h1 className="text-red-500 text-5xl uppercase font-bebasNeue ">
            Galaksi
          </h1>
          <p className="max-w-60 text-4xl uppercase font-bebasNeue ">
            Gathering Lintas Angkatan Satu Informatika
          </p>
        </div>
        <div className="relative">
          <Image
            className="animate-float"
            src={"/plane.png"}
            width={250}
            height={250}
            alt="Plane"
          />
          <Image
            className="absolute -bottom-6 left-36 animate-pulse"
            src={"/plane-signal.png"}
            width={100}
            height={100}
            alt="Plane signal"
          />
        </div>
        <div className="flex-1 flex items-end justify-center pb-6 text-center p-6 text-sm">
          <p>-6.43057747202327, 106.75498172883583</p>
        </div>
      </section>
      <section className="bg-white py-12 px-4">
          {/* <h1 className="text-black text-center my-8 font-bold uppercase text-2xl">Merchandise</h1> */}
          <h2 className="font-heading mx-auto font-bold text-center text-2xl text-black leading-tight uppercase">
              Merchandise
              <div className="flex gap-2 mt-2 w-full justify-center">
                  <span className="inline-block w-[80px] h-1 bg-red-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 bg-red-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
              </div>
          </h2>
          <div>
            <div>
              <h3 className="font-bold text-black w-max mx-auto text-center mt-10">DESIGN 1</h3>
              <div className="flex flex-col gap-4 items-center">
                <Image 
                  src={MerchOne}
                  width={1000}
                  height={1000}
                  alt="Baju Merch 1"
                  placeholder="blur"
                />
                <Image 
                  src={MerchOneFront}
                  width={200}
                  height={200}
                  alt="Baju Merch 1"
                  placeholder="blur"
                />
                <Image 
                  src={MerchOneBack}
                  width={400}
                  height={400}
                  alt="Baju Merch 1"
                  placeholder="blur"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-black w-max mx-auto text-center mt-20">DESIGN 2</h3>
              <div className="flex flex-col gap-4 items-center">
                <Image 
                  src={MerchTwo}
                  width={1000}
                  height={1000}
                  alt="Baju Merch 1"
                  placeholder="blur"
                />
                <Image 
                  src={MerchTwoFront}
                  width={200}
                  height={200}
                  alt="Baju Merch 1"
                  placeholder="blur"
                  />
                <Image 
                  src={MerchTwoBack}
                  width={400}
                  height={400}
                  alt="Baju Merch 1"
                  placeholder="blur"
                />
              </div>
              <div className="flex justify-center pt-10">
                <a className="relative" href="https://wa.me/6289631645395?text=Halo, Saya Minat Dengan Merch nya">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                    <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-red-500 hover:text-white">Beli Sekarang</span>
                </a>
                {/* <a  className="bg-red-600 text-sm text-white rounded-lg mx-auto px-4 py-3 font-medium">BELI SEKARANG</a> */}
              </div>
            </div>
          </div>
      </section>
      <section className="bg-[#f9f9f9] py-12 min-h-screen">
        <h2 className="font-heading mx-auto font-bold text-center text-2xl text-black leading-tight uppercase">
              Lokasi
              <div className="flex gap-2 mt-2 w-full justify-center">
                  <span className="inline-block w-[80px] h-1 bg-red-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 bg-red-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
              </div>
          </h2>
          <div className="flex flex-col items-center mb-4">
              <Image 
                src={VillaKayu}
                width={500}
                height={500}
                alt="Baju Merch 1"
                placeholder="blur"
              />
              <div className="text-black">
                <h3 className="text-center font-bold -mt-4">VILLA KAYU PANGGULAN📍</h3>
                <p className="text-center font-medium text-sm px-10">
                  Jl. Subulussalam I, Pengasinan, Sawangan, Depok City, West Java 16518
                </p>
                <div className="max-w-[90%] mx-auto my-4">
                  <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7144147606764!2d106.75239607475243!3d-6.430721393560382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e85bb86b1b9b%3A0xf55335e3bf933cf3!2sVilla%20Kayu%20Panggulan!5e0!3m2!1sid!2sid!4v1736241678332!5m2!1sid!2sid" width="100%" height="450" allowFullScreen loading="lazy"></Iframe>
                </div>
                <p className="text-center font-bold mt-4">SCAN HERE</p>
                <Image 
                  src={Qr}
                  width={150}
                  height={150}
                  alt="Qr Code"
                  placeholder="blur"
                  className="mx-auto mt-2 shadow-2xl"
                />

              </div>
          </div>
      </section>
      <section className="bg-no-repeat h-screen relative flex flex-col justify-center gap-10 px-4"
        style={{ backgroundImage: `url("/star.png")` }}>
          <div className="mx-auto">
              <h3 className="text-center font-bold text-2xl">ACARA AKAN DILAKSANAKAN PADA
              <span className="text-red-500"> 22 FEBRUARI</span> 2025🎉</h3>
          </div>
          <div className="text-center">
          {isEventStarted ? (
            <h3 className="text-red-500 text-2xl">Acara sedang berlangsung!</h3>
          ) : (
            <div>
              <div className="flex justify-center text-4xl font-bold">
                <div>
                  <p>{days}</p>
                  <p className="text-lg font-bold">Hari</p>
                </div>
                <span className="px-4">:</span>
                <div>
                  <p>{hours}</p>
                  <p className="text-lg font-bold">Jam</p>
                </div>
                <span className="px-4">:</span>
                <div>
                  <p>{minutes}</p>
                  <p className="text-lg font-bold">Menit</p>
                </div>
                <span className="px-4">:</span>
                <div>
                  <p>{seconds}</p>
                  <p className="text-lg font-bold">Detik</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-center font-bold text-2xl">
          <h4>SEE YOU :D</h4>
        </div>
      </section>
    </div>
  );
}
