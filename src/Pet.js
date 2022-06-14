import React from "react";
import "./App.css";

function Pet() {
  return (
    <>
      {/* <awal Jumbotron!> */}
      <div clss="relative">
        <div class="Jumbtron  pt-40 text-center bg-cover bg-center bg-[url('ffbgcharacter.png')] ">
          <div class="pb-8 shadow-lg rounded-lg text-gray-700 md:pb-80"></div>
        </div>
      </div>
      {/* < jumbotron>
    
     

      {/* <Card!> */}
      <div class="pt-2">
        <div class=" md:grid grid-cols-4 px-10 gird-cols-1  ">
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/77f1b9e0956503532e5496fee808e8d6jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Zasil</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/48d8609c7ee62bf531e8a8781d32c349jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Agent Hop</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/a4b4b677db357c4da4eecb90c17f2845jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Sensei Tig</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/267e3aed8dcfef355fed9babd4203610jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Dr Beanie</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/5a37c3bdeaba5d305d4e5c9b0a9935b5jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Moony</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/a919233d8a7e838ad18acf8ca3665863jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Dreki</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/b6a897ed6de1e9ab0b12d5fbb89d23fejpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Beaston</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/d95b21e460ec265ee95c9904eddaea8fjpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Rockie</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/800b4b35da3fe291c6ab4e433121c4d9jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Mr Wagon</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/72ea1de8d32cbecd871a919cd9487552jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Falco</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/9c8673d0b721a785350d4b0da7528563jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Ottero</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/2fb8a82f1ee9d6efcd0abfbb956cb582jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Robo</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/5bdc1f7210b101d42e1da8cfc831fe3ejpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Spirit fox</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/df48b4b15f69d0220174d912fb23c750jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Shiba</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/26bccc7f2fb162742b614b1de4df1d23jpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Detective Panda</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/f08bd674391e319b66c37974bf123b6fjpg" alt="card1" />
              </a>
              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">Night Panter</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <akhir card!> */}

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
    </>
  );
}

export default Pet;
