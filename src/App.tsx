import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { Proposals } from './components/Proposals'
import { Discussions } from './components/Discussions'
import { Profile } from './components/Profile'
import { Vote } from 'lucide-react'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center">
              <Vote className="mr-2" />
              E-Democracy
            </Link>
            <div className="space-x-4">
              <Link to="/proposals" className="hover:underline">Proposals</Link>
              <Link to="/discussions" className="hover:underline">Discussions</Link>