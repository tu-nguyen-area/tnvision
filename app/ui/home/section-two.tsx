import Image from 'next/image';

const listContent = [
  { url: "/od1.png", title: "Object Detection and Tracking", content: "Our object detection and recognition solutions are sure to pay off in such spheres as industrial safety, fashion analytics, cashier-less stores, road safety and lots more.", },
  { url: "/os1.png", title: "Object Segmentation", content: "Algorithms we offer can be used for quick real-time segmentation of different objects and scenes in complex environments, making it ideal for a range of applications, including virtual reality, gaming, and AR.", },
  { url: "/pe1.png", title: "Pose Estimation", content: "Our pose estimation, people tracking and detection solutions are built using state-of-the-art algorithms and deep learning techniques, making them highly accurate and reliable even in complex environments with multiple people and objects.", },
  { url: "/cc1.png", title: "Camera Calibration", content: "We excel in camera calibration, including fisheye lenses, and have developed a custom calibration system that supports angles exceeding 180 degrees. Our expertise also extends to camera autocalibration solutions, which can adapt to changing environments without the need for manual calibration.", },
];

export default function SectionTwo() {
  return (
    <>

      <section className="m-12">
        <div className="text-xl">
          <div className="grid justify-center md:justify-start">
            <p className="text-2xl md:text-3xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center w-fit">Our Services</p>
            <p className="font-bold">Practical AI solutions for startups and large companies.</p>
            <p className="font-bold">Meet your next custom AI.</p>
          </div>
          <div className="md:grid grid-cols-2 gap-10 place-items-center mt-10">
            {listContent.map((content) => {
              return (
                <div key={content.title} className="p-3 md:p-12">
                  <div className="flex justify-center">
                    <Image className="rounded-xl w-full"
                      src={content.url}
                      width={3000}
                      height={2}
                      alt="image"
                    />
                  </div>
                  <div className="">
                    <div className="flex justify-center">
                      <p className="text-2xl md:text-3xl bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center w-fit">{content.title}</p>
                    </div>
                    <p className="text-xl text-center md:text-left">{content.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-0.5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      </section>

    </>
  );
}
