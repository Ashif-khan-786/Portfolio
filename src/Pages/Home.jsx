
import React from 'react'
import { Link } from 'react-router-dom'
import ashif from '../assets/ashif khan.jpeg'

const Home = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>

      <div className='min-h-screen w-full flex flex-col lg:flex-row bg-black'>

        {/* Left Section */}
        <div className='w-full lg:w-1/2'>

          <div className='flex flex-col mt-16 sm:mt-24 lg:mt-40 px-5 sm:px-10 lg:ml-20 lg:px-0 gap-4'>

            <div>
              <h3 className='font-semibold text-lg sm:text-xl'>
                <span className='text-green-400'>Welcome</span> in my Feed
              </h3>

              <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl'>
                Hello I'm a{' '}
                <span className='text-red-600 font-extrabold'>
                  Programmer
                </span>
              </h1>
            </div>

            <p className='w-full max-w-xl mt-4 text-sm sm:text-base'>
              I'm a passionate programmer who loves building creative and
              user-friendly web applications. I enjoy learning new technologies,
              solving problems, and turning ideas into reality through code.
              My goal is to keep improving my skills and create meaningful
              digital experiences that make a difference.
            </p>

            {/* Available On and Currently Working On */}
            <div className='flex flex-col sm:flex-row sm:justify-between gap-6 mt-3'>

              {/* Available On */}
              <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-xs sm:text-lg'>
                 <span > A</span>vailable  On
                </h2>

                <div className='flex gap-4 '>

                  <Link
                    className="inline-block  bg-white h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/3840px-Facebook_f_logo_%282019%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail')"
                    }}
                    to="#"
                    aria-label="Facebook"
                  />

                  <Link
                    className="inline-block  bg-white h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/aKZ_EPLyOd_Gzd2xUcBocHRgtVU19JkTi3ZVzcnwlIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWluc3RhZ3JhbS1s/b2dvLWljb24tc3Zn/LWRvd25sb2FkLXBu/Zy0xNjQ2NDA3LnBu/Zz9mPXdlYnAmdz0x/Mjg')"
                    }}
                    to="#"
                    aria-label="Instagram"
                  />

                  <Link
                    className="inline-block h-6  bg-white w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/ZtKciIPFtc5ZJmg268AwqSgwqDgv_vXXQKT3XOxZ5f4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9MaW5rZWRJ/bi9MaW5rZWRJbi1J/Y29uLUxvZ28ud2lu/ZS5zdmc')"
                    }}
                    to="#"
                    aria-label="WhatsApp"
                  />

                  <Link
                    className="inline-block h-6 w-6  bg-white shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1280px-GitHub_Invertocat_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail')"
                    }}
                    to="#"
                    aria-label="Telegram"
                  />

                </div>
              </div>

              {/* Currently Working On */}
              <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-xs sm:text-lg'>
                  Currently Working On
                </h2>

                <div className='flex flex-wrap gap-4 sm:gap-5'>

                  <Link
                    className="inline-block  h-7 w-10  bg-white shrink-0 border-2 rounded-full bg-cover bg-center "
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/ecNNUv9LpXbsk_3IPpdhgaPaH3JUlvfctS_jx1IeqvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI4L2Jm/L2YwLzI4YmZmMDcz/MWZiY2JkOWU5NTVk/ZWFmOTJmZjBjMDkw/LmpwZw')"
                    }}
                    to="#"
                    aria-label="MongoDB"
                  />

                  <Link
                    className="inline-block  h-7 w-10  bg-white shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/HF5ll3BAjYAxW0Blf1pd1U3Rgi4ZqS9CQ_jpgcmcFik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2V4cHJl/c3MtanMxNzIwODk1/NTAwLmxvZ293aWsu/Y29tLndlYnA')"
                    }}
                    to="#"
                    aria-label="Technology"
                  />

                  <Link
                    className="inline-block  bg-white  h-7 w-10 shrink-0 border-2 rounded-3xl bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/PBObDQhElLLghbtGfzIbbeZ_G5wGbf2rCuVZ7CMUum4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aGFzaG5vZGUuY29t/L3Jlcy9oYXNobm9k/ZS9pbWFnZS91cGxv/YWQvdjE2NDc0OTA2/MTk5NjUvUDFkc05n/ai1mMS5wbmc')"
                    }}
                    to="#"
                    aria-label="React"
                  />

                  <Link
                    className="inline-block  bg-white h-7 w-10 shrink-0 border-2 rounded-2xl bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/8YTKtuH5MSEf709be8D0D62vwCblQuxYvhyYG8LE12I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvbm9kZS1q/cy1sb2dvLXBuZ19z/ZWVrbG9nby0yNzM3/NDkucG5n')"
                    }}
                    to="#"
                    aria-label="Technology"
                  />

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className='w-full lg:w-1/2 flex justify-center items-center px-5 py-12 lg:py-0'>
          <div
            className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[30rem] lg:w-[30rem] max-w-full rounded-full bg-cover bg-center border-2"
            style={{ backgroundImage: `url(${ashif})` }}
          ></div>
        </div>

      </div>
    </div>
  )
}

export default Home

