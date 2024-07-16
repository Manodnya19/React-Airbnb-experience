import { useState } from 'react'
import '../App.css'

export default function Card(details){

    let badgeText 
    if(details.item.openSpots === 0){
        badgeText = 'SOLD OUT'
    }
    else if(details.item.location === 'Online'){
        badgeText = 'ONLINE'
    }
    return(
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img className='card--image' src = {details.item.coverImg} alt="" />
            <div className='card--stats'>
                <img className='card--star' src="/src/assets/star.png" alt="" />
                <span>{details.item.stats.rating}</span>
                <span className='grey'>({details.item.stats.reviewCount}) • </span>
                <span className="gray">{details.item.location}</span>
            </div>
            <p>{details.item.title}</p>
            <p><span className='bold'>From {details.item.price}</span> / person</p>
        </div>
    )
}