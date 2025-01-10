import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="container mx-auto px-4 mb-10 flex justify-center items-center relative mt-20">
      <Image
        src="/logos.png"
        alt="Logos"
        width={1200} // Adjust to the actual width of your image
        height={500} // Adjust to the actual height of your image
        className="w-full max-w-6xl h-auto opacity-100"
        priority // Optional: Ensures the image loads quickly if it's above the fold
      />
    </div>
  );
}
