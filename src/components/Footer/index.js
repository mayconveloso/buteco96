import React from 'react';
import { Container, Endereco, Contato, RedesSocias, FaceIcon, InstaIcon, WhatsIcon } from './styles';

function Footer() {
  return (
    <Container id="footer">
      <div className="flex">
        <Endereco>
            <span> <strong>Endereço:</strong> Rua dos Crisâmetros </span>
            <span> <strong>Bairro:</strong> Ipês (Polvilho) </span>
            <span> <strong>Cidade:</strong> Cajamar - <strong>SP</strong> </span>
            <span> <strong>CEP:</strong> 07791-785 </span>
          <Contato>
            <span> <strong>Telefone:</strong> (11) 2391-0315</span>
            <span> <strong>Email:</strong> contato@buteco96.pt</span>
          </Contato>
        </Endereco>
        <RedesSocias>
          <span> <FaceIcon /> </span>
          <span> <InstaIcon /> </span>
          <span> <WhatsIcon /> </span>
        </RedesSocias>
      </div>
    </Container>
  );
}

export default Footer;