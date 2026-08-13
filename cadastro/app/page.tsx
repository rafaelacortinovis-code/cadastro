'use client';
import { useState } from "react";
import Card from "./components/card";

export default function Home() {
    const alunos = [
        { nome: "Júlia", turma: "idev4" },
        { nome: "Rafa", turma: "idev4" },
        { nome: "Isa", turma: "idev4" },
        { nome: "Zanga", turma: "idev3" },
        { nome: "Boas", turma: "idev3" },
        { nome: "Marques", turma: "idev3" },
        { nome: "Elias", turma: "idev5" },
        { nome: "Cardoso", turma: "idev5" },
        { nome: "Daniel", turma: "idev5" },
    ];

    const [nomeTurma, setNomeTurma] = useState('');

    return (
        <main className="page-shell">
            <h1>Bem-vindo à página de alunos</h1>

            <div className="filter-group">
                <button className="filter-button" onClick={() => setNomeTurma('1')}>idev4</button>
                <button className="filter-button" onClick={() => setNomeTurma('2')}>idev3</button>
                <button className="filter-button" onClick={() => setNomeTurma('3')}>idev5</button>
            </div>

            <div className="card-grid">
                {nomeTurma === "1" && (
                    alunos
                        .filter((aluno) => aluno.turma === 'idev4')
                        .map((aluno, index) => (
                            <Card key={`${aluno.nome}-${index}`} nome={aluno.nome} turma={aluno.turma} />
                        ))
                )}

                {nomeTurma === "2" && (
                    alunos
                        .filter((aluno) => aluno.turma === 'idev3')
                        .map((aluno, index) => (
                            <Card key={`${aluno.nome}-${index}`} nome={aluno.nome} turma={aluno.turma} />
                        ))
                )}

                {nomeTurma === "3" && (
                    alunos
                        .filter((aluno) => aluno.turma === 'idev5')
                        .map((aluno, index) => (
                            <Card key={`${aluno.nome}-${index}`} nome={aluno.nome} turma={aluno.turma} />
                        ))
                )}
            </div>
        </main>
    );
}