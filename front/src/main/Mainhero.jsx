
import { motion } from "framer-motion";
import Footer from "../footer/Footer"

const MainHero = () => {
 

 
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>


        <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:mt-20 md:auto">
          <div className="mt-32 ">
          <motion.div
              className=" sm:mb-4 sm:flex sm:justify-center font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
            <p className="relative rounded-full py-3 lg:text-xl md:text-lg sm:text-sm leading-6 text-white transition-all duration-300 animate-pulse font-['DungGeunMo']">
                꿈을 향해 날아 오르시려는 당신을 응원합니다. 저희는 당신의 취업
                여정을 빛낼 AI 컨설턴트입니다.
            </p>
            </motion.div>
            
          </div>
          <div className="mx-auto mt-32">
            <div className="text-center mt-4">
              <h1 className="text-4xl font-bold text-white sm:text-6xl font-['gf']">
                Ai 직무능력 나침반
              </h1>
              <span className="flex flex-row mt-8 text-2xl leading-8 text-gray-300 items-center justify-center">
                <span className="flex flex-row pb-1 text-3xl font-bold text-indigo-500">
                  Ai
                </span>
                <span className="relative flex h-2 w-2 mb-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="ml-1 font-['gf']">
                  커리어분석을 통해 성장을 경험해보세요 !{" "}
                </span>
              </span>
            </div>
            <div className="mt-16">
            <motion.div
              className=" sm:mb-4 sm:flex sm:justify-center font-bold "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-full px-3 py-1 text-md leading-6 text-indigo-500 ring-1 ring-white/10 hover:ring-white/20 hover:bg-indigo-700 hover:text-white transition-all duration-300 font-['gf']">
                Ai를 통해 당신의 커리어를 설계받고 싶다면?{" "}
                <a
                  href="/account"
                  className="text-xl font-['gf'] text-gray-100 px-3"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  직무능력은행 기반 Ai 분석{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              className=" sm:mb-4 sm:flex sm:justify-center font-bold mt-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative rounded-full px-3 py-1 text-md leading-6 text-yellow-500 ring-1 ring-white/10 hover:ring-white/20 hover:bg-yellow-700 hover:text-white transition-all duration-300 font-['gf']">
                원하는 직업 능력을 키우고 싶으신가요?{" "}
                <a
                  href="/serch"
                  className="text-xl font-['gf'] text-gray-100 px-3"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  직업 능력 훈련 검색 <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
            </div>
          </div>

          
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
          
        </div>
        <div className="mt-32">
        <Footer />
        </div>
       
      </div>
    </>
  );
};

export default MainHero;
