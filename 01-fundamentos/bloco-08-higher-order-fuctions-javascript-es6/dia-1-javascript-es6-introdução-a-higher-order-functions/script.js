//1

const objetoRetornado = (nome) => {
  return {
    nomeCompleto: nome,
    email: `${nome.toLowerCase().replace(' ', '_')}@trybe.com`,
  }
}

const newEmployees = () => {
  const employees = {
    id1: objetoRetornado('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: objetoRetornado('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: objetoRetornado('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

//2

const sorteio = () => {
  
}