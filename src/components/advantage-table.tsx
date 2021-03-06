import React from "react"

type AdvantageTableType = {
  items?: undefined | null | Array<string>
}

const AdvantageTable: React.FC<AdvantageTableType> = ({ items }) => {
  if (!items) {
    return null
  }

  const body = items.map((item, index) => (
    <tr key={"advantage" + index}>
      <td className="border px-4 py-2">{item}</td>
      <td className="border px-4 py-2">{index + 1}</td>
    </tr>
  ))

  return (
    <table className="w-full md:w-56 table-auto bg-white rounded">
      <thead>
        <tr>
          <th className="border px-4 py-2">مشاغل</th>
          <th className="border px-4 py-2">مزیت</th>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  )
}

export default AdvantageTable
