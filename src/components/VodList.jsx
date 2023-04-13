import React, { useEffect, useState } from "react";
import VodItem from "./VodItem";
import Loading from "./Loading";
import { HiOutlineViewList } from "react-icons/hi";
import { useNavigate, useSearchParams } from "react-router-dom";
import NoResults from "./NoResults";

const VodList = (props) => {
  const [query] = useSearchParams();
  const [toggle, setToggle] = useState(false);
  const [noRes, setNoRes] = useState(true);
  const nav = useNavigate();
  useEffect(() => {
    isNoRes();
    
  }, [query.get("s")]);

  const menuToggle = () => {
    setToggle(!toggle);
  };
  const years = [1989, 1990, 1995, 2000, 2005, 2010, 2020, 2021, 2022, 2023];
  const isNoRes = () => {
    if (props.vod_ar.length === 0) {
      setNoRes(false);
    } else if (props.vod_ar.length > 0) {
      setNoRes(true);
    }
  };
  return (
    <div>
      {props.loading ? (
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
              </div>
              {toggle ? (
                <div className="mr-4 h-auto block ">
                  {years.map((item, i) => {
                    return (
                      <a
                        onClick={() => nav(`/year/${years[i]}`)}
                        href=""
                        key={i}
                        className="ml-5 hover:text-white "
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
                  {props.vod_ar?.map((item) => {
                    return <VodItem key={item.imdbID} item={item} />;
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default VodList;
