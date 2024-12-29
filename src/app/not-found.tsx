import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="text-blue-400">Not Found</h2>
      <p>Could not find requested resource</p>
      <div className="flex flex-col justify-center">
        <Link className='font-bold text-green-500' href="/">Return Home</Link>
      </div>
    </div>
  );
}