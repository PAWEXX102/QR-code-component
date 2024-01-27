import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-White flex flex-col w-max p-4 rounded-3xl items-center text-center gap-5">
      <Image src={'/image-qr-code.png'} width={300} height={300} alt={'QR Code'} className=" rounded-2xl" />
      <h1 className=" text-Darkblue font-black max-w-[18rem] text-2xl">Improve your front-end skills by building projects</h1>
      <p className=" text-Grayishblue max-w-[16rem] font-medium text-[15px] mb-6">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </main>
  );
}
