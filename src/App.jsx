import { Tasklist } from "./components/Tasklist";
import { Form } from "./components/Form"



export function App() {
    

    return(
        <main className="bg bg-zinc-900 h-screen">
        <div className="container mx-auto p-10">
        <Form />
        <Tasklist />
        </div>
        </main>
    )
} 