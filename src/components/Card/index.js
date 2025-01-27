import React, { Component } from 'react';

import { Container, Text, Titles, Extras } from './styles';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickEscolher = this.handleClickEscolher.bind(this);
    localStorage.removeItem("precoTotal");
    localStorage.removeItem("dadosPedido");
    localStorage.setItem("pedidosID", 0);
    // if (localStorage.getItem("pedidosID") === null || localStorage.getItem("pedidosID") === "NaN") { localStorage.setItem("pedidosID", 0) };
  }

  handleClick = (event) => {
    try {
      const { type } = event.props;

      if (type === "Batata Recheada") {
        this.inputPedidos(event, "Batata");
        this.precoTotal();
        return;
      }

      if (type === "Porções") {
        this.inputPedidos(event, "Porcoes");
        this.precoTotal();
        return;
      }

      if (type === "Bebidas") {
        this.inputPedidos(event, "Bebidas");
        this.precoTotal();
        return;
      }
    } catch (err) {
      console.log("error fazer pedido", err)
    }
  }

  inputPedidos(event, idLabel) {

    try {

      const { nome, descricao, preco, preco2 } = event.props;
      const label = document.querySelector(`#${idLabel}`);

      var nPedidos = parseInt(localStorage.getItem("pedidosID"));
      nPedidos = nPedidos + 1;
      var propsPedido = { ...event.props, "id": `${nPedidos}` };

      event.props = { ...event.props, "id": `${nPedidos}` };

      propsPedido = JSON.stringify(propsPedido);

      if (localStorage.getItem("dadosPedido")) {
        var dadosPedidoAtt = localStorage.getItem("dadosPedido");
        dadosPedidoAtt = JSON.parse(dadosPedidoAtt);
        for (var i = 1; i < dadosPedidoAtt.length; i++) {
          dadosPedidoAtt[`${nPedidos}`] = propsPedido;
          localStorage.setItem("dadosPedido", JSON.stringify(dadosPedidoAtt));
        }
      } else {
        var dadosPedido = [];
        dadosPedido[`${nPedidos}`] = propsPedido;
        localStorage.setItem("dadosPedido", JSON.stringify(dadosPedido));
      }

      const Div = document.createElement("div");
      Div.setAttribute("class", "pedido");
      Div.setAttribute("id", `${nPedidos}`);
      Div.addEventListener('click', () => { this.removePedidos(nPedidos) }, false);

      const DivText = document.createElement("div");
      DivText.setAttribute("class", "texto");

      const DivValor = document.createElement("div");
      DivValor.setAttribute("class", "valor");

      const h1 = document.createElement("h1");
      var textH1 = document.createTextNode(`${nome}`);
      h1.appendChild(textH1);
      DivText.appendChild(h1);

      if (descricao) {
        const h3 = document.createElement("h3");
        var textH3 = document.createTextNode(`${descricao}`);
        h3.appendChild(textH3);
        DivText.appendChild(h3);
      }

      Div.appendChild(DivText);

      if (preco) {
        const spanp1 = document.createElement("span");
        spanp1.setAttribute("class", "RS");
        var textSpanp1 = document.createTextNode(`${preco}`);
        spanp1.appendChild(textSpanp1);
        DivValor.appendChild(spanp1);
      }

      if (preco2) {
        const spanp2 = document.createElement("span");
        spanp2.setAttribute("class", "RS");
        var textSpanp2 = document.createTextNode(`${preco2}`);
        spanp2.appendChild(textSpanp2);
        DivValor.appendChild(spanp2);
      }

      Div.appendChild(DivValor);

      label.appendChild(Div);

      localStorage.setItem("pedidosID", nPedidos);

      return;
    } catch (err) {
      console.log("ipunt pedido", err)
    }
  }

  precoTotal() {
    try {

      const pedidos = document.querySelectorAll(".RS");
      const labelCar = document.querySelector(".label-car")

      let Total = 0;

      pedidos.forEach((pedido) => {

        const precoAtu = parseFloat(pedido.innerHTML.replace(",", "."));

        Total = Total + precoAtu;
      })

      Total = parseFloat(Total.toFixed(2));

      let totalText = Total.toString();
      totalText = totalText.replace(".", ",");

      this.inputToalInHTML("total", totalText);
      this.inputToalInHTML("valor", totalText);
      labelCar.setAttribute("data-content", `${pedidos.length}`);

      localStorage.setItem("precoTotal", `R$ ${totalText}`);

      return;

    } catch (err) {
      console.log("calc preço total", err);
    }

  }

  inputToalInHTML(className, text) {
    try {
      const totalElement = document.querySelector(`.${className}`);
      totalElement.innerHTML = "";

      var texto = document.createTextNode(`${text}`);
      totalElement.appendChild(texto);

      return;
    } catch (err) {
      console.log("input text in html", err);
    }
  }

  handleClickEscolher(event) {
    try {
      const { nome } = event.props;
      const divElement = document.querySelector(`[name="${nome}"]`);
      divElement.classList.toggle("hidden");
      return
    } catch (err) {
      console.log("Escolher", err)
    }
  }

  removePedidos(id) {
    try {

      var nPedidos = localStorage.getItem(`pedidosID`);
      nPedidos = parseInt(nPedidos);

      var dadosPedido = localStorage.getItem(`dadosPedido`);
      dadosPedido = JSON.parse(dadosPedido);

      var newDadosPedido = [];

      dadosPedido.map((item, index) => {
        if (index !== parseInt(id)) {
          newDadosPedido.push(item);
        }
      });

      localStorage.removeItem(`dadosPedido`);
      localStorage.setItem(`dadosPedido`, JSON.stringify(newDadosPedido));

      var node = document.getElementById(`${id}`);
      node.removeEventListener('click', () => { this.removePedidos(this) }, false);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
        this.precoTotal();
      }

      nPedidos = nPedidos - 1;
      localStorage.setItem("pedidosID", nPedidos);
      if (nPedidos === 0) {
        localStorage.removeItem(`dadosPedido`);
      }
      return;
    } catch (err) {
      console.log("Remover Pedidos", err);
    }
  }

  render() {
    const { nome, descricao, preco, preco2, src, type } = this.props
    return (
      <Container className="produto" >
        <div className="cont-img">
          <img alt="imagem do produto" src={src} />
        </div>
        <Text>
          <Titles>
            <h1>{nome}</h1>
            <h3>{descricao}</h3>
          </Titles>
          <Extras>
            <span>{preco}</span>
            {preco2 ? <span>{preco2}</span> : ""}
            {type === "Porções" ?
              <button onClick={() => { this.handleClickEscolher(this) }}>Escolher</button>
              :
              <button onClick={() => { this.handleClick(this) }}>Pedir</button>
            }
          </Extras>
        </Text>
        {type === "Porções" ?
          <div className="modal hidden" name={nome}>
            <h1>{nome}</h1>
            <div>
              <div className="group">
                <span className="preco"> {preco} </span> <button onClick={() => { const { preco2, ...props } = this.props; const objeto = { props }; this.handleClick(objeto); document.querySelectorAll(".modal").forEach( (item) => { item.classList.add("hidden")}) }} >Pedir</button>
              </div>
              <div className="group">
                <span className="preco2"> {preco2} </span> <button onClick={() => { const { preco, ...props } = this.props; const objeto = { props }; this.handleClick(objeto); document.querySelectorAll(".modal").forEach( (item) => { item.classList.add("hidden")}) }}>Pedir</button>
              </div>
            </div>
          </div>
          :
          ""
        }

      </Container>
    );
  }
};

export default Card;