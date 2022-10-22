import React from 'react';
import Modal from "./Modal";

export default function Cards(props) {
  return (
    <li>
      <div class="card" style="width: 18rem;">
        <img src="imagens/nacio-cam-jor.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            <div class="accordion accordion-flush" id="accordionFlushExample001">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne001">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne001"
                    aria-expanded="false" aria-controls="flush-collapseOne001">
                    <strong>{props.local}</strong>
                  </button>
                </h2>
                <div id="flush-collapseOne001" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne001"
                  data-bs-parent="#accordionFlushExample001">
                  <div class="accordion-body">{props.descricap}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo001">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo001"
                    aria-expanded="false" aria-controls="flush-collapseTwo001">
                    <strong>Datas</strong>
                  </button>
                </h2>
                <div id="flush-collapseTwo001" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo001"
                  data-bs-parent="#accordionFlushExample001">
                  <div class="accordion-body">{props.data}</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree001">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree001"
                    aria-expanded="false" aria-controls="flush-collapseThree001">
                    <strong>Preços</strong>
                  </button>
                </h2>
                <div id="flush-collapseThree001" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree001"
                  data-bs-parent="#accordionFlushExample001">
                  <div class="accordion-body">Apartir de <code>R$ {props.valor}</code> /por pessoa
                  </div>
                </div>
              </div>
            </div>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={conected?<Modal></Modal>:./login}> Comprar</button>
           
          </p>
        </div>
      </div>
    </li>
  )
}
