import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amber Smart</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <main>
        <div class="bg-gradient-to-br from-pink-700 to-purple-600 text-white h-screen">
          <div class="pt-24 lg:pt-48 pb-20 px-4 text-center">
            <div class="mb-16">
              <h1 class="text-4xl font-semibold mb-2">Hi! I'm Amber Smart.</h1>
              <h2>I'm a software engineer from the UK.</h2>
            </div>

            <div class="flex justify-center flex-col lg:flex-row lg:space-x-12">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 inline mr-2 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://github.com/asmartdev"
                  class="font-semibold align-middle hover:underline"
                >
                  GitHub
                </a>
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 inline mr-2 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://twitter.com/asmartdev"
                  class="font-semibold align-middle hover:underline"
                >
                  Twitter
                </a>
              </p>
              <p class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 inline mr-2 opacity-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="https://pronoun.is/she"
                  class="font-semibold align-middle hover:underline"
                >
                  she/her
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
