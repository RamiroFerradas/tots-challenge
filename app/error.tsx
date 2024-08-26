"use client";
import Image from "next/image";
import planet from "@/public/planet.svg";
import React from "react";

type ErrorBoundaryProps = {
  error: Error;
};

const ErrorBoundary = ({ error }: ErrorBoundaryProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100  gap-4">
      <Image src={planet} alt="Planet illustration" width={300} height={300} />

      <h1 className="text-3xl font-bold text-red-600">¡Algo salió mal!</h1>
      <p className="text-lg mt-4">
        No pudimos cargar la información de los países.
      </p>
      <p className="text-xs mt-2 text-red-500">{error.message}</p>
      <button
        onClick={() => location.reload()}
        className="mt-8 px-4 py-2 bg- text-black rounded-xl hover:bg-black hover:text-white border-black border-4 font-bold"
      >
        Recaragar
      </button>
    </div>
  );
};

export default ErrorBoundary;
