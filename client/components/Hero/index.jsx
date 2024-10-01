import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-center items-start w-full mt-16">
      <div className="">
        <div className="container w-full mx-auto flex flex-col items-center">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <Link href={"/Features"} className="mb-6 group">
              <button className="relative h-8 w-64 rounded-full overflow-hidden border border-red-600 text-red-600 shadow-2xl transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-red-600 before:duration-500 before:ease-out hover:text-white hover:shadow-red-600 hover:before:h-40 hover:before:w-64 hover:before:opacity-100">
                <span className="flex relative items-center justify-center z-10">
                  Platformu keşfet!
                  <svg
                    className="ml-3 lg:ml-6 hidden group-hover:inline-block transition-all duration-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={10}
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 8.53662H19"
                      stroke="#ffffff"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            <h1 className="flex flex-col w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
              Merhaba!
              <span className="w-full text-red-600">
                Büyük Anadolu Hastanesi
              </span>
              Eğitim Platformuna
              <span>Hoş Geldiniz!</span>
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-500 font-normal text-center text-sm sm:text-lg">
              Büyük Anadolu Hastanesi Eğitim Platformu, sağlık profesyonelleri
              için güncel bilgiye kolayca erişim sağlayan dijital bir öğrenme
              merkezidir. İleri eğitim programları, interaktif içerikler ve
              uzman rehberliği ile mesleki gelişiminizi desteklemek için
              tasarlanmıştır.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link href={"/Login"}>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 bg-red-600 transition duration-150 ease-in-out hover:bg-red-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-red-600 py-2 sm:py-2 text-sm">
                Giriş Yap
              </button>
            </Link>
            <Link href={"Register"}>
              <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 bg-transparent transition duration-150 ease-in-out hover:border-red-600 lg:text-xl lg:font-bold  hover:text-red-600 rounded border border-red-600 text-red-600 px-4 sm:px-10 py-2 sm:py-2 text-sm">
                Kayıt Ol
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
