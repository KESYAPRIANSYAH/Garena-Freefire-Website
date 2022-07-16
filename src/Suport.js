function App() {
  return (
    <>
      <div class="bg-gray-300">
        {/* <slide!> */}

        <div class="pt-14">
          <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active float-left w-full">
                <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/b6a7383b4b6bf05be6c85d8b3d0a8555jpg" class="block w-full" alt="first" />
                <div class="carousel-caption hidden xl:block absolute  text-left right-7s mb-20 ml-80">
                  <h5 class="text-3xl text-amber-500 font-bold right-7 mb-5 ml-80">Moco "Enigma"</h5>
                  <h6 class="right-7s  mb-5 ml-80">Moco is an outstanding hacker.</h6>
                </div>
              </div>
              <div class="carousel-item float-left w-full">
                <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/972eba97ed66fe8abee6bb999ee39010jpg" class="block w-full" alt="dua" />
                <div class="carousel-caption hidden xl:block absolute  text-left right-7s mb-20 ml-80">
                  <h5 class="text-3xl text-amber-500 font-bold right-7 mb-5 ml-80">Kelly "The Swift"</h5>
                  <h6 class="right-7s  mb-5 ml-80">Kelly is a high-school sprinter</h6>
                </div>
              </div>
              <div class="carousel-item float-left w-full">
                <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/51e2f1c193eeda4666ba6e3144fd9d30jpg" class="block w-full" alt="tiga" />
                <div class="carousel-caption hidden xl:block absolute  text-left right-7s mb-20 ml-80">
                  <h5 class="text-3xl text-amber-500 font-bold right-7 mb-5 ml-80">Hayato "Firebra"</h5>
                  <h6 class="right-7s  mb-5 ml-80">Hayato is a legendary Samurai</h6>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* <akhir slider!> */}

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
Garena Freefire
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
