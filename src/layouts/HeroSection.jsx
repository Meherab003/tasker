const HeroSection = () => {
  return (
    <section className="pb-[114px] xl:mb-16 pt-20 md:mt-[50px]">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="max-md:w-full"
              src="/frame.png"
              width="326"
              height="290"
              alt="frame"
            />
          </div>
          <div className="px-3">
            <h1 className="mb-1.5 text-[40px] font-bold leading-none text-orange-300 font-mono lg:text-[73px]">
              Tasker.
            </h1>
            <p className="xl:text-lg my-2 opacity-60">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
