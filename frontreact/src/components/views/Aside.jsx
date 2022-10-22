import React from 'react'

export default function Aside() {
    return (
        <div class="col-12 col-lg-3">
            <ul>
                <h3> HOME</h3>
                <hr />
                <li>
                    <p><a href="agencia/cadastro.html"> Cadastre-se</a> </p>
                </li>
                <li>
                    <p><a href="agencia/log.html">Login</a> </p>
                </li>
                <li>
                    <p><a href="agencia/promo.html"><strong>PROMOÇÕES</strong></a> </p>
                </li>
                <li>
                    <p><a href="https://www.google.com/flights?hl=pt-BR">Passagens</a> </p>
                </li>
                <li>
                    <p><a href="https://www.google.com/travel/hotels">Hóteis</a> </p>
                </li>
            </ul>

        </div>
    )
}
