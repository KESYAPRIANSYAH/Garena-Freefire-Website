import React from "react";
import "./App.css";

function Home() {
  return (
    <>
      {/* <awal Jumbotron!> */}
      {/* tampilan mobile */}
      <div clss="relative">
        <div class="Jumbtron pt-80  text-center bg-cover bg-center block sm:hidden  bg-[url('ffbg10.png')] ">
          <div class="pb-8 shadow-lg rounded-lg text-gray-700 md:pb-80">
            <div class="md:resize  font-medium rounded-lg mt-20 text-sm focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
              <a href="https://apps.apple.com/US/app/id1300146617?mt=8" target="_blank">
                <img
                  src="img/appstore.png"
                  class="w-40 h-50 sm:resize font-medium rounded-lg text-sm  focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-center inline-flex items-center dark:focus:ring-[#050708]/30 dark:hover:bg-[#050708]/30 mr-8 mb-1 "
                />
              </a>
            </div>
            <div class="md:resize font-medium rounded-lg text-sm  focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-8 mb-9">
              <a href="https://play.google.com/store/apps/details?id=com.dts.freefiremax" target="_blank">
                <img
                  src="https://freefiremobile-a.akamaihd.net/ffwebsite/images/download/googlePlay2.png"
                  class="w-40 h-50 sm:resize font-medium rounded-lg text-sm  focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* akhir tampilan mobile */}
      {/* mode tampilan pc/laptop */}
      <div class="relative">
        <div class="Jumbtron pt-80 pb-80  bg-cover bg-full hidden sm:block bg-[url('ffbg9.png')] ">
          <div class="absolute text-center inset-x-0 bottom-0 pb-40">
            <img
              src="img/logo5.png"
              class="w-60 h-50  font-medium  text-sm  focus:ring-4  focus:ring-[#050708]/50 text-center  items-center dark:focus:ring-[#050708]/30  mr-8 mb-1w-40 h-50 sm:resize  rounded-lg   focus:outline-none   inline-flex   dark:hover:bg-[#050708]/30 "
            />
          </div>
          <div class="absolute text-center inset-x-0 bottom-0 pb-20">
            <div class="md:resize font-medium rounded-lg text-sm  focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 ">
              <a href="https://apps.apple.com/US/app/id1300146617?mt=8" target="_blank">
                <img
                  src="img/appstore.png"
                  class="w-40 h-50  font-medium  text-sm  focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-center inline-flex items-center dark:focus:ring-[#050708]/30  mr-8 mb-1w-40 h-50 sm:resize  rounded-lg     dark:hover:bg-[#050708]/30 "
                />
              </a>
            </div>
            <div class="md:resize font-medium rounded-lg text-sm  focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30  ">
              <a href="https://play.google.com/store/apps/details?id=com.dts.freefiremax" target="_blank">
                <img
                  src="https://freefiremobile-a.akamaihd.net/ffwebsite/images/download/googlePlay2.png"
                  class="w-40 h-50 sm:resize font-medium rounded-lg text-sm  focus:ring-4 focus:outline-none focus:ring-[#050708]/50 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* akhir tampilan pc/laptop */}
      {/* < jumbotron>

      {/* <slide!> */}
      <div>
        <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active float-left w-full">
              <img src="img/1ff.png" class="block w-full" alt="first" />
              <div class="carousel-caption hidden xl:block absolute  text-left right-7s mb-40 ml-80">
                <h5 class="text-3xl text-amber-500 font-bold right-7 mb-3  ml-80">FREE FIRE TALES: THE FIRST BATTLE</h5>
                <h6 class="right-7s  mb-5 ml-80">The first Free Fire universe animated short will be released soon. Get ready to explore Hayato's story and unlock exciting rewards!.</h6>
                <div class="text-left pt-2 pb-20">
                  <a
                    href="https://firedisplay.sea.freefiremobile.com/?lang=en"
                    target="_blank"
                    class=" ml-80 inline-flex items-center py-4 px-20 text-sm font-medium text-center text-white bg-amber-500 rounded-lg md:hover:text-amber-300 focus:ring-4 focus:outline-none focus:ring-blue-300= dark:bg-amber-500">
                    GO TO
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item float-left w-full">
              <img src="img/2ff.png" class="block w-full" alt="dua" />
              <div class="carousel-caption hidden xl:block absolute  text-left right-7s mb-40 ml-80">
                <h5 class="text-3xl text-amber-500 font-bold right-7 mb-5 ml-80">NEW UPDATE IS COMING!</h5>
                <h6 class="right-7s  mb-5 ml-80">
                  In the upcoming patch, experience free characters in the LINK system, a better gaming environment, and exciting in-game missions. What's more? Enjoy a smaller game file size (~400MB) this time
                </h6>
                <div class="text-left pt-2 pb-20">
                  <a href="#" class=" ml-80 inline-flex items-center py-4 px-20 text-sm font-medium text-center text-white bg-amber-500 rounded-lg md:hover:text-amber-300 focus:ring-4 focus:outline-none dark:bg-amber-500">
                    GO TO
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item float-left w-full">
              <img src="img/3ff.png" class="block w-full" alt="tiga" />
              <div class="carousel-caption hidden xl:block absolute  text-left right-7s mb-40 ml-80">
                <h5 class="text-3xl text-amber-500 font-bold right-7 mb-5 ml-80">FREE FIRE'S SPECIAL SPRING EVENT</h5>
                <h6 class="right-7s  mb-5 ml-80">EVENTExciting new updates arriving soon. Check out the April's Special Spring event and unlock endless fun.</h6>
                <div class="text-left pt-2 pb-20">
                  <a href="#" class=" ml-80 inline-flex items-center py-4 px-20 text-sm font-medium text-center text-white bg-amber-500 rounded-lg md:hover:text-amber-300 focus:ring-4 focus:outline-none dark:bg-amber-500">
                    GO TO
                    <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                  </a>
                </div>
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

      {/* iframe */}
      <div class=" relative">
        <div class="md:Jumbtron pt-60 pb-60 text-center bg-cover bg-center bg-[url('alok.png')] ">
          <div class="static ">
            <iframe
              class=" mx-auto  hidden sm:block"
              width="700 "
              height="370"
              src="https://www.youtube.com/embed/HzW_K3V3Iv4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
          <div class="static ">
            <iframe
              class="mx-auto block sm:hidden"
              width="300 "
              height="150"
              src="https://www.youtube.com/embed/HzW_K3V3Iv4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>

      {/* iframe */}

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

export default Home;
