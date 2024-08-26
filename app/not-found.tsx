import Image from "next/image";
import Link from "next/link";
import planet from "@/public/planet.svg";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image src={planet} alt="Planet illustration" width={300} height={300} />
      <h1 className="text-6xl font-bold mt-8">404</h1>
      <p className="text-2xl mt-4">Página no encontrada</p>
      <Link
        href="/"
        className="mt-8 px-4 py-2 bg- text-black rounded-xl hover:bg-black hover:text-white border-black border-4 font-bold"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default Custom404;
