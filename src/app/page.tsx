import Link from "next/link"

export default function Home() {
  return <div>
    <h1>Take me to Photos section</h1>
    <Link href='/photos-feed'>Photos Feed</Link>
  </div>
}