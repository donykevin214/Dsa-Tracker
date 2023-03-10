import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Questions({name,qlist,Checked,setChecked,Checked1,setChecked1, qstate,setqstate}) {
    

    
  useEffect(() => {
   let strs=localStorage.getItem('Checked1');
    // let strs=localStorage.getItem('qstate');
    // localStorage.setItem('Checked', "");
    // localStorage.setItem('qstate', "");
    let item1=[],item2=[];

    for(let i=0;i<strs.length;i++)
    {
       if (strs[i]!=','&&strs[i]!='/'&&strs[i]!='"'&&strs[i]!='['&&strs[i]!=']'&&(strs[i]<'a'||strs[i]>'z')) item2.push(strs[i]);
    }

    setChecked(item2);
    console.log(item2);
    localStorage.setItem('Checked', JSON.stringify(item2));


    // localStorage.setItem('qstate', JSON.stringify(item2));
  }, []);

    let qq = qlist;

const handlechange = (id) => {

     if (checkID(id)===true) 
     {
        const newList = Checked.filter((idt) => idt !== id);
        setChecked(newList);

   localStorage.setItem('Checked', JSON.stringify(newList));
   localStorage.setItem('qstate', JSON.stringify(newList));
 
        // const newList1 = qstate.filter((idt) => idt !== id);
        // setqstate(newList1);

    }
     else {
        // setqstate([...qstate,id]);
        setChecked([...Checked,id]);
        localStorage.setItem('Checked', JSON.stringify(Checked+id));
 
     }   
}

let checkID  = (ele) =>
 {
    if (Checked==null) return false;
    // console.log(Checked);
       for(let i=0;i<Checked.length;i++)
       {
          if (ele==Checked[i]) return true;
       }
       return false;
}
    return (
    <>
    <div className='flex justify-center mt-24 ' >
        <img className='w-10 h-10' src="https://clipartcraft.com/images/transparent-emojis-sparkle-2.png"></img>
      <h1 className='text-4xl mb-3' >{name}  Problems</h1>
    </div>
    <div className='flex justify-center mt-4'>
    <Link className='pr-2 text-teal-600' to="/"> Topics </Link>
    <p>  /  { name}</p>
     </div>

<div  className='flex text-center justify-center '>
<table className='   w-screen mt-20 ml-56  mr-56  '>
  <tr className='  text-amber-50 bg-fuchsia-700  text-center'>
    <th className=' border-1 font-normal  text-center p-3 w-10'>ID</th>
    <th className=' border-1 font-normal text-center p-3 '>Question(s)</th>
    <th className='border-1 font-normal text-center p-3 w-36'>Status</th>
    <th className='border-1 font-normal text-center p-3 w-20'>Done</th>
  </tr>
{
 
   
    
qq.map((ele)=>{
        {
                return (          
    <tr className = { checkID(ele.ID)==true?"bg-green-400":ele.ID%2===0?"bg-fuchsia-100":"none"  }>
                    <td  className=' text-md  text-sky-700 font-medium   border-2 p-3 w-10'>{ele.ID}</td>
                    <td  className='text-md text-left text-sky-700 font-medium   border-2 p-3'>{ele.Q}</td>
                    <td  className='text-md  text-sky-700 font-medium text-center  border-2 w-36'>
                        {
        checkID(ele.ID)===false ? <img className='w-5 h-5' src="https://th.bing.com/th/id/OIP.2Ef1V0Yr3Lv_CZLcXBBt3gHaHa?pid=ImgDet&rs=1"></img> :
        <img className='w-5 h-5' src="https://cdn.pixabay.com/photo/2012/04/24/16/22/check-40319_960_720.png"></img> 
                        }
                        </td>
                    <td  className='text-md  text-sky-700 font-medium   border-2 p-3 w-20'>
<input   type="checkbox"  onChange={()=>{handlechange(ele.ID)}} className={`${checkID(ele.ID)===true?"checked":"unchecked"}`}  />
                      </td>
                  </tr>
                )               
                }
}
)
}
</table>
</div>
    </>
  )
}
