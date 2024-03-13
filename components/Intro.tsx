import Image from 'next/image'

const Intro = () => {
  return (
    <section className="mb-6 mt-6 flex flex-col items-center text-center">
      <div className="w-full max-w-4xl">
        {' '}
        {/* Adjusted container width for better control */}
        <Image
          src="/static/images/twitter-card.png"
          layout="responsive"
          width={1000} // Adjust these values to match the aspect ratio of your actual image
          height={500} // For example, for a 2:1 aspect ratio, you can use 1000x500
          className="rounded-md"
          alt="A welcoming image representing the theme of the blog"
        />
      </div>
      <h1 className="mx-auto mt-5 max-w-2xl text-3xl font-bold md:text-4xl">
        Sharing insights and experiences
      </h1>
      <p className="mt-4 text-xl">
        Hoping to help others by sharing my interests. Check out my latest stuff below 👇
      </p>
    </section>
  )
}

export default Intro
