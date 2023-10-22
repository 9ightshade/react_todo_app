import "./App.css";
import Todo from "./components/Todo";

const App = ({ taskIdFunc }) => {
    return (
        <>
            <div className="header">
                <Todo taskIdFunc={taskIdFunc} />
            </div>
        </>
    );
};

export default App;
