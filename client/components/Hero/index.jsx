import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-center items-start w-full">
      <div className="bg-gray-100 dark:bg-transparent">
        <div className="container w-full mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
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
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 bg-red-600 transition duration-150 ease-in-out hover:bg-red-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-red-600 py-2 sm:py-4 text-sm">
                Giriş Yap
              </button>
            </Link>
            <Link href={"Register"}>
              <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 bg-transparent transition duration-150 ease-in-out hover:border-red-600 lg:text-xl lg:font-bold  hover:text-red-600 rounded border border-red-600 text-red-600 px-4 sm:px-10 py-2 sm:py-4 text-sm">
                Kayıt Ol
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
