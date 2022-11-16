import { useState } from 'react'
import { Listbox } from '@headlessui/react';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { Fragment } from 'react';

const people = [
  { id: 1, name: 'SELECT CYCLE', unavailable: false },  
  { id: 2, name: 'NEW', unavailable: false },
  { id: 3, name: 'MID LIFE', unavailable: false },
  { id: 3, name: 'END LIFE', unavailable: false },
]

function MyListbox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className='flex items-center border-b-1 border-b-black lab cursor-pointer '>{selectedPerson.name} <MdOutlineKeyboardArrowDown /> </Listbox.Button>
      <Listbox.Options className='border-b-1 border-b-slate-900 lab px-3 cursor-pointer'>
        {people.map((person) => (
          <Listbox.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
            className='border-b-[0.5px] border-b-black mt-1'
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default MyListbox;