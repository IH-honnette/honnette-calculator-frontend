import React from 'react';
import {GridComponent, ColumnDirective, ColumnsDirective,
Resize, Sort, ContextMenu, Filter, Page, ExcelExport,
PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Button } from '../components';
import { 
  earningData,  
  ordersData,
  ordersGrid} from '../data/dummy';
import {Header } from '../components'

const Dashboard = () => {

  const AddProduct =() => {}

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3'
        style = {{backgroundImage: "https://blog.vantagecircle.com/content/images/2021/06/Profit-Sharing.png"}}>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Total Profit</p>
              <p className='text-2xl'>$63,448.89<sub className="text-amber-500 text-sm">/per month</sub></p>
            </div>
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
               key={item.title}
               className='bg-white dark:text-gray-200 
               dark:bg-secondary-dark-bg md:w-56 p-4 pt-8 rounded-2xl'
            >
              <button type='button'
              style={{color: item.iconColor,
              backgroundColor: item.iconBg}}
              className="text-2xl opacity-0.9 rounded-full
              p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                   {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
        {/* Products table */}
      <div className='m-3 bg-white rounded-xl'>
        {/* <Header title="Products" /> */}
        <Button 
               color="white"
               bgColor="#45D1DA"
               text="+ Add Product"
               borderRadius ="10px"
               size="md"
               margin = "2px"
               clicked={AddProduct}
        />
        <p className="text-center">Products</p>
        <GridComponent
            id="gridcomp"
            dataSource ={ordersData}
            allowPaging
            allowSorting
        >
          <ColumnsDirective>
            {ordersGrid.map((item, index) => (
              <ColumnDirective
                key={index} {...item}
              />
              
            ))}
          </ColumnsDirective>
          <Inject services={[Resize,Sort ,
          ContextMenu, Filter, Page, ExcelExport, Edit,
          PdfExport]}/>
        </GridComponent> 
      </div>
    </div>
  )
}

export default Dashboard;