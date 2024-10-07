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
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div
            className="flex relative justify-center items-center dark:text-gray-200 dark:bg-secondary-dark-bg
              w-full lg:w-96 p-8"
          >
            <img
              className="rounded-xl"
              src={HeroPattern}
              alt="hero-pattern"
            />

            <div className=" flex justify-center items-center flex-col absolute left-20 lg:left-[3.5rem] gap-8 lg:gap-4 ">
              <div>
                <p className="text-gray-300 text-lg tracking-wide lg:text-sm">
                  Earnings
                </p>
                <p className=" text-white font-semibold text-3xl lg:text-[1.7rem] lg:font-normal">
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
        </div>
      </section>
    </>
  );
}

export default Ecommerce;
