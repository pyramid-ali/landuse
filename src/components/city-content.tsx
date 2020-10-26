import React from "react"
import VerticalNavbar from "./vertical-navbar"
import AdvantageTable from "./advantage-table"

type TODO = any

type CityContentType = {
  menu: TODO
  advantage: TODO
  children: React.ReactNode
}

const CityContent: React.FC<CityContentType> = ({
  menu,
  advantage,
  children,
}) => {
  return (
    <div className="w-screen">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <VerticalNavbar items={menu} />
          <div className="flex-1 pl-8 pr-12 bg-white py-8">{children}</div>
          <div className="flex flex-col">
            <div className="sticky overflow-y-auto bottom-0">
              <AdvantageTable items={advantage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityContent