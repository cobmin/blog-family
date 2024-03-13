import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Intro from '../components/Intro'
import Card from '@/components/Card' // Assuming Card is properly exported from '@/components/Card'
import projectsData from '@/data/projectsData'

const MAX_DISPLAY = 6

export default function Home({ posts }) {
  const recentProjects = projectsData.slice(0, 2)
  return (
    <>
      <Intro />
      <h2 className="pb-6 text-center text-3xl font-bold leading-8 tracking-tight">Recent Posts</h2>
      {!posts.length && (
        <div className="my-4 rounded-lg border border-gray-200 p-4 text-center dark:border-gray-700">
          No posts found.
        </div>
      )}

      {/* Featured post with image on the left and title/description on the right */}
      {posts.slice(0, 1).map((post) => {
        const { slug, title, summary, images } = post
        return (
          <div
            key={slug}
            className="mb-4 overflow-hidden rounded-lg border border-gray-200 shadow-lg dark:border-gray-700 md:flex md:h-96"
          >
            <Link href={`/blog/${slug}`}>
              {/* Image container should fill the height */}
              <div className="h-full">
                {/* Image should cover the available space */}
                <img src={images[0]} alt={title} className="h-full w-full object-cover" />
              </div>
            </Link>
            <div className="flex w-full flex-col justify-between p-4">
              <Link href={`/blog/${slug}`}>
                <h2 className="cursor-pointer text-2xl font-bold leading-8 tracking-tight">
                  {title}
                </h2>
              </Link>
              <p className="mb-4">{summary}</p>
              <Link href={`/blog/${slug}`}>
                <span className="cursor-pointer text-primary-500 no-underline hover:text-primary-600">
                  Read more &rarr;
                </span>
              </Link>
            </div>
          </div>
        )
      })}

      {/* Three symmetrical cards */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.slice(1, 4).map((post) => {
          const { slug, date, title, images } = post
          return (
            <Link href={`/blog/${slug}`} key={slug}>
              <div className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 shadow-lg dark:border-gray-700">
                {images && (
                  <div className="h-48 overflow-hidden">
                    <img src={images[0]} alt={title} className="h-full w-full object-cover" />
                  </div>
                )}
                <article className="flex flex-grow flex-col p-4">
                  <h2 className="mb-4 text-xl font-bold leading-8 tracking-tight">{title}</h2>
                  <div className="mt-auto">
                    <time dateTime={date} className="text-gray-500">
                      {formatDate(date, siteMetadata.locale)}
                    </time>
                  </div>
                </article>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Adjusted two posts in a horizontal card layout for small screens */}
      <div className="mb-4 mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {posts.slice(4, 6).map((post) => {
          const { slug, date, title, images } = post
          return (
            <Link href={`/blog/${slug}`} key={slug} passHref>
              <div className="flex cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 shadow-lg dark:border-gray-700 md:h-full md:flex-row">
                <div className="relative w-full md:h-full md:w-48 md:flex-none">
                  <img
                    src={images[0]}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex-auto p-4">
                  <div className="flex h-full flex-col justify-between">
                    <h2 className="text-lg font-bold leading-7 tracking-tight">{title}</h2>
                    <p className="mt-1 text-gray-500">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* Newsletter Section */}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="py-4">
          <div className="container mx-auto">
            <div className="mx-auto my-8 max-w-4xl rounded-lg border border-gray-200 bg-white px-4 py-6 shadow-md dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-center justify-center py-4">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* Recent Projects Section */}
      <div className="pt-4">
        <h2 className="text-center text-3xl font-bold leading-8 tracking-tight">Recent Projects</h2>
        <div className="container py-6">
          <div className="flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>

      {recentProjects.length > 2 && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600"
            aria-label="All Projects"
          >
            All Projects &rarr;
          </Link>
        </div>
      )}

      {/* Call-to-Action to About Page */}
      <div className="mx-auto my-8 max-w-4xl rounded-lg border border-gray-200 bg-white px-4 py-6 shadow-md dark:border-gray-700 dark:bg-gray-900">
        <div className="text-center">
          <h3 className="text-2xl font-bold leading-8 tracking-tight">
            Want to know more about me?
          </h3>
          <p className="mt-2 text-lg">
            Dive into my journey and discover the passion behind my projects.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block rounded-lg bg-primary-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-primary-600"
          >
            About Me
          </Link>
        </div>
      </div>
    </>
  )
}
