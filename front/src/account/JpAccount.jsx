
import JobPositionAccountPDFInput from "./JPApdf";
import Navbar from "../nav/Navbar";
import AccountImage from "../img/account.png";
import OtherFooter from "../footer/Footer";

const JobPositionAccountPage = () => {

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 sm:pb-20">
        <Navbar />
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
        <div>
        <div>
        <div className="text-center mt-8">
          <h1 className="flex items-center justify-center font-bold tracking-tight text-white">
            <p className="font-['gf'] text-lime-500 text-3xl">직무능력은행</p>
            <span className="font-['gf'] text-2xl mt-2 ml-1">{""}에 오신 것을 환영합니다.</span>
          </h1>
          <div className="font-['gf'] mt-10 text-md font-semibold leading-8 text-gray-300">
            직무능력은행에서는 직무능력계좌를 통해
            <div className="font-['gf'] text-yellow-500 text-xl items-center">
              자격 훈련 교육 경력{" "}
              <span className="font-['gf'] text-white text-lg ml-1">등</span>
            </div>
            <div>
              직무 능력 정보를 바탕으로{" "}
              <span className="font-['gf'] text-white text-2xl ml-1 mr-1">Ai</span> 커리어
              패스 상담을 받으실 수 있습니다.
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="font-['gf'] flex items-center justify-center sm:w-1/3 lg:w-1/4 border m-8 flex-row relative rounded-full px-3 py-1 text-md leading-6 font-semibold text-orange-100 ring-1 ring-white/10 hover:ring-white/20">
            <a
              href="https://bank.ncs.go.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['gf']"
            >
              직무능력계좌 발급 받는 곳
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          className=" mx-auto max-w-4xl px-6 lg:px-8 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${AccountImage})` }}
        >
          <JobPositionAccountPDFInput />
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
        </div>
        </div>
        <OtherFooter />
      </div>
    </div>
  );
};

export default JobPositionAccountPage;
