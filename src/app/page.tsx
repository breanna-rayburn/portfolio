import Image from 'next/image'
import IconCard from '@/components/IconCard'
import Portrait from '@/public/imgs/portrait.jpg'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl flex-grow px-6">
      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl">Breanna Rayburn</h1>
          <h3 className="text-4xl">Front-End Web Developer</h3>
        </div>
      </section>
      <section className="grid grid-cols-1 items-center md:grid-cols-2">
        <div>
          <h2 className="text-6xl">Crafting Experiences</h2>
          <p>
            I&apos;m passionate about creating impactful digital experiences
            with an emphasis on responsiveness and performance. Beyond front-end
            development, I&apos;m on an exciting journey toward becoming a
            full-stack developer.
          </p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4">
            <IconCard src="/imgs/icons/javascript.svg" alt="Javascript" />
            <IconCard src="/imgs/icons/typescript.svg" alt="TypeScript" />
            <IconCard src="/imgs/icons/react.svg" alt="React" />
            <IconCard src="/imgs/icons/nextjs.svg" alt="Next.js" />
            <IconCard src="/imgs/icons/threejs.svg" alt="Three.js" />
            <IconCard src="/imgs/icons/tailwindcss.svg" alt="Tailwindcss" />
            <IconCard src="/imgs/icons/postgresql.svg" alt="PostgreSQL" />
            <IconCard src="/imgs/icons/graphql.svg" alt="GraphQL" />
          </div>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <Image
            src={Portrait}
            alt="Self Portrait"
            style={{ width: '400px' }}
          />
        </div>
      </section>
      <section className="mt-24 flex items-center justify-center">
        <h2 className="text-center text-6xl">Professional Projects</h2>
        {/* <ProjectCard
          href="https://barnesweldingsupply.com"
          name="Barnes Welding Supply"
        /> */}
      </section>
      <section className="mt-24 flex items-center justify-center">
        <h2 className="text-center text-6xl">Personal Projects</h2>
      </section>
      <section className="mt-24 flex items-center justify-center">
        <h2 className="text-center text-6xl">Lets Connect!</h2>
      </section>
    </main>
  )
}
