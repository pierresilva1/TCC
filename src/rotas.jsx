import { Routes, Route } from 'react-router-dom'

import Home from './paginas/Home'
import Funcionamento from './paginas/Funcionamento'
import Equipamento from './paginas/Equipamentos'

import Objetivo from './paginas/Objetivo'

function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Objetivo' element={<Objetivo />} />
            <Route path='/Funcionamento' element={<Funcionamento />} />
            <Route path='/Equipamento' element={<Equipamento />} />
        </Routes>
    )
}

export default Rotas