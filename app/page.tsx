import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Vara Chat</h1>
      <div className="flex flex-col items-center">
        <Image src="/logo.png" alt="Vara Chat" width={200} height={200} />
        <p className="text-lg mt-4">
          A simple chat application built with Next.js.
        </p>
      </div>
    </main>
  );
}
