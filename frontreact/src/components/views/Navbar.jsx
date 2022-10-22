import React from 'react'
import icon from '../IMG/icone-trans.png';

export default function Navbar() {
  return (
    <div class="container-fluid">
    <nav class=" navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html"> <img src={icon} alt="" width="80px"
                    height="50px" class="d-inline-block align-text-top "/>
                <h6>Happy Traveller</h6>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active " aria-current="page" href="index.html">HOME</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link alter" href="agencia/promo.html">PROMOÇÕES</a>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle active" href="agencia/nacio.html" id="navbarDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nacionais
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="agencia/nacio.html">Mais Procurados</a></li>
                            <li><a class="dropdown-item" href="agencia/nacio.html">Apaixonados por Calor</a></li>
                            <li><a class="dropdown-item" href="agencia/nacio.html">Amantes do frio</a></li>

                        </ul>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle active" href="agencia/inter.html" id="navbarDropdown2"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Internacionais
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="agencia/inter.html">Mais Procurados</a></li>
                            <li><a class="dropdown-item" href="agencia/inter.html">Apaixonados por Calor</a></li>
                            <li><a class="dropdown-item" href="agencia/inter.html">Amantes do frio</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle active" href="agencia/pacotes.html" id="navbarDropdown2"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pacotes
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="https://www.msccruzeiros.com.br/">Cruzeiros</a></li>
                            <li><a class="dropdown-item" href="https://www.praxisviagens.com.br/">Religiosos</a></li>
                            <li><a class="dropdown-item" href="https://www.formaturismo.com.br/">Formatura</a></li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link active" aria-current="page" href="agencia/FC.html">Fale Conosco</a>
                    </li>
                    <li class="nav-item  ">
                        <a class="nav-link active" aria-current="page" href="agencia/HT.html">Trabalhe Conosco</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
  )
}
