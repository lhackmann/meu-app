import Layout from "../../components/layout"
import Task from "../../components/tasks"





function Tarefas(){
    return (
        <Layout>
                    <div>
                        <h1>LISTA DE TAREFAS</h1>
                        <Task name={'Inserir nova tarefa'}></Task>
                        
                        
                    </div>
        </Layout>
    )
}

export default Tarefas