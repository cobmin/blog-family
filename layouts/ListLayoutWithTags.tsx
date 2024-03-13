/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import Image from 'next/image'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
  const isAllPostsActive = pathname === '/blog' || pathname.startsWith('/blog/')

  return (
    <>
      <div>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {title}
        </h1>
        <div className="pb-6 pt-6">
          <div className="px-6 py-4">
            {/* Flex container for tags, including "All Posts" */}
            <div className="-m-1 flex flex-wrap">
              {/* "All Posts" tag */}
              <div className="m-1">
                <Link
                  href={`/blog`}
                  className={`inline-block rounded px-3 py-2 text-sm font-medium uppercase hover:text-primary-500 ${
                    isAllPostsActive
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-gray-200 text-gray-500 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                  aria-label="View all posts"
                >
                  All Posts
                </Link>
              </div>
              {/* Dynamically generated tags */}
              {sortedTags.map((tag) => {
                // Generate the slug for the current tag.
                const tagSlug = slug(tag)
                // Construct the expected path for this tag's page.
                const tagPath = `/tags/${tagSlug}`
                // Check if the current pathname matches this tag's page path.
                const isActiveTag = pathname === tagPath || pathname.startsWith(`${tagPath}/`)

                return (
                  <div key={tag} className="m-1">
                    <Link
                      href={tagPath}
                      className={`inline-block rounded px-3 py-2 text-sm font-medium uppercase hover:text-primary-500 ${
                        isActiveTag
                          ? 'bg-primary-500 text-white hover:bg-primary-600'
                          : 'bg-gray-200 text-gray-500 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800'
                      }`}
                      aria-label={`View posts tagged ${tag}`}
                    >
                      {`${tag} (${tagCounts[tag]})`}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <ul>
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags, images } = post
              const imageUrl = Array.isArray(images) ? images[0] : images

              return (
                <li key={path} className="mb-4">
                  <div className="flex flex-col items-stretch overflow-hidden rounded-lg border border-gray-200 shadow-lg dark:border-gray-700 md:flex-row">
                    {imageUrl && (
                      <div className="w-full md:w-48">
                        {' '}
                        {/* Adjust width as needed */}
                        <Image
                          src={imageUrl}
                          alt={`Cover Image for ${title}`}
                          className="h-48 w-full rounded-t-lg object-cover md:h-full md:rounded-l-lg md:rounded-tr-none"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col justify-center p-4">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </>
  )
}
