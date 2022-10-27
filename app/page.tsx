import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-32">
      <Image
        className="rounded-full pixelated"
        alt="Rob's avatar"
        src="/img/profile.jpg"
        width={180}
        height={180}
      />
      <h1 className="pt-6 text-5xl font-bold text-amber-300">Rob Harding</h1>
      <p className="mx-4 pt-1 text-xl text-center text-gray-300">
        A software engineer from Toronto. <br />
        When I&apos;m not skiing, I like to code.
        <br />
        <span className="text-gray-400 block mt-2">Located in Fernie, BC.</span>
      </p>
      <div className="flex items-center mt-2 text-xl text-amber-200">
        <a href="" className="p-3">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a href="" className="p-3">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
}
