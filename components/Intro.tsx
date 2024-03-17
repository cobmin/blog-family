import Image from 'next/image'

const Intro = () => {
  return (
    <section className="mb-6 mt-6 flex flex-col items-center text-center">
      <div className="w-full max-w-4xl">
        {' '}
        <Image
          src="/static/images/twitter-card.png"
          width={1000} 
          height={500}
          className="rounded-md"
          alt="A welcoming image representing the theme of the blog"
        />
      </div>
      <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-bold md:text-4xl">
        Welcome to the Huber's Household
      </h1>
      <p className="mt-4 text-xl">
        Where our five cats lead you through tales of whiskers, wine, and whimsy. In our garden of
        everyday wonders, every purr and playful leap is a story. From the black cat's curious
        adventures to the dark brown's peaceful slumbers among the blooms, we capture the essence of
        life with our feline friends. Join us for a journey filled with laughter, tranquility, and
        the occasional clink of glasses. Discover the joy of living life one paw at a time.
      </p>
    </section>
  )
}

export default Intro
