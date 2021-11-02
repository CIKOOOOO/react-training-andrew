import React, { Fragment, useEffect, useState } from 'react'
import TitleComponent from '../inline/TitleComponent'
import ButtonKlik from './Button'

export default function TransferApp() {
  const [balance, setBalance] = useState(0)
  const [users, setUsers] = useState([])

  const getUser = async () => {
    try {
      const raw = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await raw.json()
      setUsers(data)
    } catch (error) {

    }

  }

  useEffect(() => {
    getUser()
  }, [])

  const save1000 = (value) => {
    setBalance(balance + value)
    setTimeout(() => {
      alert(`Terima kasih, saldo anda bertambah ${value}, menjadi ${balance + value}`)
    }, 1200)
  }

  const save5000 = (value) => {
    setBalance(balance + value)
    setTimeout(() => {
      alert(`Terima kasih, saldo anda bertambah ${value}, menjadi ${balance + value}`)
    }, 1500);
  }

  const withdrw1000 = (value) => {
    const confirmation = window.confirm('apakah anda yakin?')
    if (balance > 0) {
      if (confirmation) {
        setBalance(balance - value)
        alert(`Saldo anda berkurang ${value}, sekarang jadi ${balance - value}`)
      } else {
        alert('OK, gajadi')
      }
    } else {
      alert('Saldo ndak Cukup')
    }
  }

  return (
    <Fragment>
      <div className="bg-gray-100 rounded-xl p-8">
        <h2 className="text-lg font-semibold">ToDo</h2>
      </div>
      <div>
        {/* <Input onChange={this.handleChange} /> */}
        {/* <p className="font-medium color-red-100">{this.state.error}</p> */}
        {/* <ToDoList value={this.state.display} /> */}
      </div>
      <TitleComponent text={`Saldo anda adalah : Rp. ${balance}`} />
      {/* Saldo anda adalah : Rp. {balance} */}
      <br />
      <hr />
      Apakah mau tambah saldo?
      <br />
      <button onClick={() => save1000(1000)} className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded m-2" >Tambah Rp.1000</button>
      <button onClick={() => save5000(5000)} className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2">Tambah Rp.5000</button>
      <hr />
      Apakah mau tarik saldo?
      <br />
      <button onClick={() => this.tarikSaldo1000()} className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded m-2">Tarik Rp.1000</button>
      <br />
      <div className="flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
      <ul class="flex flex-col divide-y w-full">
        {
          users.map((user, key) =>
            <li className="flex flex-row">
              <div className="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium dark:text-white">{user.name}</div>
                  <div className="text-gray-600 dark:text-gray-200 text-sm">{user.phone}</div>
                </div>
              </div>
            </li>
          )
        }
      </ul>
      </div>

    </Fragment>
  )
}
