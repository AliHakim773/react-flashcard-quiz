import { Provider } from "react-redux"
import { store } from "./core/redux/store"

import Home from "./pages/home"

import "./styles/index.css"

function App() {
    return (
        <Provider store={store}>
            <div className='app'>
                <Home />
            </div>
        </Provider>
    )
}

export default App
