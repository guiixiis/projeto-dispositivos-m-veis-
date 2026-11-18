// Dados extraídos do index.html original
export const produtos = [
  { id: '1', nome: 'X-Salada', descricao: 'Pão, hambúrguer, queijo, alface e tomate frescos.', preco: 8.0, imagem: require('../../assets/images/xsalada.jpg') },
  { id: '2', nome: 'Cheddar', descricao: 'Hambúrguer suculento coberto com cheddar cremoso.', preco: 17.0, imagem: require('../../assets/images/cheddar.jpg') },
  { id: '3', nome: 'Batata Frita', descricao: 'Porção crocante, sequinha e bem temperada.', preco: 7.0, imagem: require('../../assets/images/batata.jpg') },
  { id: '4', nome: 'X-Burguer', descricao: 'O clássico: hambúrguer e queijo no pão macio.', preco: 1.5, imagem: require('../../assets/images/cheese.jpg') },
  { id: '5', nome: 'Big Tower', descricao: 'Camadas generosas de carne, queijo e molho especial.', preco: 20.5, imagem: require('../../assets/images/bigtower.jpg') },
  { id: '6', nome: 'X-Frango', descricao: 'Frango desfiado com requeijão cremoso.', preco: 12.9, imagem: require('../../assets/images/fragonrequeijao.jpg') },
  { id: '7', nome: 'Nuggets (c/ 8)', descricao: 'Oito nuggets dourados e crocantes.', preco: 6.5, imagem: require('../../assets/images/nuggets.jpg') },
  { id: '8', nome: 'Refri (Lata)', descricao: 'Lata gelada para acompanhar seu lanche.', preco: 4.5, imagem: require('../../assets/images/refri.jpg') },
  { id: '9', nome: 'Sucos (Vários Sabores)', descricao: 'Sucos de frutas, consulte os sabores do dia.', preco: 8.5, imagem: require('../../assets/images/sucos.jpg') },
];

export const formatarPreco = (valor) => 'R$ ' + valor.toFixed(2).replace('.', ',');
