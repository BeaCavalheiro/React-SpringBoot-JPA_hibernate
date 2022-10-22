import React from 'react';
import logo from "../IMG/logo-trans.png";
import verao from "../IMG/ver1000.jpg"
import inverno from "../IMG/inv1000.jpg";
import formatura from "../IMG/for1000.jpg";
import nacional from "../IMG/nac1000.jpg";
import internacional from "../IMG/inter1000.jpg";
import religioso from "../IMG/rel1000.jpg";

export default function Header() {
  return (
    <div class="container">

        <header class="row">
           
            <div class="logo offset-2 ">
                <img src={logo} alt=""/>
            </div>
           
            <div id="carouselExampleCaptions" class="carousel slide col-10 offset-1" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={verao} class="d-block w-100 tam" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="bg">Férias de Verão</h5>
                            <p class="bg">Para os APAIXONADOS por calor</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={inverno} class="d-block w-100 tam " alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="bg">Férias de inverno</h5>
                            <p class="bg">Os melhores destinos para os Amantes do Frio.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={formatura}class="d-block w-100 tam" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="bg">Formatura</h5>
                            <p class="bg">Comemorar em alto estilo é com a Happy Traveller.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={religioso} class="d-block w-100 tam" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="bg">Religiosos</h5>
                            <p class="bg">A fé não tem fronteiras</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={nacional} class="d-block w-100 tam" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="bg">Nacionais</h5>
                            <p class="bg">Os destinos mais buscados em Território Nacional</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={internacional} class="d-block w-100  tam" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 class="bg">Internacionais</h5>
                            <p class="bg">De asas a sua imaginação</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}
