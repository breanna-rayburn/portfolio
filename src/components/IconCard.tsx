import Image from 'next/image'

export default function IconCard({ src, alt }: any) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={src} alt={alt + ' Icon'} width={75} height={75} />
      <p>{alt}</p>
    </div>
  )
}
