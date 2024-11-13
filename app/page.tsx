import Link from "next/link";

export default function Home() {
  return (
    <div className="border-4 border-red-700 h-screen">
      <h1 className="text-red-700 border text-center p-4 text-xl">TICKETS</h1>
      <div className="border flex items-center justify-center gap-3">
        <a href="/" className="border bg-purple-600 text-white p-2">
          HOME
        </a>
        <Link
          href="/details/id"
          className="border bg-purple-600 text-white p-2"
          passHref
        >
          <a href="/tickets/details/id">TICKET DETAIL</a>
        </Link>
      </div>
    </div>
  );
}
