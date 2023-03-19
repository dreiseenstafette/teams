import Image from 'next/image';

const images = [
  '/fotos/slider/16.jpg',
  '/fotos/slider/2.jpg',
  '/fotos/slider/35.jpg',
  '/fotos/slider/23.jpg',
  '/fotos/slider/24.jpg',
  '/fotos/slider/25.jpg',
  '/fotos/slider/29.jpg',
  '/fotos/slider/30.jpg',
  '/fotos/slider/28.jpg',
  '/fotos/slider/31.jpg',
  '/fotos/slider/32.jpg',
  '/fotos/slider/27.jpg',
  '/fotos/slider/8.jpg',
  '/fotos/slider/9.jpg',
  '/fotos/slider/17.jpg',
];

export default function RandomImage() {

  const rand = (): string => {
    return images[Math.floor(Math.random() * images.length)];
  }

  return (
    <div className="relative w-full h-60 sm:h-80 md:h-[30rem]">
      <Image
        objectFit="cover"
        objectPosition={"center"}
        layout={'fill'}
        className="image"
        src={rand()}
        alt="People working on laptops"
      />
    </div>
  )
}
