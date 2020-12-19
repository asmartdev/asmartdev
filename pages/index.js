import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amber Smart</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <main class="bg-gray-50 min-h-screen">
        <div class="h-1 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 shadow"></div>
        <div class="bg-white text-gray-700 shadow">
          <div class="pt-12 sm:pt-24 pb-12 sm:pb-20 px-4 text-center">
            <div class="mb-16">
              <h1 class="text-4xl font-semibold mb-2">Hi! I'm Amber.</h1>
              <p>I'm a software developer living in the Netherlands.</p>
            </div>

            <div class="flex justify-center flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-12">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 inline mr-2  text-fuchsia-500 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://github.com/asmartdev"
                  class="font-semibold align-middle hover:underline text-fuchsia-600"
                >
                  GitHub
                </a>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 inline mr-2  text-violet-500 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://twitter.com/asmartdev"
                  class="font-semibold align-middle hover:underline text-violet-600"
                >
                  Twitter
                </a>
              </p>
              <p class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 inline mr-2 text-blue-500 opacity-50"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a
                  href="https://pronoun.is/she"
                  class="font-semibold align-middle hover:underline text-blue-600"
                >
                  she/her
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-4 pt-12 sm:pt-20 text-gray-800 pb-4">
          <h2 class="text-3xl font-semibold mb-8 sm:mb-12">Projects</h2>
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 sm:mb-16">
            <div class="flex-shrink-0 bg-gradient-to-br from-emerald-500 to-emerald-800 text-white h-32 w-48 shadow rounded grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-16 object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">
                <a
                  href="https://github.com/asmartdev/alli"
                  class="hover:underline text-emerald-700"
                >
                  Alli
                </a>
              </h3>
              <p>Component-based design system.</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 sm:mb-16">
            <div class="flex-shrink-0 bg-gradient-to-br from-indigo-500 to-indigo-800 text-white h-32 w-48 shadow rounded grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-16 object-center"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">
                <a
                  href="http://control-shift-escape.com"
                  class="hover:underline text-indigo-700"
                >
                  Control Shift Escape
                </a>
              </h3>
              <p>Coding challenges presented in the style of an escape room.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
