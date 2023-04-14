import React from "react";
import axios from "axios";
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { HiOutlineViewList } from "react-icons/hi";
import NoResults from "./NoResults";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import Header from "./Header";
import VodItem from "./VodItem";

const Years = () => {
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [noRes, setNoRes] = useState(true);
  const { year } = useParams();
  const nav = useNavigate();
  const [querys] = useSearchParams();
  const [ar, setAr] = useState([]);

  useEffect(
    () => {
      let searchQ = querys.get("s") || "bank";
      doApi(searchQ, year);
      isNoRes()
    },
    [querys.get("y")]
   
  );

  const doApi = async (_searchQ, year) => {
    const url = `https://www.omdbapi.com/?s=${_searchQ}&y=${year}&apikey=6ff60cd9`;
    const { data } = await axios.get(url);
    setAr(data.Search);
    setLoading(false);
    isNoRes();
    console.log(ar);
  };
  const menuToggle = () => {
    setToggle(!toggle);
  };
  const years = [1989, 1990, 1995, 2000, 2005, 2010, 2020, 2021, 2022, 2023];
  const isNoRes = () => {
    if (ar.length === 0) {
      setNoRes(true);
    }
    if (ar.length > 0) {
      setNoRes(false);
    }
  };

  return (
    <div className="    ">
      <Header />
      <h1 className="bg-slate-700 text-center font-bold">years</h1>

      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="mx-auto p-1  bg-slate-700 text-slate-300">
            <p className="text-2xl m-1 pl-5  text-white">Years Top</p>
            <div>
              <div className="justify-between items-center   ">
                <div className="mr-[40%] max-sm:hidden">
                  {years.map((item, i) => {
                    return (
                      <a
                        onClick={() => nav(`/year/${years[i]}`)}
                        href=""
                        key={i}
                        className="m-2 hover:text-white "
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>
                <div
                  className="relative bottom-7 left-[90%]"
                  onClick={menuToggle}
                >
                  <HiOutlineViewList className="md:hidden xl:hidden lg:hidden    border rounded text-4xl" />
                  {toggle ? (
                    <div className=" h-auto block ">
                      {years.map((item, i) => {
                        return (
                          <a
                            onClick={() => nav(`/year/${years[i]}`)}
                            href=""
                            key={i}
                            className=" hover:text-white "
                          >
                            {item}
                            <br />
                          </a>
                        );
                      })}
                    </div>
                  ) : (
                    " "
                  )}
                  <div>

                  </div>
                </div>
              </div>
              <div></div>
              <div className="border-b-2 p-3 mx-4"></div>
              <div>
                {noRes ? (
                  <div>
                    <NoResults />
                  </div>
                ) : (
                  <div className=" flex flex-wrap bg-slate-700 sm:w-[90%] md:w-[80%] xl:w-[80%] mx-auto  py-5 ">
                    {ar.map((item) => {
                      return <VodItem key={item.imdbID} item={item} />;
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Years;
