import React, {useState} from 'react'




export default function Search() {
    const [search, setSearch] = useState('');
    const [emptySearch, setEmptySearch] = useState(false);

    const handleChanges = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        setEmptySearch(false);
    }

    return (
        <div>
            <form>
                <input 
                type='text'
                name='search'
                placeholder='Search'
                value={search}
                ></input>
            </form>
        </div>
    )
}
