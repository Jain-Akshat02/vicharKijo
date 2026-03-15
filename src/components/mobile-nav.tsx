"use client"

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 sm:hidden"
          aria-label="Open menu"
        >
          <FiMenu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-left">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400 text-sm font-semibold text-white shadow-sm">
              VK
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">VicharKijo</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                where quizzer gets quizzed
              </p>
            </div>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-1">
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <span>Questions</span>
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <span>Tags</span>
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <span>Users</span>
          </button>
        </nav>

        <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SignInButton>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="w-full bg-[#6c47ff] hover:bg-[#5a3ae6]">
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-3">
              <UserButton />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                Your Profile
              </span>
            </div>
          </SignedIn>
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
          <button className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400">
            Ask a question
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

