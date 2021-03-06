import * as React from "react"
import { navigate } from "gatsby"
import Map from "components/map"
import MapList from "components/map-list"

import IranMap from "maps/iran.svg"
import Provinces from "fixtures/provinces.json"
import Container from "components/container"
import Search from "components/search"
import Slider from "components/slider"

export default function Home() {
  const [hovered, setHovered] = React.useState<string | null>(null)

  const navigateToProvince = (code: string) => {
    navigate("provinces/" + Provinces[code].en)
  }

  return (
    <div className="w-full">
      <div>
        <Slider />
      </div>

      <div className="pt-2">
        <div className="search-background w-full">
          <div className="w-full px-8 md:px-0 md:w-2/3 lg:w-1/2 mx-auto py-40">
            <Search />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center px-12 py-8 ">
        <div className="flex-1">
          <MapList
            link={code => "provinces/" + Provinces[code].en}
            data={Provinces}
            onHover={province => setHovered(province)}
            onLeave={() => setHovered(null)}
            focus={hovered}
          />
        </div>

        <div className="flex-1 py-4 lg:px-8">
          <Map
            SVG={IranMap}
            onHover={province => setHovered(province)}
            onLeave={() => setHovered(null)}
            onSelect={navigateToProvince}
            focus={hovered}
          />
        </div>
      </div>
    </div>
  )
}
