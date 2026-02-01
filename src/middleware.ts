import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createDatabase from './models/server/dbSetup'
import {createStorageBucket} from './models/server/storage.collection'
import { clerkMiddleware } from '@clerk/nextjs/server';
import { syncClerkUser } from './models/server/syncClerck';

// This function can be marked `async` if using `await` inside
export default clerkMiddleware(async (auth, request: NextRequest)=> {
 await Promise.all([
    createDatabase(),
    createStorageBucket(),
    syncClerkUser(auth)  // Pass auth object to syncClerkUser
 ])
  return NextResponse.next()
})
 
// See "Matching Paths" below to learn more
export const config = {
   /* match all request paths except for the ones that starts with
   -api
   -_next/static
   - _next/image
   -favicon.com
   */
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],


}  