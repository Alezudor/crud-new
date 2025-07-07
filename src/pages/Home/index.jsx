import React from "react";
import "./styles.css";
import Button from "../../Components/Button";

const empregados = [
  { id: 1, nome: "Pedro", salario: 2345, departamento: "Gari" },
  { id: 2, nome: "Isaac", salario: 2500, departamento: "Cozinheiro" },
  { id: 3, nome: "Kelvin", salario: 4500, departamento: "Influencer" },
];

export default function Home() {
  const handleEdit = (nome) => alert(`Editar: abrir tela de edição do empregado ${nome}`);
  const handleDelete = (nome) => alert(`Excluir: remover empregado ${nome} da lista`);
  const handleAdd = () => alert("Adicionar: abrir formulário para novo empregado");

  return (
    <div className="container">
      <div className="header">
        <h1>DEV &lt;2024091&gt;</h1>
      </div>

      <h2 className="titulo">Registro de Funcionários</h2>

      <Button onClick={handleAdd} variant="default">
        Adicionar novo funcionário
      </Button>

      <table className="tabela">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Salário</th>
            <th>Cargo</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {empregados.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nome}</td>
              <td>{emp.salario}</td>
              <td>{emp.departamento}</td>
              <td>
                <Button variant="edit" onClick={() => handleEdit(emp.nome)}>
                  Editar
                </Button>
                <Button variant="delete" onClick={() => handleDelete(emp.nome)}>
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}