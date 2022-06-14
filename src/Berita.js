import React from "react";
import "./App.css";

function Berita() {
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

        {/* card */}
        <div class="pt-8">
          <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-4xl">LATEST NEWS</h1>
          <div class=" md:grid grid-cols-3 px-10 gird-cols-1  ">
            <div class="my-10 mb-3">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800  dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src="img/card1.jpg" alt="card3" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">CATATAN PATCH: MENYALA</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Catatan Patch: Menerangi.</p>
                </div>
              </div>
            </div>
            <div class=" my-10 mb-3:">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src="img/ffcard1.png" alt="card1" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">PATCH NOTE: HEROES ARISE</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">PATCH NOTE: HEROES ARISE</p>
                </div>
              </div>
            </div>
            <div class="my-10 mb-3">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img class="rounded-t-lg" src="img/ffcard2.png" alt="card2" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">NIKMATI LEAP OF FAITH </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Crossover Free Fire dengan Assassin's.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card */}

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

export default Berita;
