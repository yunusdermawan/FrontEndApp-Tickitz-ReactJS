import React from "react"


function ButtonGroups() {
    return (
        <>
            <div className="inline">
              <button className="btn btn-active btn-primary mr-2 w-32">September</button>
              <button className="btn btn-outline mr-2 w-32">October</button>
              <button className="btn btn-outline mr-2 w-32 hidden">November</button>
              <button className="btn btn-outline mr-2 w-32 hidden sm:inline">December</button>
              <button className="btn btn-outline mr-2 w-32 hidden sm:inline">January</button>
              <button className="btn btn-outline mr-2 w-32 hidden sm:inline">February</button>
              <button className="btn btn-outline mr-2 w-32 hidden lg:inline">March</button>
              <button className="btn btn-outline mr-2 w-32 hidden xl:inline">April</button>
              <button className="btn btn-outline mr-2 w-32 hidden 2xl:inline">May</button>
            </div>
        </>
    )
}

export default ButtonGroups