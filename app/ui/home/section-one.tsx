export default function SectionOne() {
  return (
    <>

    <div>
      <div className="brightness-50">
      <video width="100%" height="100%" autoPlay muted playsInline loop>
        <source src="oc1.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="m-12">
        <div className="mb-10 absolute top-[10%] sm:top-2/4">
          <p className="text-2xl sm:text-6xl text-white">Computer Vision software and Services</p>
          <p className="text-white">Automate, innovate, and deliver better customer experiences with custom AI solutions</p>
          <p className="text-white">The next AI Vision in your hands</p>
        </div>

      <div className="p-0.5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <div className="flex justify-around sm:m-24 m-6">
        <div className="rounded-xl p-2 m-2 w-20 sm:p-12 sm:w-48 text-center text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <p className="sm:text-6xl">85%</p>
          <p className="sm:text-2xl text-xs">Faster Time to Value</p>
        </div>
        <div className="rounded-xl p-2 m-2 w-20 sm:p-12 sm:w-48 text-center text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <p className="sm:text-6xl">6.9x</p>
          <p className="sm:text-2xl text-xs">Return on Investment</p>
        </div>
        <div className="rounded-xl p-2 m-2 w-20 sm:p-12 sm:w-48 text-center text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <p className="sm:text-6xl">75%</p>
          <p className="sm:text-2xl text-xs">Lower Total Cost</p>
        </div>
      </div>
      <div className="p-0.5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      </div>
    </div>

    </>
  );
}
