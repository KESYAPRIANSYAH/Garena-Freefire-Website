import React from "react";
import "./App.css";
function Navbar() {
  return (
    <nav>
      <div class="bg-black  px-2 sm:px-4 py-2.5 container flex flex-wrap justify-between items-center mx-auto fixed-top">
        <a href="https://flowbite.com" class="flex items-center">
          <img src="img/logo5.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div class="flex items-center md:order-2">
          <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
            <span class="sr-only">Open user menu</span>
            <img class="w-8 h-8 rounded-full" src="img/logobola.png" alt="user photo" />
          </button>
          {/* <!-- Dropdown menu --> */}
          <div class="hidden z-50 my-4 text-base list-none bg-black rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
            <div class="py-3 px-4">
              <span class="block text-sm  text-white">Language</span>
            </div>
            <ul class="py-1" aria-labelledby="dropdown">
              <li>
                <a href="#" class="block py-2 px-4 text-sm text-white hover:bg-gamber-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Indonesia
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-4 text-sm text-white hover:bg-amber-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  English
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-4 text-sm text-white hover:bg-amber-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Japan
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-4 text-sm text-white hover:bg-amber-300 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="/" class="block py-2 pr-4 pl-3 text-white bg-amber-500 rounded md:bg-transparent md:text-amber-300 md:p-0 dark:text-white" aria-current="page">
                HOME
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white border-b border-gray-100 hover:bg-amber-300 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                GAME{" "}
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div id="dropdownNavbar" class="z-10 hidden bg-black divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="/Character" class="block px-4 py-2 hover:bg-amber-300 dark:hover:bg-gray-600 text-white">
                      CHARACTER
                    </a>
                  </li>
                  <li>
                    <a href="/Pet" class="block px-4 py-2 hover:bg-amber-300 dark:hover:bg-gray-600 text-white">
                      PET
                    </a>
                  </li>
                  <li>
                    <a href="/Weapon" class="block px-4 py-2 hover:bg-amber-300 dark:hover:bg-gray-600 text-white">
                      WEAPON
                    </a>
                  </li>
                  <li>
                    <a href="/Maps" class="block px-4 py-2 hover:bg-amber-300 dark:hover:bg-gray-600 text-white">
                      MAPS
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/Berita"
                class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-amber-300 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                BERITA
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink2"
                data-dropdown-toggle="dropdownNavbar2"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-white border-b border-gray-100 hover:bg-amber-300 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                MEDIA{" "}
                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div id="dropdownNavbar2" class="z-10 hidden bg-black divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="https://ff.garena.com/universe/en/verify/?redirect=%252Fen%252Fcomic%252F" target="_blank" class="block px-4 py-2 hover:bg-amber-300 dark:hover:bg-gray-600 text-white">
                      COMIC
                    </a>
                  </li>
                  <li>
                    <a href="https://ff.garena.com/universe/en/story/" target="_blank" class="block px-4 py-2 hover:bg-amber-300 dark:hover:bg-gray-600 text-white">
                      STORY
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="/Suport"
                class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-amber-300 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                SUPPORT
              </a>
            </li>

            <li>
              <a
                href="https://www.ffesports.com/"
                target="_blank"
                class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-amber-300 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                ESPORTS
              </a>
            </li>
            <li>
              <a
                href="https://ff.garena.com/max/"
                target="_blank"
                class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-amber-300 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-black dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                MAX
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
