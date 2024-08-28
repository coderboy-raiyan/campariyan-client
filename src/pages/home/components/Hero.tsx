function Hero() {
  return (
    <section>
      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="w-[40%] flex flex-col justify-center">
          <h1 className="text-7xl font-semibold leading-relaxed">Camping</h1>
          <p className="w-[71%]  text-gray-600">
            Create your dream campsite with our camping essentials. Under the
            stars, every night is an adventure waiting to unfold.
          </p>
        </div>

        <div className="w-[60%] relative">
          <div className="h-[400px] w-full bg-blend-overlay bg-cover bg-center bg-no-repeat bg-[url('https://contents.mediadecathlon.com/s1045801/k$f565435ab9f757520f7ff22b34494a77?format=auto&f=969x0')]"></div>
          <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
