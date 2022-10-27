import React from "react";
import { useRef } from "react";

export const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    const criptoName = useRef()
    const criptoFiat = useRef()
    // hook error

    // Cuando el usuario da un submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const objeto = {
            cripto: criptoName.current.value,
            currency: criptoFiat.current.value
        }
        console.log(objeto)

        setBusqueda(objeto)
        setConsultar(true)

        // pasarlo al componente principal
    }



    return (
        <form onSubmit={handleSubmit}> 

        <div className="input-field col s12">
            <select name="cripto"
                className="browser-default"
                id="cripto"
                ref={criptoName}
                >  
                    <option value="disabled selected">--Tipos de Criptos--</option>
                    <option value="BTC">Bitcoin</option>
                    <option value="LNR">Lunar</option>
                    <option value="ETH">Ethereum</option>
                    <option value="USDT">Tether USDT</option>
                    <option value="XRP">XRP</option>
                    <option value="BNB">Binance Coin</option>
                    <option value="USDC">USD Coin</option>
                    <option value="BUSD">BUSD</option>
                    <option value="SOL">Solana</option>
                    <option value="ADA">Cardano</option>
                    <option value="DOGE">Dogecoin</option>
                    <option value="DOT">Polkadot</option>
                    <option value="LINK">Chainlink</option>
                    <option value="AVAX">Avalanche</option>
                    <option value="UNI">Uniswap Protocol Token</option>
                    <option value="QNT">Quant</option>
                    <option value="STETH">Staked Ether</option>
                    <option value="APT">Aptos</option>
                    <option value="MATIC">Matic</option>
                    <option value="FTT">FTT Token</option>
                </select>
            <label htmlFor="cripto"></label>
        </div>
        
        <div className="input-field col s12">
            <select
            className="browser-default"
            name="currency"
            id="currency"
            ref={criptoFiat}
            >
                <option value="disabled selected">--Seleccione una Divisa--</option>
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
            </select>
            <label htmlFor="currency"></label>
        </div>

        <div className="input-field col s12">
            <input  
                type="submit"
                value="seek value"
                className="btn"
            />
        </div>
    </form>
    )
}