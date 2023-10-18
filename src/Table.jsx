import React from 'react'
import {BsSearch} from 'react-icons/bs'

function Tables() {
    const data = [
        { name: "Abstract 3D",desc:"Larum ipsum ", stock: 32, price: "$45.99",sales:20 },
        { name: "Sarphens Illustration",desc:"Larum ipsum ", stock: 32, price: "$45.99",sales:20 },
    ]
  return (
    <div className='table'>
        <div className='table-head'>
            <div><h2>Product Sell</h2></div>
            <span><BsSearch/><input type='text' placeholder='Search'/><select>
                            <option value="Last 30 days">Last 30 days</option>
                            <option value="Last 7 days">Last 7 days</option>
                            <option value="Last 60 days">Last 60 days</option></select></span>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th></th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val,key)=>{
                        return(
                            <tr key={key}>
                                <td><h2>{val.name}</h2><p>{val.desc}</p></td>
                                <td></td>
                                <td>{val.stock} in stock</td>
                                <td>{val.price}</td>
                                <td>{val.sales}</td>
                            </tr>
                        )
                })}
                </tbody> 
            </table>
        </div>
    </div>
  )
}

export default Tables