import React from "react";
import "./App.css";

function Character() {
  return (
    <>
      {/* <awal Jumbotron!> */}
      <div clss="relative">
        <div class="Jumbtron   text-center bg-cover bg-center bg-[url('ffbgcharacter.png')] ">
          <div class="pb-8 shadow-lg rounded-lg text-gray-700 md:pb-80"></div>
        </div>
      </div>
      {/* {/* < jumbotron> */}
      {/* button */}

      <div class=" text-center rounded-md shadow-sm pt-20  " role="group">
        <a href="#MapAlpine">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 transition duration-500"
          >
            Alpine
          </button>
        </a>

        <a href="#MapBermudaRemastered">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Bermuda Remastered
          </button>
        </a>

        <a href="#MapBermuda">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent  border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Bermuda
          </button>
        </a>

        <a href="#MapKalahari">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent  border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Kalahari
          </button>
        </a>

        <a href="#MapPurgatory">
          <button
            type="button"
            class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Purgatory
          </button>
        </a>
      </div>
      {/* button */}

      {/* ISI KONTEN MAP */}
      <div>
        <div id="MapAlpine">
          <div className="pt-20 ">
            <h1 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-2xl ">Alpine</h1>
            <h5 class="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white text-center">An exotic combat experience in the snow-capped mountains and culturally rich terrains.</h5>
            <img class="mx-auto pt-6 my-10 " src="Map/Map1.jpg" alt="map alpine" />
            <div>
              {/* Card map alpine*/}
              <div class=" md:grid grid-cols-3 px-10 gird-cols-1 mx-20  ">
                <div class=" my-10 mx-1 ">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/37f667f8299537f3cc5808d6aad4e7d7jpg" alt="card1" />

                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Snowfall</p>
                    </div>
                  </div>
                </div>
                <div class=" my-10 mx-1">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/37f667f8299537f3cc5808d6aad4e7d7jpg" alt="card1" />

                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Vantage</p>
                    </div>
                  </div>
                </div>
                <div class=" my-10 mx-1 ">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/19f6940e9524b70813cae2fbe7be0c28jpg" alt="card1" />

                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Railroad</p>
                    </div>
                  </div>
                </div>
                <div class=" my-10 mx-1 ">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/62e37d8f2bb5bc156e88d724b80bdeb6jpg" alt="card1" />

                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Dock</p>
                    </div>
                  </div>
                </div>
                <div class=" my-10 mx-1">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/6f8567f8b32bf02e0a0dd82cc4479657jpg" alt="card1" />

                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">River Mouth</p>
                    </div>
                  </div>
                </div>
                <div class=" my-10 mx-1 ">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/493bdd4a21f1bc6b5f4e4f17f850ed52jpg" alt="card1" />

                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Fusion</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card map alpine*/}
            </div>
          </div>
        </div>
        {/* Map bermuda Remastered */}
        <div id="MapBermudaRemastered">
          <div className="pt-20">
            <h1 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-2xl ">Bermuda Remastered</h1>
            <h5 class="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white text-center">New and Improved Bermuda! Battle areas were expanded and enriched to accommodate a wider range of play styles.</h5>
            <img class="mx-auto pt-6 my-10" src="Map/Map2.jpg" alt="map bermuda remasterd" />
            {/* Card map bermuda remastered*/}
            <div class=" md:grid grid-cols-3 px-10 gird-cols-1 mx-20  ">
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/cd30d7dec412593710546a029e7e06acjpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Hangar</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/b852ed1b16b88681f4db423524b71982jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Observatory</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/9ceaf516b02ac7529ae6521eaa05c14ajpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Academy</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/b36ed63fcfceccfd408a0efd36ef3d97jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Nurek Dam</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/51f8423c4b382e5aa6a062d6d78081cdjpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Mill</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/8245e219a16c531450c42e61b1faf007jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">The Circuit</p>
                  </div>
                </div>
              </div>

              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/434007c80c880a0ea0be00ecec363196jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Samurai's Garden</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card bermuda remastered */}
          </div>
        </div>
        {/* Akhir Map bermuda remastered */}
        {/* map bermuda */}
        <div id="MapBermuda">
          <div className="pt-20">
            <h1 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-2xl ">Bermuda</h1>
            <h5 class="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white text-center">The classic Battle Royale gameplay experience..</h5>
            <img class="mx-auto pt-6 my-10" src="Map/Map3.jpg" alt="map bermuda" />
            {/* Card map bermuda */}
            <div class=" md:grid grid-cols-3 px-10 gird-cols-1 mx-20  ">
              <div class=" my-10 mx-1">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/5d6d653283b73ca722441afcaf752c59jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Shipyard</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/de37c312ce3ffd0242d0674371e0f399jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Graveyard</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/aba73f8cc6d6b568508da9b5fc6d5e45jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Cape Town</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/e93752e7ede23d8b47fe713a284d9d4cjpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Factory</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/6b0ee0988505dee7131d0d2609396b3ajpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Mars Electric</p>
                  </div>
                </div>
              </div>

              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/4d1ede4208f220a6a1d637c561ac8b6fjpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Clock Tower</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/dd24a4f480df099c2256b42c778e78dajpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Rim Nam Village</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card map bermuda*/}
          </div>
        </div>
        {/* akhir map bermuda */}
        {/* map kalahari */}
        <div id="MapKalahari">
          <div className="pt-20">
            <h1 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-2xl ">Kalahari</h1>
            <h5 class="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white text-center">Complex terrain with high tier loot. Greater map knowledge will most definitely increase your odds of survival.</h5>
            <img class="mx-auto pt-6 my-10" src="Map/Map4.jpg" alt="map kalahari" />
            {/* card map kalahari */}
            <div class=" md:grid grid-cols-3 px-10 gird-cols-1 mx-20  ">
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/93167e8dacdde982342a2b25fb55e929jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Shrines</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/34cc121c7b7480e86c247f862fc36e9ejpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Council Hall</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/b8f35ab46091b38cf558e4975281ace2jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Bayfront</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/7713eb6140bae86d920db5e69fc75fecjpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Confinement</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/ede3fce791435fefd77c092da7e68f10jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Refinery</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/1aba3c7ebdbf5032124ec112aefa05a4jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Santa Catarina</p>
                  </div>
                </div>
              </div>

              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/a7fec916b35986398576fe092c72d797jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Command Post</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/8ffc2a0e56d048af58e4a8be8bb51bffjpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Mammoth</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card map kalahari */}
          </div>
        </div>
        {/* akhir map kalahari */}
        {/* map Purgatory */}
        <div id="MapPurgatory">
          <div className="pt-20">
            <h1 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-2xl ">Purgatory</h1>
            <h5 class="mb-2 text-1xl  tracking-tight text-gray-900 dark:text-white text-center">Spacious battle areas and eclectic types of terrain.</h5>
            <img class="mx-auto pt-6 my-10" src="Map/Map5.jpg" alt="map alpine" />
            {/* Card map Purgatory*/}
            <div class=" md:grid grid-cols-3 px-10 gird-cols-1 mx-20  ">
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/463940728c6aa5d4de5af2fe0f06c074jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Forge</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/33fe44d3e91154858ec6de87764c8343jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Ski Lodge</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/948553da3ddba055d4b615a5376c7557jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Lumber Mill</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/bb4e7c251fb1745dcc78099f906e6105jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Central</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/8c43a9a4d6c89aed3f7f447dbd578029jpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Golf Course</p>
                  </div>
                </div>
              </div>
              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/12b11078afd3b68a94c0b83ca5ba48fbjpg" alt="card1" />

                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Mt. Vilia</p>
                  </div>
                </div>
              </div>

              <div class=" my-10 mx-1 ">
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/adfb8a6ac457013ea22d5365c2ab065djpg" alt="card1" />
                  </a>
                  <div class="p-5">
                    <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400 text-center">Moathouse</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Card */}
          </div>
        </div>
        {/* akhir map Purgatory */}
      </div>

      {/* AKHIR MAP */}

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

export default Character;
