import { Alert, Button, Input, Typography } from '@material-tailwind/react'
import  { useContext, useState } from 'react'

import { BsTrashFill,BsFillEyeSlashFill,BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import { GlobalContext } from '../context/Global';

const AddProduct = () => {
  const {show,setShow,products,AddProduct} =useContext(GlobalContext)
const [form, setForm] = useState({});

const onChangeHandler = (e) => {
setForm({
  ...form,
  id: parseInt(products.length + 1) ,
  [e.target.name]: e.target.value,
})
}

const submitHandler = (e) => {
  e.preventDefault()
  AddProduct(form)
 
}
  return (
    <div>
      
      <Alert >
        <div className='flexB'>
          <Typography variant="h6" color='blue-gray' >All products : </Typography>
          <Button color='amber'onClick={()=>setShow(!show)}
          >{!show ? <BsFillEmojiHeartEyesFill/> :<BsFillEyeSlashFill/> }</Button>
        </div>
      </Alert>


      {!show && (
      <div className="flex mx-auto my-4 w-96 flex-col gap-4 bg-white p-4 rounded">
         
            <form onSubmit={submitHandler}>
              <Input color="blue" label="Tile" name='tile'onChange={onChangeHandler}  />
              <Input color="purple" label="Price" name='price' onChange={onChangeHandler} />
              <Input color="indigo" label="Description"  name='descriptiononChange={onChangeHandler} '/>
              <Input color="teal" label="Image" name='image'onChange={onChangeHandler} />
              <Input color="teal" label="Category" name='category'onChange={onChangeHandler}  />
              <Button type='submit' >Submit</Button>
            </form>
         
      </div>
      )}
    </div>
  )
}

export default AddProduct
