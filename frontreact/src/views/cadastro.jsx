import React from "react";
import Header from "../components/cabecalho/Header";
import Navbar from "../components/cabecalho/Navbar";

export default function Cadastro() {
    return (
        <>
            <Header />
            <Navbar />
            <main class="row justify-content-around">
                <h1> Cadastro </h1>
                <hr />
                <form>
                    <p>
                        <label for="nome" class="mb-3 col-12 col-md-2">Nome:</label>
                        <input type="text" name="" id="nome" class="mb-3 col-12 col-md-9" />

                    </p>
                    <p>
                        <label for="sNome" class="mb-3 col-12 col-md-2">Sobrenome:</label>
                        <input type="text" name="" id="sNome" class="mb-3 col-12 col-md-9" />
                    </p>

                    <p>
                        <label for="rg" class="mb-3 col-2">R.G.:</label>
                        <input type="text" name="" id="rg" class="mb-3 col-6 col-md-4" />
                    </p>
                    <p>
                        <label for="cpf" class="mb-3 col-2">CPF:</label>
                        <input type="text" name="" id="cpf" class="mb-3 col-6 col-md-4" />
                    </p>
                    <p>
                        <label for="cep" class="mb-3 col-2">CEP:</label>
                        <input type="text" name="" id="cep" class="mb-3 col-6 col-md-4" />
                    </p>
                    <p>
                        <label for="endereco" class="mb-3 col-12 col-md-2">Endereço:</label>
                        <input type="text" name="" id="endereco" class="mb-3 col-8 col-md-7" />
                        <label for="num" class="mb-3 col-1">Nº:</label>
                        <input type="number" name="" id="num" class="mb-3 col-1" />
                        <label for="compl" class="mb-3 col-4 col-md-2">Complemento:</label>
                        <input type="text" name="" id="compl" class="mb-3 col-5 col-md-4" />
                        <label for="bairro:" class="mb-3 col-4 col-md-1">Bairro:</label>
                        <input type="text" name="" id="bairro" class="mb-3 col-5 col-md-4" />
                    </p>
                    <p>
                        <label for="cidade:" class="mb-3 col-4 col-md-2">Cidade:</label>
                        <input type="text" name="" id="cidade" class="mb-3 col-5 col-md-4" />
                    </p>
                    <p>
                        <label for="estado:" class="mb-3 col-4 col-md-2">Estado:</label>
                        <input type="text" name="" id="estado" class="mb-3 col-5 col-md-4" />
                    </p>
                    <p>
                        <label for="passaporte" class="mb-3 col-4 col-md-2">Passaporte:</label>
                        <input type="text" name="" id="passaporte" class="mb-3 col-5 col-md4" />
                        <label for="serie" class="mb-3 col-4 col-md-1">Serie:</label>
                        <input type="text" name="" id="serie" class="mb-3 col-5 col-md-3" />
                    </p>
                    <p>
                        <label for="email" class="mb-3 col-12 col-md-2">E-mail:</label>
                        <input type="email" name="" id="email" class="mb-3 col-12 col-md-9" />
                    </p>
                    <p>
                        <label for="cemail" class="mb-3 col-12 col-md-2">Confirme  E-mail:</label>
                        <input type="email" name="" id="cemail" class="mb-3 col-12 col-md-9" />
                    </p>
                    <p>
                        <label for="cemail" class="mb-3 col-2 ">Senha:</label>
                        <input type="email" name="" id="cemail" class="mb-3 col-4 " />
                    </p>
                    <p>
                        <label for="cemail" class="mb-3 col-2">Confirme  Senha:</label>
                        <input type="email" name="" id="cemail" class="mb-3 col-4" />
                    </p>
                    <p>
                        <input class="btn btn-primary" type="submit" value="Enviar" />

                    </p>
                    <p class="link">
                        Já tem conta?
                        <a href="./Login">Login</a>
                    </p>


                </form>
            </main>
            <Footer />
        </>


    )
}

