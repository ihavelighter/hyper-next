import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-200">
      <h1 className="text-4xl font-bold">Welcome to My First Next.js App!</h1>
      <p className="text-2xl">
        <span className="font-mono">React Next.js</span>
        学习搭建项目，并且使用vercel进行项目的发布。同时，发布之后，你可以通过发布后的地址随时link到你的项目!
      </p>
      <p className="text-2xl">
        <span className="font-mono">shadcn/ui</span>
        设计精美的组件，您可以将其复制并粘贴到你的应用中，开源且可定制。
      </p>
      <Image src="/example.jpg" alt="Example Image" width={300} height={200} />
      <p className="text-xl">
        This is just the beginning of something amazing.
      </p>
      <Link href="/about" className="text-blue-500 hover:underline">
        <Button>About Us</Button>
      </Link>
    </main>
  )
}
