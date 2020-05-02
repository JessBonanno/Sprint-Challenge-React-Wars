import React from 'react';
import Character from './Character';

export default function Characters({characters}) {
    
    return (
        <div className='characters-container'>
            {characters.map((c) => {
                return (
                    <Character character={c}/>
                )
                
            })}
        </div>
    )
}
