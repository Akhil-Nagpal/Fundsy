import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
// import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  Stacked,
  Pie,
  Button,
  LineChart,
  SparkLine,
} from "../components/index";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import HeroPattern from "../assets/hero-pattern.png";

function Ecommerce() {
  return (
    <>
      <section className="mt-24">
        <div className="overflow-hidden flex flex-wrap lg:flex-nowrap justify-center">
          {/* Hero Section */}
          <div
            className="flex items-center dark:text-gray-200 rounded-lg lg:m-4 mt-6 m-4
            dark:bg-secondary-dark-bg w-full lg:w-80 bg-center bg-cover bg-no-repeat p-8"
            style={{ backgroundImage: `url(${HeroPattern})` }}
          >
            <div className="flex flex-col justify-center items-start gap-3">
              <div>
                <p className="text-gray-300 text-lg tracking-wide lg:text-sm">
                  Earnings
                </p>
                <p className="text-white font-semibold text-3xl lg:text-[1.7rem] lg:font-semibold">
                  $76,874
                </p>
              </div>

              <Button
                color="blue"
                bgColor="white"
                size="lg"
                borderRadius="10px"
                text="Download"
              />
            </div>
          </div>

          {/* Revenue Cards - Hero Section */}
          <div className="flex flex-wrap justify-start items-center gap-3">
            {earningData.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="flex flex-col justify-center items-center bg-white p-4 rounded-2xl dark:text-gray-200 dark:bg-secondary-dark-bg"
                >
                  <button
                    className="text-2xl p-4 rounded-full opacity-0.9 hover:drop-shadow-xl"
                    style={{
                      backgroundColor: item?.iconBg,
                      color: item?.iconColor,
                    }}
                  >
                    {item?.icon}
                  </button>

                  <div className=" mt-3 flex items-center gap-2">
                    <p className="text-lg font-semibold">
                      {item?.amount}
                    </p>
                    <p className={`text-sm text-${item?.pcColor}`}>
                      {item?.percentage}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">
                    {item?.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Ecommerce;
