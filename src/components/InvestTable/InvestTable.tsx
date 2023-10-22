import { Fragment } from "react"
import { Data } from "../../types/Data"

type Props = {
  data: Data[]
}

export default function InvestTable({ data = [] }: Props) {
  console.log(data.length);
  if(data.length <= 1) {
    return null
  }

  return (
    <section className="relative overflow-x-auto">
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tr>
            <th scope="col" className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>Year</th>
            <th scope="col" className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>Total Savings</th>
            <th scope="col" className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>Interest (Year)</th>
            <th scope="col" className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>Total Interest</th>
            <th scope="col" className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider'>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((dataObject: Data) => (
              <Fragment key={dataObject.year}>
                <tr>
                  <td scope="row" className="px-5 py-5 border-b border-gray-200 text-sm">{dataObject.year}</td>
                  <td scope="row" className="px-5 py-5 border-b border-gray-200 text-sm">${dataObject.totalSaving}</td>
                  <td scope="row" className="px-5 py-5 border-b border-gray-200 text-sm">${dataObject.interest}</td>
                  <td scope="row" className="px-5 py-5 border-b border-gray-200 text-sm">${dataObject.totalInterest}</td>
                  <td scope="row" className="px-5 py-5 border-b border-gray-200 text-sm">${dataObject.investedCapital}</td>
                </tr>
              </Fragment>
            ))
          }
        </tbody>
      </table>
    </section>
  )
}
