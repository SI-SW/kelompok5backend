import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import useSWR, { useSWRConfig } from "swr";

const Todolist = () => {
    const { mutate } = useSWRConfig();
    const fetcher = async () => {
        const response = await axios.get("http://localhost:5000/todo");
        return response.data;
    };

    const {data} = useSWR("todo", fetcher);
    if(!data) return <h2>Loading...</h2>;

    const deletetodo = async (todoid) => {
        await axios.delete(`http://localhost:5000/todo/${todoid}`);
        mutate("todo");
    }

  return (
    <div className='flex flex-col mt-5'>
        <div className='w-full'>
            <div className='relative shadow-rounded-lg mt-3'>
                <table className='w-full text-sm text-left text-grey-500'>
                    <thead className='text-xs text-grey-700 uppercase bg-gray-100'>
                        <tr>
                            <th className='py-3 px-1 text-center'>No</th>
                            <th className='py-3 px-6'>Jumlah Uang</th>
                            <th className='py-3 px-6'>Keterangan</th>
                            <th className='py-3 px-1 text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((todo, index) => (
                            <tr className='bg-white border-b' key={todo.id}>
                            <td className='py-3 px-1 text-center'>{index+1}</td>
                            <td className='py-3 px-1 font-medium text-gray-900'>{todo.uang}</td>
                            <td className='py-3 px-1'>{todo.desc}</td>
                            <td className='py-3 px-1 text-center'>
                                <Link to={`/edit/${todo.id}`} className="font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rouded text-white mr-1">
                                    Edit
                                </Link>
                                <button onClick={() => deletetodo(todo.id)} className="font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rouded text-white mr-1">
                                    Delete
                                </button>
                            </td>
                        </tr>
                        ) )}
                        
                    </tbody>
                </table>
            </div>
            <br />
            <Link to="/add" className='bg-green-500 hover:bg-green-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg'>
            Add New
            </Link>
        </div>
    </div>
  )
}

export default Todolist;