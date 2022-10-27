import React from 'react'

const Cripto = ({resultado, busqueda}) => {
    const {cripto, currency} = busqueda
    if (!resultado.DISPLAY) return undefined

    const PRICE = resultado?.DISPLAY[`${cripto}`]?.[`${currency}`].PRICE || null
    const HIGHDAY = resultado?.DISPLAY[`${cripto}`]?.[`${currency}`].HIGHDAY || null
    const LOWDAY = resultado?.DISPLAY[`${cripto}`]?.[`${currency}`].LOWDAY || null
    const CHANGEPCT24HOUR = resultado?.DISPLAY[`${cripto}`]?.[`${currency}`].CHANGEPCT24HOUR || null



  return (
    <div className='card-panel'>
    <div className='white-text'>
        <h2 className='name_cripto'><b>{cripto} / {currency}</b></h2>
        <p className='results_criptos'><b>Highest price this day:</b><span>{PRICE}</span></p>
        <p className='results_criptos'><b>Lowest price this day: </b><span>{HIGHDAY}</span></p>
        <p className='results_criptos'><b>Change in 24 hours: </b><span>{LOWDAY}</span></p>
        <p className='results_criptos'><b>Change in the last 24 hours: %</b><span>{CHANGEPCT24HOUR}</span></p>
    </div>
</div>
  )
}

export default Cripto;