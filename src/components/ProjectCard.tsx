export default function ProjectCard(href: string, name: string) {
  return (
    <a href={href}>
      <div>{name}</div>
    </a>
  )
}
