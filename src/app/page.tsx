import Image from 'next/image'
import IconCard from '@/components/IconCard'
import ProjectCard from '@/components/ProjectCard'
import Portrait from '@/public/imgs/portrait.jpg'
import BarnesWelding from '@/public/imgs/previews/BarnesWelding.png'
import BarnesSpecialty from '@/public/imgs/previews/BarnesSpecialty.png'
import TapsCO2 from '@/public/imgs/previews/TapsCO2.png'

export default function Home() {
  return (
    <main className="container mx-auto max-w-7xl flex-grow px-6">
      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl">Breanna Rayburn</h1>
          <h3 className="text-4xl">Front-End Web Developer</h3>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center">
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
        <div className="hidden justify-center md:flex">
          <Image
            src={Portrait}
            alt="Self Portrait"
            style={{ width: '400px' }}
          />
        </div>
      </section>
      <section className="mt-24 flex flex-col items-center justify-center">
        <h2 className="mb-12 text-center text-6xl">Professional Work</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ProjectCard
            href="https://barnesweldingsupply.com"
            src={BarnesWelding}
            name="Barnes Welding Supply"
          />
          <ProjectCard
            href="https://barnesspecialtygases.com"
            src={BarnesSpecialty}
            name="Barnes Specialty Gases"
          />
          <ProjectCard
            href="https://tapsco2.com"
            src={TapsCO2}
            name="TapsCO2"
          />
        </div>
      </section>
      <section className="mt-24 flex flex-col items-center justify-center">
        <h2 className="text-center text-6xl">Let&apos;s Connect!</h2>
        <p className="text-center">
          I&apos;m always eager to connect with fellow developers, creators, and
          potential collaborators! Whether you have an exciting project in mind,
          want to discuss the latest trends in web development, or share
          insights, I&apos;d love to hear from you. Let&apos;s build a network
          where ideas flow, and creativity thrives. Feel free to reach out
          through the provided channels below. Looking forward to connecting
          with you!
        </p>
        <div className="mt-4 grid grid-cols-2">
          <a
            href="https://www.linkedin.com/in/breanna-rayburn/"
            target="_blank"
          >
            <IconCard src="/imgs/icons/linkedin.svg" alt="Linkedin" />
          </a>
          <a href="https://github.com/breanna-rayburn" target="_blank">
            <IconCard src="/imgs/icons/github.svg" alt="GitHub" />
          </a>
        </div>
      </section>
    </main>
  )
}
