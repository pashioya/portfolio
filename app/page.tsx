import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-center">Hello Paul</h1>
        <p className="text-xl text-center">
          This is the first page of the Portfolio
        </p>
      </div>
    </main>
  );
}
