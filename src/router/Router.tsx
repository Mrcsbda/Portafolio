import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Skills from '../pages/skills/Skills'
import Projects from '../pages/projects/Projects'
import Contact from '../pages/contact/Contact'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />}/>
                    <Route path="habilidades" element={<Skills />}/>
                    <Route path="proyectos" element={<Projects />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router