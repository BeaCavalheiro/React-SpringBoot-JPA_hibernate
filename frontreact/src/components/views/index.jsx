import React from "react";
import Cards from "../custons/Cards";
import Navbar from "../cabecalho/Navbar";
import Header from "../cabecalho/Header"
import '../CSS/index.css'


export default function Index() {
    return (
        <>
        <Header/>
        <Navbar/>
        <div class="fluid">
            <main class="row">
                <aside class="col-12 col-lg-3">

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

                </aside>

                <article class="col-md-12 col-lg-9">

                    <section class="row justify-content-around baca">

                        <h1 class="fe"><a href="agencia/promo.html">PROMOÇÕES</a> </h1>
                        <hr />
                        <ul class="nowarp">

                            <Cards img="" local="Campos do Jordão" descricao="" data="" />

                            <Cards img="" local="Cancun" descricao="" data="" />
                            <Cards img="" local="Paris" descricao="" data="" />

                            <Cards img="" local=" Disney" descricao="" data="" />

                            <Cards img="" local="Salvador" descricao="" data="" />

                            <Cards img="" local="Rio de Janeiro" descricao="" data="" />

                            <Cards img="" local="New York" descricao="" data="" />

                            <Cards img="" local="Deserto do Atacama" descricao="" data="" />
                        </ul>
                    </section>

                    <section class="row bacl">

                        <h2 class="fe">
                            Mais procurados
                        </h2>
                        <hr />
                        <ul class="nowarp">

                            <Cards img="" local="Cancun" descricao="" data="" />

                            <Cards img="" local="Paris" descricao="" data="" />

                            <Cards img="" local="Salvador" descricao="" data="" />

                            <Cards img="" local="Porto de Galinhas" descricao="" data="" />

                            <Cards img="" local="Bariloche" descricao="" data="" />

                            <Cards img="" local="Maranhão" descricao="" data="" />

                            <Cards img="" local="Grécia" descricao="" data="" />
                        </ul>


                    </section>

                    <section class="row baca">

                        <h2 class="fe">
                            Destaques Nacionais
                        </h2>
                        <hr />
                        <ul class="nowarp">

                            <Cards img="" local="Maranhão" descricao="" data="" />

                            <Cards img="" local="Rio de Janeiro" descricao="" data="" />

                            <Cards img="" local="Maragogi" descricao="" data="" />

                            <Cards img="" local="Gramados" descricao="" data="" />

                            <Cards img="" local="Natal" descricao="" data="" />

                            <Cards img="" local="São Roque" descricao="" data="" />

                            <Cards img="" local="Petropólis" descricao="" data="" />

                            <Cards img="" local="Salvador" descricao="" data="" />
                        </ul>


                    </section>

                    <section class="row bacl">

                        <h2 class="fe">
                            Destaques Internacionais
                        </h2>
                        <hr />
                        <ul class="nowarp">
                            <Cards img="" local="New York" descricao="" data="" />
                            <Cards img="" local="Flórida" descricao="" data="" />
                            <Cards img="" local="Bariloche" descricao="" data="" />
                            <Cards img="" local="Dubai" descricao="" data="" />
                            <Cards img="" local="Havaí" descricao="" data="" />
                            <Cards img="" local="Patagonia" descricao="" data="" />
                            <Cards img="" local="Disney" descricao="" data="" />

                        </ul>

                    </section>
                </article>

            </main>
        </div>
        </>
    )
}


