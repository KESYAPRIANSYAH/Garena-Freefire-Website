import React from "react";
import "./App.css";

function Weapon() {
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
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* <akhir slider!> */}

      {/* <Card!> */}
      <div class="pt-8  bg-gray-400">
        <h1 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white text-center sm:text-4xl">WEAPON</h1>
        <div class=" md:grid grid-cols-3 px-10 gird-cols-1  ">
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/0931a5c172b1ad0932b06c7db063cf75png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">CHARGE BUSTER</h5>
                </div>
              </div>
            </div>
          </div>

          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/67b6104ee8500fee05d13ba1ef9f52d7png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">G36</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/b80b64950aeda9a647aeed35e5d34904png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">AC80</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/d7a18fe1211bb960b10f05211994c215png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MAC10</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/279060ecdb70c72a1532233c79aebb05png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">G36</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/d027f7f37630b64063c67a53f08a5a8epng" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">FLAMETHROWER</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/08c195239cf6eac62c1318a7c0e48896png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MINIUZI</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/ffc46faad2c55fecde7927d8b9d5da26png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">KINGFISHER</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/032899e802889bfe8bdf0a26fb28cec1png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">FF KNIFE</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/376e7096faed67ccea6da88f8cdc6e4epng" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">FLASH FREEZE</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/86f464ec1441851f51d4010fe5032afbpng" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">GLOO WALL</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/5b21b5735e42f5d6f06668cdd2045703png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">SMOKE GRENADE</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/a1220d14d4b9USP.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">USP-2</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/5e592d916777c11b85a21f1e0bdd1a03png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">M1917</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/5de98b2ceacb521210738eee5aaeabb1png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">KORD</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/weapon/MAG7.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MAG-7</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/weapon/Scythe.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">SCYTHE</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/weapon/vector.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">VECTOR</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/officialwebsite/weapon/Woodpecker_2.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">WOODPECKER</h5>
                </div>
              </div>
            </div>
          </div>

          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/db09d59a2322Parang.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MACHETE</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/7a501685488aPan.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">PANCI</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/a3d76eea69a4EAGLE.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">DESERT EAGLE</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/d6e450df698cG18.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">G18</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/a1220d14d4b9USP.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">USP</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/4573ca43055fVSS.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">VSS</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/afb97f36baaeSCAR.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">SCAR</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/633c6606728bM14.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">M14</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/548cb1b3c405MP5.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MP5</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/29414f4f7693UMPSG.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">UMP</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/32c37a1faadfM1014.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">M1014</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/9132db82b09cGROZA.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">GROZA</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/7f5f84b29c48SKS.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">SKS</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/08584671dd2bAWM.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">AWM</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/fa2feaa3801eAK.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">AK-47</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/68941933af8dM4A1.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">M4AI</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/9b729a817149Grenade.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">GRENADE</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/58e7c1a81842M249.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">M249</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/74101edaea37M1873.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">M1873</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/4e2f1a7c5c6cKar98k.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">KAR98K</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/d1453d6f962fM79.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">M79</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/d9cb553d89b5MP40.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MP40</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/948390ab4181M500.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">M500</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/6f52b6ac70cdfamas.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">FAMAS</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/a5d78327e948Crossbow.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">CHROSSBOW</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/a972c767cf13SVD.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">SVD</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/7368042b29d9Bat.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">BAT</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/cc016098bcd8SPAS12.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">SPAS12</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/a30b69be99c2M60.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">М60</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/2e9c951ed880XM8.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">XM8</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/b413041c3c06p90.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">P90</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/35275f6be7admgl140.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">MGL140</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/d347e7794082HealingGun.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">TREATMENT PISTOL</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/b2d03867193dAN94.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">AN94</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/d78135350966Katana.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">KATANA</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/6186beb2e449CG15.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">CG15</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/4f4a18849e5aGatling.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">GATLING</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://freefiremobile-a.akamaihd.net/common/web_event/official/a42ed7790ad0Icon_slot_RGS50.png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">RGS50</h5>
                </div>
              </div>
            </div>
          </div>
          <div class=" my-10 mb-3:">
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img src="https://dl.dir.freefiremobile.com/common/web_event/hash/67b6104ee8500fee05d13ba1ef9f52d7png" alt="card1" />

              <div class="p-5">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 md:hover:text-amber-300 dark:text-white">RGS50</h5>
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
          <a href="https://flowbite.com" target="_blank" class="flex items-center mb-4 sm:mb-0">
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

export default Weapon;
