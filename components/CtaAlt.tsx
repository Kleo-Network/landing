import Link from 'next/link'

export default function Cta() {
  return (
    <div className="fixed bottom-0 z-30 w-full lg:w-1/2 bg-white dark:bg-slate-950 !bg-opacity-80 backdrop-blur-sm">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        <div className="flex py-4 md:py-6 space-x-4">
          <Link className="btn w-full text-white bg-blue-500 hover:bg-blue-600 shadow shadow-black/5 animate-shine bg-[linear-gradient(100deg,theme(colors.blue.500),45%,theme(colors.blue.400),55%,theme(colors.blue.500))] bg-[size:200%_100%] hover:bg-[image:none]" href="https://connect.kleo.network" target='_blank'>$KLEO Connect</Link>
        </div>
      </div>
    </div>
  )
}
