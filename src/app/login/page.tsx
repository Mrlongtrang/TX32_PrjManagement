import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-center w-full mt-16 ml-16">
      <h1 className="text-2xl font-bold text-gray-900">
        Log in page
      </h1>
      <Link href="/" className="font-bold text-xl text-green-500 hover:text-green-800">Back to Home</Link>
    </div>
  );
}