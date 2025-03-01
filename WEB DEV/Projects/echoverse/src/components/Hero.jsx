import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import video3 from "../assets/video3.mp4"
import video4 from "../assets/video4.mp4"
function Hero() {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7cl text-center tracking-wide">
                EchoVerse Build
                <span className="bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text"> {" "}for developers</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae rem sunt minus quas, error doloremque ea non itaque fugit qui. Eius fuga sit. Lorem, ipsum dolor sit amet.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-800 py-3 px-4 mx-3 rounded-md">
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                    Documentation
                </a>
            </div>
        
            <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-cyan-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-cyan-700 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
            
        </div>
    );
}

export default Hero