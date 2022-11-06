import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const Edittodo = () => {
    const [uang, setUang] = useState ("");
    const [desc, setDesc] = useState ("");
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);

    useEffect(()=> {
        const getTodoById = async () => {
            const response = await axios.get(`http://localhost:5000/todo/${id}`);
            setUang(response.data.uang);
            setDesc(response.data.desc);
        };
        getTodoById();
    }, [id]);

    const Updatetodo = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/todo/${id}`, {
            uang: parseInt (uang),
            desc: desc
        });
        navigate("/");
    }

    return (
        <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
            <form onSubmit={Updatetodo} className='my-10'>
                <div className='flex flex-col'>
                    <div className='mb-5'>
                        <label className='font-bold text-slate-700'>Uang</label>
                        <input type="text" className='w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' 
                        placeholder='Jumlah Uang'
                        value={uang}
                        onChange={(e)=> setUang(e.target.value)}
                        />
                    </div>
                    <div className='mb-5'>
                        <label className='font-bold text-slate-700'>Keterangan</label>
                        <input type="text" className='w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow' 
                        placeholder='Uang Masuk/Uang Keluar'
                        onChange={(e)=> setDesc(e.target.value)}
                        value={desc}
                        />
                    <button type='submit' className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow'>
                        Ubah
                    </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Edittodo;