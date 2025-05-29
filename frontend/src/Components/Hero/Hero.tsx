import React from "react";
import hero from "./hero.png";
import incomeExample from "./income-example.png";
import searchExample from "./search-example.png";
import commentExample from "./comment-example.png";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-gray-900 via-slate-800 to-darkBlue text-white py-20 md:py-32"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main hero content */}
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between mb-16 md:mb-24">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Navigate the Market with{" "}
              <span className="text-lightGreen">Clarity</span>.
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0">
              Access comprehensive stock data, analyze financial statements, and
              track your portfolio—all in one streamlined platform. Make
              informed decisions without the noise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/register"
                className="inline-block py-4 px-8 text-lg font-semibold text-white bg-lightGreen rounded-lg shadow-lg hover:bg-green-500 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Get Started Free
              </Link>
              {/* <Link
                to="/login"
                className="inline-block py-4 px-8 text-lg font-semibold text-gray-300 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out"
              >
                Learn More
              </Link> */}
            </div>
          </div>
          {/* initial example */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={searchExample}
              alt="Stock Search Interface"
              className="rounded-xl shadow-2xl max-w-md lg:max-w-3xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* more features */}

        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-100">
            Powerful Features at Your Fingertips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <img
                src={searchExample}
                alt="Stock search results and portfolio tracking"
                className="rounded-lg shadow-xl mb-6 w-full max-w-lg object-contain transform transition duration-500 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mb-3 text-lightGreen">
                Effortless Search & Portfolio Management
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Quickly find company data by symbol or name. Seamlessly add
                stocks to your personalized portfolio and monitor your
                investments.
              </p>
            </div>

            {/* Feature 2  */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <img
                src={incomeExample}
                alt="Detailed income statement analysis"
                className="rounded-lg shadow-xl mb-6 w-full max-w-lg object-contain transform transition duration-500 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mb-3 text-lightGreen">
                Deep Dive into Financials
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Access detailed financial statements, including income
                statements, balance sheets, and cash flow data, presented
                clearly for easy analysis.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <img
                src={commentExample}
                alt="Stock comments and community discussion"
                className="rounded-lg shadow-xl mb-6 w-full max-w-lg object-contain transform transition duration-500 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mb-3 text-lightGreen">
                Engage & Share Insights
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Join the discussion! Leave your comments on specific stocks,
                read insights from other users, and gauge community sentiment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
