function App() {
  return (
    <>
      <div class="bg-gray-300">
        {/* <awal Jumbotron!> */}
        <div clss="relative">
          <div class="Jumbtron   text-center bg-cover bg-center bg-[url('ffbgcharacter.png')] ">
            <div class="pb-8 shadow-lg rounded-lg text-gray-700 md:pb-80"></div>
          </div>
        </div>
        {/* {/* < jumbotron> */}

        <div class="w-fullmx-auto pt-40 py-40 sm:px-40 px-10 ">
          <div class="p-6 border border-gray-500 sm:rounded-md">
            <form method="POST" action="">
              <label class="block mb-6">
                <span class="text-gray-700">Your name</span>
                <input
                  type="text"
                  name="name"
                  class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Message</span>
                <textarea
                  name="message"
                  class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                  rows="3"
                ></textarea>
              </label>
              <div class="mb-6">
                <button
                  type="submit"
                  class="
            h-10
            px-5
            text-indigo-100
            bg-black
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-amber-500
          "
                >
                  Contact Us
                </button>
              </div>
              <div>
                <div class="mt-2 text-gray-700 text-right text-xs">
                  <a href="https://herotofu.com" class="hover:underline" target="_blank">
                    KYT HELMET
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="pt-8">
          <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-4xl">Video</h1>
          <div class=" md:grid grid-cols-3 mx-10  gird-cols-1  ">
            <div class="my-10 mb-3 mx-auto">
              <iframe src="https://www.youtube.com/embed/dqfEz_ZEolE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="p-5"></div>
            </div>
            <div class="my-10 mb-3 mx-auto">
              <iframe src="https://www.youtube.com/embed/Ui_lzYMTqQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="p-5"></div>
            </div>
            <div class="my-10 mb-3 mx-auto">
              <iframe src="https://www.youtube.com/embed/YT-TVmpTMEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="p-5"></div>
            </div>
          </div>
        </div>

        {/* <footer> */}
        <footer class="p-4 bg-black   shadow md:px-6 md:py-8 dark:bg-gray-800">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com" class="flex items-center mb-4 sm:mb-0">
              <img src="img/iconff.png" class="mr-3 h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Garena Freefire</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com" class="hover:underline">
              Kesy author™
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  );
}
export default App;
