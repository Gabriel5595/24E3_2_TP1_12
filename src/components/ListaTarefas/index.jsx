export default function ListaTarefas() {

    const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ol>
                {tarefas.map((tarefa,index) => (
                    <li key={index}>{tarefa}</li>
                ))}

            </ol>
        </div>
    )
}