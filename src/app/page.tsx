import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-fuchsia-100 min-h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <main className="text-fuchsia-800 pt-24 sm:pt-40 pb-12 sm:pb-20 px-8 text-left max-w-screen-lg mx-auto">
        <div className="mb-8 md:float-left md:mr-8 flex md:block place-content-center"></div>
        <div className="mb-8 md:mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-fuchsia-800">
            Hi! I'm Amber.
          </h1>
          <p className="leading-relaxed text-lg text-left mt-8 max-w-xl">
            I'm a software developer living in the Netherlands, with a passion
            for puzzles, a fondness for film, and an eagerness for escape rooms.
          </p>
        </div>
        <div className="flex">
          <a
            href="https://github.com/asmartdev"
            className="text-fuchsia-800 bg-white bg-opacity-40 hover:bg-opacity-80 px-4 py-2 rounded-lg border border-fuchsia-800 border-opacity-40 shadow hover:shadow-md transition-all"
          >
            <CodeBracketIcon className="w-5 h-5 inline mr-2 opacity-50" />
            <span className="font-medium align-middle">GitHub</span>
          </a>
        </div>
      </main>
    </div>
  );
}
