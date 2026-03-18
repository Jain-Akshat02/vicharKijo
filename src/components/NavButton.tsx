'use client'

import { useRouter } from 'next/navigation'

export default function NavButtons() {
  const router = useRouter()

  return (
    <>
      <button
        onClick={() => router.push('/questions')}
        className="transition hover:text-zinc-900 dark:hover:text-white"
      >
        Questions
      </button>
      <button
        onClick={() => router.push('/tags')}
        className="transition hover:text-zinc-900 dark:hover:text-white"
      >
        Tags
      </button>
      <button
        onClick={() => router.push('/users')}
        className="transition hover:text-zinc-900 dark:hover:text-white"
      >
        Users
      </button>
    </>
  )
}