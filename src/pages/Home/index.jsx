import React from "react";
import "./styles.css";
import Button from "../../Components/Button";

const empregados = [
  { id: 1, nome: "Rakesh", salario: 2345, departamento: "IT" },
  { id: 2, nome: "Priyanka", salario: 2500, departamento: "HR" },
  { id: 3, nome: "Anurag", salario: 4500, departamento: "Sales" },
];

export default function Home() {
  const handleEdit = (nome) => alert(`Editar: abrir tela de edição do empregado ${nome}`);
  const handleDelete = (nome) => alert(`Excluir: remover empregado ${nome} da lista`);
  const handleAdd = () => alert("Adicionar: abrir formulário para novo empregado");

  return (
    <div className="container">
      <div className="header">
        <h1>CRUD 2024091</h1>
      </div>

      <h2 className="titulo">Registro de Empregados</h2>

      <Button onClick={handleAdd} variant="default">
        Adicionar Novo Empregado
      </Button>

      <div className="tabela-container">
        <table className="tabela">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Salário</th>
              <th>Departamento</th>
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
                    Edit
                  </Button>
                  <Button variant="delete" onClick={() => handleDelete(emp.nome)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}