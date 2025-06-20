import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const manager = () => {
    const ref = useRef();
    const passwordref = useRef();
    const [form, setForm] = useState({
        site: "",
        username: "",
        password: ""
    });
    const [passwordArray, setpasswordArray] = useState([])

    const getPassword = async() =>{
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()
        setpasswordArray(passwords);

    }

    useEffect(() => {
        getPassword()

    }, []);


    const copyText = (text) => {
        toast('copied to clipbord', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);
    }


    const showPassword = () => {
        passwordref.current.type = "text"
        if (ref.current.src.includes("public/eyehide.svg")) {
            ref.current.src = "public/eye.svg"
            passwordref.current.type = "password"
        }
        else {
            ref.current.src = "public/eyehide.svg"
            passwordref.current.type = "text"
        }
    }

    const SavePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
            // If any such id exists in the db, delete it 
                    //    await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })
           
                       setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
                       await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })
           
            // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
            setForm({ site: "", username: "", password: "" })
        }
        else{
            toast('Error : min length', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }); 
        }


    }
   const deletePassword = async (id) => {
           console.log("Deleting password with id ", id)
           let c = confirm("Do you really want to delete this password?")
           if (c) {
               setpasswordArray(passwordArray.filter(item => item.id !== id))
               
               await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })
   
               toast('Password Deleted!', {
                   position: "top-right",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true, 
                   draggable: true,
                   progress: undefined,
                   theme: "dark",
               });
           }
   
       }

    const editPassword = (id) => {
        setForm({ ...passwordArray.filter(i => i.id === id)[0], id: id })
        setpasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

            <div className=" p-2 md:p-0 mycontainer min-h-[87.9vh]">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>op</span>
                    <span className='text-green-500'>/&gt;</span></h1>
                <p className='text-green-900 text-lg text-center'>Your own password manager</p>

                <div className=' text-black flex flex-col p-4 gap-8 items-center' >
                    <input value={form.site} onChange={handleChange} type="text" placeholder='Enter Website URL' className=' rounded-full bg-white border border-green-500 w-full p-4 py-1' name="site" id="site" />
                    <div className=' flex flex-col md:flex-row w-full justify-between gap-8'>
                        <input value={form.username} onChange={handleChange} type="text" placeholder='Enter username' className=' rounded-full bg-white border border-green-500 w-full p-4 py-1' name="username" id="username" />
                        <div className='relative '>
                            <input ref={passwordref} value={form.password} onChange={handleChange} type="password" placeholder='Enter password' className=' rounded-full bg-white  border border-green-500 w-full p-4 py-1' name="password" id="pass" />

                            <span className='absolute right-[3px] top-[4px]' >
                                <img src="public/eye.svg" ref={ref} className='p-1 cursor-pointer'
                                    onClick={showPassword} width={26} alt="" />
                            </span>
                        </div>
                    </div>

                    <button onClick={SavePassword} className='  border-1 border-green-900 gap-2 flex justify-center items-center bg-green-500 hover:bg-green-400 rounded-full py-2 px-3 w-fit'>
                        <lord-icon
                            src="https://cdn.lordicon.com/sbnjyzil.json"
                            trigger="hover"
                            stroke="bold"
                            state="hover-swirl"
                            colors="primary:#000000,secondary:#000000"
                        >
                        </lord-icon>
                        Save Password
                    </button>
                </div>

                <div className="password">
                    <h2 className='font-bold text-2xl py-4'> Your Passwords </h2>
                    {passwordArray.length === 0 && <div className='text-center font-bold text-green-900'>No passwords saved yet!!!!!!</div>}
                    {passwordArray.length != 0 && <table className='table-auto text-center w-full border border-green-500 rounded-md overflow-hidden mb-10'>
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2' >Website</th>
                                <th className='py-2' >Username</th>
                                <th className='py-2' >Password</th>
                                <th className='py-2' >Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index} >
                                    <td className='py-2 border border-white text-center '> <div className="flex justify-center items-center">
                                        <a href={item.site} target='_blank'> {item.site}</a> <img src="public/copy.png" className='w-8 cursor-pointer pl-3 ' onClick={() => { copyText(item.site) }} alt="" /></div></td >
                                    <td className='py-2 border border-white text-center '> <div className="flex justify-center items-center">
                                        {item.username} <img src="public/copy.png" className='w-8 cursor-pointer pl-3 ' onClick={() => { copyText(item.username) }} alt="" /></div></td >
                                    <td className='py-2 border border-white text-center '> <div className="flex justify-center items-center">
                                        {"*".repeat(item.password.length)} <img src="public/copy.png" className='w-8 cursor-pointer pl-3 ' onClick={() => { copyText(item.password) }} alt="" /></div></td >
                                    <td className='py-2 justify-center border border-white text-center '>
                                        <span className=' cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                stroke="bold"
                                                colors="primary:#121331,secondary:#000000">
                                            </lord-icon>
                                        </span>
                                        <span className=" cursor-pointer mx-1" onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/xyfswyxf.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </span>

                                    </td >

                                </tr>
                            })}

                        </tbody>

                    </table>}
                </div>

            </div>
        </>
    )
}

export default manager
