import Link from "next/link";

export default function Settings() {
  return (
    <div className="flex flex-col justify-center w-fit">
      <h1 className="text-2xl font-bold text-gray-900">
        Settings page
      </h1>
      <Link href="/" className="font-bold text-xl text-green-500 hover:text-green-800">Back to Home</Link>
    </div>
  );
}