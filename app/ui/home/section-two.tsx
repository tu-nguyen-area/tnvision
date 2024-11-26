import Image from 'next/image';

export default function SectionTwo() {
  return (
    <>

      <div className="m-12">
        <div className="mb-10">
        <p className="text-xl">Our Services</p>
        <p>Practical AI solutions for startups and large companies.</p>
        <p>Meet your next custom AI.</p>
        <div className="sm:grid grid-cols-2 gap-10 mt-10">
          <div>
            <Image className="rounded-xl h-80"
              src="/od1.png"
              width={600}
              height={2}
              alt="image"
            />
            <p className="text-xl">Object Detection and Tracking</p>
            <p className="sm:w-6/12">Our object detection and recognition solutions are sure to pay off in such spheres as industrial safety, fashion analytics, cashier-less stores, road safety and lots more.</p>
          </div>
          <div className="mt-10 sm:mt-0">
            <Image className="rounded-xl h-80"
              src="/os1.png"
              width={600}
              height={2}
              alt="image"
            />
            <p className="text-xl">Object Segmentation</p>
            <p className="sm:w-6/12">Algorithms we offer can be used for quick real-time segmentation of different objects and scenes in complex environments, making it ideal for a range of applications, including virtual reality, gaming, and AR.</p>
          </div>
          <div className="mt-10 sm:mt-0">
            <Image className="rounded-2xl h-80"
              src="/pe1.png"
              width={600}
              height={2}
              alt="image"
            />
            <p className="text-xl">Pose Estimation</p>
            <p className="sm:w-6/12">Our pose estimation, people tracking and detection solutions are built using state-of-the-art algorithms and deep learning techniques, making them highly accurate and reliable even in complex environments with multiple people and objects.</p>
          </div>
          <div className="mt-10 sm:mt-0">
            <Image className="rounded-xl h-80"
              src="/cc1.png"
              width={600}
              height={2}
              alt="image"
            />
            <p className="text-xl">Camera Calibration</p>
            <p className="sm:w-6/12">We excel in camera calibration, including fisheye lenses, and have developed a custom calibration system that supports angles exceeding 180 degrees. Our expertise also extends to camera autocalibration solutions, which can adapt to changing environments without the need for manual calibration.</p>
          </div>
        </div>
        </div>

        <div className="p-0.5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      </div>

    </>
  );
}
