import React from "react";
import "./App.css";

function Character() {
  return (
    <>
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

      {/* <Card!> */}
      <div class="pt-8 ">
        <h1 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-4xl">CHARACTER</h1>
        <div class=" md:grid grid-cols-4 px-10 gird-cols-1  ">
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md " src="https://dl.dir.freefiremobile.com/common/web_event/hash/d8881bfbce9a6f111352e17a548ca581jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">KENTA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Kenta is a strong-willed bladesmith who can make almost any weapon.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/5b0b33fddf4c15bdb4ed0d88f16336e6jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">NAIRI</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Nairi is a man who chases storms looking for answers.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/bcb9d31b143c7dcbc5fe61f96ee08ce8jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">LEON</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Leon is a student that has extreme basketball skills.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/2835767ffa229981fe53118c49e46c6bjpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">OTHO</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Otho is a university student who is the master of memory.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/aee1e4ab02bcd94780976476081bd3b1jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">THIVA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Thiva is the lead singer and musician in a band.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/15614dbee6958be010982ca6b602c394jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">DIMITRI</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Dimitri is the sound technology engineer and musician.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md " src="https://dl.dir.freefiremobile.com/common/web_event/hash/ece7c87a44fe248cfe93f7241fe56025jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">D-BEE</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">D-bee is a music maker and street dancer</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/d9df2fbe191bbf71c17c1598ae52b1a6jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-amber-300 dark:text-white">MARO</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Maro is a falconer</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/b3648a8d84e2f5d23499e94b9f7845f5jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">XAYNE</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Xayne is a free spirited extreme athlete</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/626d3aad6c81b740393d5f3ab2989ebbjpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">SKYLER</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Skyler is an entertainment company CEO and Superstar</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/Shirou/cover.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">SHIROU</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Shirou is an app-delivery boy.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/Chrono/cover.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">CHRONO</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Chrono is a bounty hunter from another universe.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/Dasha/Dasha.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">DASHA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Dasha is a prankster and rebel</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/Kshmr/K_cover.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">K</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">K is a professor and jiujitsu expert.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/officialwebsite/character/Luqueta/Luqueta.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">LUQUETA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Luqueta is an up and rising soccer star.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/25dc50c9b901f87285e6cde42edaaa77jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">KELLY</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Kelly is a high-school sprinter</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Hayato.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">HAYATO</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Hayato is a legendary Samurai</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/eb7ee71d47407352c9383ea5c4ff582bjpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MOCO</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Moco is an outstanding hacker.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/officialwebsite/character/list_img/Steffie.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">STEFFILE</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Steffie is a pro graffiti artist.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Misha.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MISHA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Misha is an extremely talented racer.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/0fcc95c4d156773451488680aa82f0f6jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MAXIM</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Maxim is a competitive speed eater</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/f8b80737cb08300c0c82822f1e724737jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">ANDREW</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Andrew was a police officer</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Caroline.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">CAROLINE</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Caroline best friend. One of the most popular girls at school.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Laura.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">LAURA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Laura is an outstanding special agent.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Rafael.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">RAFAEL</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Rafael is a deadly killer.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/officialwebsite/character/list_img/Alok.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">ALOK</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Alok is a world famous DJ, ready to drop a beat.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Jota.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">JOTA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Jota is a parkour expert and stuntman</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/officialwebsite/character/Clu/Clu1.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">CLU</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Clu is a modern day private detective</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/officialwebsite/character/Wolfrahh/Wolfrah.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">WOLFRAH</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Wolfrahh is a video game aficionado searching for answers.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/officialwebsite/character/list_img/Alvaro.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">ALVARO</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Alvaro is an explosive young man trying to find his past.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/aee1e4ab02bcd94780976476081bd3b1jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">ANTONIO</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Antonio is a notorious gangster, forced into a life of violence.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://dl.dir.freefiremobile.com/common/web_event/hash/c95e6f4feec8764217e3024c58e1a36fjpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">PALOMA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Paloma is a passionate but ruthless woman who knows how to lead.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Miguel.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MIGUEL</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">A captain the special forces, loved by his subordinates.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Nikita.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">NIKITA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Nikita is a professional bodyguard.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Kapella.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">KAPELA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Kapella is a pop star but also has a secret identity.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Joseph.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">JOSEPH</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Joseph is a well-known physicist, but he is also a player</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Notora.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">NOTORA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Notora is a tomboyish motorcycle gang member.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/A124.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">A124</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">A124 is a robot made with modern technology.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Kla.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">KLA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Kla was a Muay Thai Practitioner and his thoughts are deeply rooted in revenge.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Wukong.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">WUKONG</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">The Monkey King is Here!</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Olivia.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">OLIVIA</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Olivia is a warm-hearted soul with the ability to heal and revive.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Ford.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">FORD</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Ford is a sea captain, offering refuge for those who need it.</p>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img class="rounded-t-md" src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/character/new/Shani.jpg" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">SHANI</h5>
                </div>
                <p class="mb-3 font-normal text-gray-700 md:hover:text-amber-300 dark:text-gray-400">Shani is an engineer who works at a junkyard..</p>
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

export default Character;
