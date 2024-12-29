import Link from "next/link"

export default function Performances() {
  return (
    <div className="w-full mt-16 ml-16 flex flex-col justify-center">
      <h1 className="text-2xl font-bold text-green-400">
        Navigations
      </h1>
      <Link href="projects" className="font-bold text-orange-600 hover:text-pink-400">Projects</Link>
      <Link href="tasks" className="font-bold text-orange-600 hover:text-pink-400">Tasks</Link>
      <Link href="workLogs" className="font-bold text-orange-600 hover:text-pink-400">Work Logs</Link>
      <Link href="performances" className="font-bold text-orange-600 hover:text-pink-400">Performances</Link>
      <Link href="settings" className="font-bold text-orange-600 hover:text-pink-400">Settings</Link>
      <Link href="login" className="font-bold text-orange-600 hover:text-pink-400">Log in</Link>
    </div>
  )
}
