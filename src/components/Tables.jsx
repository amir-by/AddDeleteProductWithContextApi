import { Table } from 'flowbite-react'
import { useContext, useEffect, useState } from 'react';
import { BsTrashFill,BsFillEyeSlashFill,BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { GlobalContext } from '../context/Global';
 
const Tables = () => {

  const {fetchProducts,products,deleteProduct} = useContext(GlobalContext);
  useEffect(() => {fetchProducts() },[])
 
  return (
    <div>
      <Table hoverable={true} className='w-auto mx-auto my-8'>
            <Table.Head>
              <Table.HeadCell>
                Title
              </Table.HeadCell>
              <Table.HeadCell>
              Price
              </Table.HeadCell>
              <Table.HeadCell>
              Description
              </Table.HeadCell>

              <Table.HeadCell>
              Image
              </Table.HeadCell>
              <Table.HeadCell>
              Category
              </Table.HeadCell>
              <Table.HeadCell>
              Action
              </Table.HeadCell>
            </Table.Head>

            <Table.Body className="divide-y">
              {products?.map(({id,title,price,description,image,category},i) => {
                return (
                  <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className=" whitespace-wrap font-medium text-gray-900 dark:text-white">
                  {title }
                </Table.Cell>
                <Table.Cell>
                  {price}
                </Table.Cell>
                <Table.Cell>
                  description {id}
                </Table.Cell>

                <Table.Cell  >
                  <img src={image} alt="img" className='h-14 w-14' />
                </Table.Cell>
                <Table.Cell>
                    {category}
                </Table.Cell>

                <Table.Cell>
                  <BsTrashFill onClick={()=>deleteProduct(id)} /> 
                </Table.Cell>

              </Table.Row>
                )
              })
              }

            </Table.Body>

</Table>
    </div>
  )
}

export default Tables
