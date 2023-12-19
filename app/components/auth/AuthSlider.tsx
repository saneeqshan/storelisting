const AuthSlider = () => {
  return (
    <div className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9">
      <div className="h-screen bg-cover relative p-5 ">
        <div className="absolute inset-0 bg-[#4db547]"></div>

        <ul className="bg-bubbles absolute top-0 left-0 w-full h-full overflow-hidden animate-square">
          <li className="h-10 w-10 rounded-3xl bg-white/10 absolute left-[10%] "></li>
          <li className="h-28 w-28 rounded-3xl bg-white/10 absolute left-[20%]"></li>
          <li className="h-10 w-10 rounded-3xl bg-white/10 absolute left-[25%]"></li>
          <li className="h-20 w-20 rounded-3xl bg-white/10 absolute left-[40%]"></li>
          <li className="h-24 w-24 rounded-3xl bg-white/10 absolute left-[70%]"></li>
          <li className="h-32 w-32 rounded-3xl bg-white/10 absolute left-[70%]"></li>
          <li className="h-36 w-36 rounded-3xl bg-white/10 absolute left-[32%]"></li>
          <li className="h-20 w-20 rounded-3xl bg-white/10 absolute left-[55%]"></li>
          <li className="h-12 w-12 rounded-3xl bg-white/10 absolute left-[25%]"></li>
          <li className="h-36 w-36 rounded-3xl bg-white/10 absolute left-[90%]"></li>
        </ul>
      </div>
    </div>
  );
};

export default AuthSlider;
