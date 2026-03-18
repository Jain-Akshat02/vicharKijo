"use client"
import {useState,useEffect} from "react";

const Questions = () => {
    return (
        <div className="space-y-6">
      
      {/* Page Heading */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">
          All Questions
        </h1>

        <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm h-10 px-5 hover:opacity-90 transition">
          Ask Question
        </button>
      </div>

      {/* Filters / Tabs */}
      <div className="flex items-center gap-3 text-sm">
        <button className="rounded-full bg-zinc-900 text-white px-4 py-1.5 dark:bg-white dark:text-black">
          Newest
        </button>
        <button className="rounded-full border border-zinc-300 px-4 py-1.5 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
          Active
        </button>
        <button className="rounded-full border border-zinc-300 px-4 py-1.5 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800">
          Unanswered
        </button>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        
        {/* Question Card */}
        {[1, 2, 3, 4].map((q) => (
          <div
            key={q}
            className="rounded-xl border border-zinc-200 bg-white/70 backdrop-blur-md p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/70"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              
              {/* Question Content */}
              <div>
                <h2 className="text-lg font-semibold hover:text-indigo-500 cursor-pointer transition">
                  How does React reconciliation work internally?
                </h2>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  Asked by Akshat • 2 hours ago
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-300">
                <span>👍 12</span>
                <span>💬 4</span>
                <span>👁️ 120</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded-md">
                react
              </span>
              <span className="text-xs bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded-md">
                javascript
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
    );
}

export default Questions;
