import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My First Next.js App!</h1>
      <Image src="/example.jpg" alt="Example Image" width={300} height={200} />
      <p className="text-xl">
        This is just the beginning of something amazing.
      </p>
      <Link href="/about" className="text-blue-500 hover:underline">
        About Us
      </Link>
    </main>
  )
}
