
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
                Welcome in my Feed
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
                <h2 className='font-bold text-xs sm:text-sm'>
                  Available On
                </h2>

                <div className='flex gap-4'>

                  <Link
                    className="inline-block h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/Qv_D2kqdIX2LgyMBIYoRA-xME2vLON15Hudvsw9ZZds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9pbWFnZXMvaGlnaC9ibGFjay13aGl0ZS1mYWNlYm9vay1sb2dvLXY3aGkya3M2NDdkbGxudXYtMi5qcGc')"
                    }}
                    to="#"
                    aria-label="Facebook"
                  />

                  <Link
                    className="inline-block h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/aKZ_EPLyOd_Gzd2xUcBocHRgtVU19JkTi3ZVzcnwlIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWluc3RhZ3JhbS1s/b2dvLWljb24tc3Zn/LWRvd25sb2FkLXBu/Zy0xNjQ2NDA3LnBu/Zz9mPXdlYnAmdz0x/Mjg')"
                    }}
                    to="#"
                    aria-label="Instagram"
                  />

                  <Link
                    className="inline-block h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/DOy1BqsKr5AvLjLJmF5bNnVjKfVm2SMm9UdmcVCwHRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlem4uY29tL3N5c3RlbS9yZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMvOTAxLzgyNC9zbWFs/bC93aGF0c2FwcC1p/Y29uLWlvcy13aGF0/c2FwcC1zb2NpYWwt/bWVkaWEtbG9nby1v/bi13aGl0ZS1iYWNr/Z3JvdW5kLWZyZWUtZnJlZS12ZWN0b3IuanBn')"
                    }}
                    to="#"
                    aria-label="WhatsApp"
                  />

                  <Link
                    className="inline-block h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/OlCK120YawgWnYdlLYqPNPe6hKZCdk_9FIhR3mpxI90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNvbS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXRlbGVncmFtLWxv/Z28taWNvbi1zdmctZG93bmxvYWQtcG5nLTMyMDE1NjUucG5n')"
                    }}
                    to="#"
                    aria-label="Telegram"
                  />

                </div>
              </div>

              {/* Currently Working On */}
              <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-xs sm:text-sm'>
                  Currently Working On
                </h2>

                <div className='flex flex-wrap gap-4 sm:gap-5'>

                  <Link
                    className="inline-block h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/sP5Qwk0VzQxr6ido4czY-uuR_9Bcsqt1hBSYSJronVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMTMvTW9u/Z29kYi1QTkctUGlj/dHVyZS5wbmc')"
                    }}
                    to="#"
                    aria-label="MongoDB"
                  />

                  <Link
                    className="inline-block h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/gdQAeRMqXH_cBvzHr_Sg-54L5UvqmsXLYpuDUUZenLo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXItczMtY2RuLWNmLmJlaGFuY2UubmV0L3By/b2plY3RzLzQwNC85Zjk2ZmIxNDc0MTUzMTUuWTNKdmNDd3hO/VE0wTERFeU1EQXNNelFzTUEucG5n')"
                    }}
                    to="#"
                    aria-label="Technology"
                  />

                  <Link
                    className="inline-block h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/d15MZ_fPV-6XQonD5OEv84pecGuVYGXCNSV8oyk3A2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY29u/bG9nb3ZlY3Rvci5j/b20vdXBsb2Fkcy9pbWFnZXMvMjAyNC8xMC9sZy02NzE1MDZkNzExMzU0LVJlYWN0LndlYnA')"
                    }}
                    to="#"
                    aria-label="React"
                  />

                  <Link
                    className="inline-block h-6 w-6 shrink-0 border-2 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://imgs.search.brave.com/i8MK4oiIbnnDY9jXegQKwuBwh5u0Qm1ANJIjHxQYuvU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dvZGl4LmNvbS9sb2dvLzE3NjQ4OTIuanBn')"
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

