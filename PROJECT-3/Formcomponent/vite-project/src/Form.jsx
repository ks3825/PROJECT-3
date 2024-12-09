import React , { useState }from 'react'


const Form = () => {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [id,setId] = useState("")
  const [data,setData] = useState([])
  const handleChange = (e)=>{
      
      setName(e.target.value)
  }
  const saveData = (e)=>{
      e.preventDefault()
      console.log(name);
      console.log(age);
      if(id!=''){
        
        let res = data.map((i,index)=>{
            if(index==id){
                i.name = name
                i.age = age
            }
            return i
        })
        setData(res)
      } else {
        
        setData([...data,{name:name,age:age}])
      }
      setName("")
      setAge("")
      setId("")
  }
  const delData = (id)=>{ 
      let res = data.filter((i,index)=>{
          return index!=id
      })
      setData(res)
  }
  const editData = (id)=>{ 
    let res = data.find((i,index)=>{
        return index==id
    })
    setName(res.name)
    setAge(res.age)
    setId(id)
}

  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={handleChange}/><br /><br />

        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" value={age} onChange={(e)=>setAge(e.target.value)}/><br /><br />
        <input type="submit" value="Save Data" />
      </form>
      <br /><br />
      <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
        {
            data.map((i,index)=>{
                return (
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>
                        <button onClick={()=>editData(index)}>Edit</button>
                  
                          <button onClick={()=>delData(index)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Form
 


     
    