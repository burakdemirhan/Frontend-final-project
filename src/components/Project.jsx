export default function Project() {
  return (
    <div className="flex justify-between gap-6  p-4">
      {/* İlk Kart */}
      <div className="w-[20rem] h-[30rem] bg-white rounded-lg shadow-lg">
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
          className="h-[10rem] w-full object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h5 className="text-[#4338CA] font-semibold">Workintech</h5>
          <p className="text-[#6B7280] mt-2 text-sm">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="bg-whitw text-[#3730A3] px-3 py-1 rounded-lg text-xs">
              React
            </button>
            <button className="bg-whitw text-[#3730A3] px-3 py-1 rounded-lg text-xs">
              Redux
            </button>
            <button className="bg-whitw text-[#3730A3] px-3 py-1 rounded-lg text-xs">
              Axios
            </button>
          </div>
          <div className="mt-4 flex justify-between">
            <a href="#" className="text-[#3730A3] text-sm">
              Github
            </a>
            <a href="#" className="text-[#3730A3] text-sm">
              View Site
            </a>
          </div>
        </div>
      </div>

      <div className="w-[20rem] h-[30rem] bg-white rounded-lg shadow-lg">
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
          className="h-[10rem] w-full object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h5 className="text-[#4338CA] font-semibold">Random Jokes</h5>
          <p className="text-[#6B7280] mt-2 text-sm">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="bg-whitw text-[#3730A3] px-3 py-1 rounded-lg text-xs">
              React
            </button>
            <button className="bg-whitw text-[#3730A3] px-3 py-1 rounded-lg text-xs">
              Redux
            </button>
            <button className="bg-whitw text-[#3730A3] px-3 py-1 rounded-lg text-xs">
              Axios
            </button>
          </div>
          <div className="mt-4 flex justify-between">
            <a href="#" className="text-[#4338CA] text-sm">
              Github
            </a>
            <a href="#" className="text-[#4338CA] text-sm">
              View Site
            </a>
          </div>
        </div>
      </div>

      <div className="w-[20rem] h-[30rem] bg-white rounded-lg shadow-lg">
        <img
          alt="Sample"
          src="https://picsum.photos/300/200"
          className="h-[10rem] w-full object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h5 className="text-[#4338CA] font-semibold">Journey</h5>
          <p className="text-[#6B7280] mt-2 text-sm">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="bg-whitw text-[#3730A3] px-3 py-1 rounded-lg text-xs">
              React
            </button>
            <button className="bg-whitw text-[#3730A3] px-3 py-1 rounded-lg text-xs">
              Redux
            </button>
            <button className="bg-whitw text-[#3730A3] px-3 py-1 rounded-lg text-xs">
              Axios
            </button>
          </div>
          <div className="mt-4 flex justify-between">
            <a href="#" className="text-[#4338CA] text-sm">
              Github
            </a>
            <a href="#" className="text-[#4338CA] text-sm">
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
