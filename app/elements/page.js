'use client'
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";


export const elements = [
    { atomicNumber: 1, symbol: 'H', name: 'Hydrogen', atomicWeight: 1.008, electronConfiguration: '1s¹', category: 'nonmetal' },
    { atomicNumber: 2, symbol: 'He', name: 'Helium', atomicWeight: 4.003, electronConfiguration: '1s²', category: 'noble gas' },
    { atomicNumber: 3, symbol: 'Li', name: 'Lithium', atomicWeight: 6.94, electronConfiguration: '[He] 2s¹', category: 'alkali metal' },
    { atomicNumber: 4, symbol: 'Be', name: 'Beryllium', atomicWeight: 9.0122, electronConfiguration: '[He] 2s²', category: 'alkaline earth metal' },
    { atomicNumber: 5, symbol: 'B', name: 'Boron', atomicWeight: 10.81, electronConfiguration: '[He] 2s² 2p¹', category: 'metalloid' },
    { atomicNumber: 6, symbol: 'C', name: 'Carbon', atomicWeight: 12.011, electronConfiguration: '[He] 2s² 2p²', category: 'nonmetal' },
    { atomicNumber: 7, symbol: 'N', name: 'Nitrogen', atomicWeight: 14.007, electronConfiguration: '[He] 2s² 2p³', category: 'nonmetal' },
    { atomicNumber: 8, symbol: 'O', name: 'Oxygen', atomicWeight: 15.999, electronConfiguration: '[He] 2s² 2p⁴', category: 'nonmetal' },
    { atomicNumber: 9, symbol: 'F', name: 'Fluorine', atomicWeight: 18.998, electronConfiguration: '[He] 2s² 2p⁵', category: 'nonmetal' },
    { atomicNumber: 10, symbol: 'Ne', name: 'Neon', atomicWeight: 20.180, electronConfiguration: '[He] 2s² 2p⁶', category: 'noble gas' },
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium', atomicWeight: 22.990, electronConfiguration: '[Ne] 3s¹', category: 'alkali metal' },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium', atomicWeight: 24.305, electronConfiguration: '[Ne] 3s²', category: 'alkaline earth metal' },
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminum', atomicWeight: 26.982, electronConfiguration: '[Ne] 3s² 3p¹', category: 'post-transition metal' },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon', atomicWeight: 28.085, electronConfiguration: '[Ne] 3s² 3p²', category: 'metalloid' },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus', atomicWeight: 30.974, electronConfiguration: '[Ne] 3s² 3p³', category: 'nonmetal' },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur', atomicWeight: 32.06, electronConfiguration: '[Ne] 3s² 3p⁴', category: 'nonmetal' },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine', atomicWeight: 35.45, electronConfiguration: '[Ne] 3s² 3p⁵', category: 'nonmetal' },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon', atomicWeight: 39.948, electronConfiguration: '[Ne] 3s² 3p⁶', category: 'noble gas' },
    { atomicNumber: 19, symbol: 'K', name: 'Potassium', atomicWeight: 39.098, electronConfiguration: '[Ar] 4s¹', category: 'alkali metal' },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium', atomicWeight: 40.078, electronConfiguration: '[Ar] 4s²', category: 'alkaline earth metal' },
    { atomicNumber: 21, symbol: 'Sc', name: 'Scandium', atomicWeight: 44.956, electronConfiguration: '[Ar] 3d¹ 4s²', category: 'transition metal' },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium', atomicWeight: 47.867, electronConfiguration: '[Ar] 3d² 4s²', category: 'transition metal' },
    { atomicNumber: 23, symbol: 'V', name: 'Vanadium', atomicWeight: 50.942, electronConfiguration: '[Ar] 3d³ 4s²', category: 'transition metal' },
    { atomicNumber: 24, symbol: 'Cr', name: 'Chromium', atomicWeight: 51.941, electronConfiguration: '[Ar] 3d⁵ 4s¹', category: 'transition metal' },
    { atomicNumber: 25, symbol: 'Mn', name: 'Manganese', atomicWeight: 54.938, electronConfiguration: '[Ar] 3d⁵ 4s²', category: 'transition metal' },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron', atomicWeight: 55.845, electronConfiguration: '[Ar] 3d⁶ 4s²', category: 'transition metal' },
    { atomicNumber: 27, symbol: 'Co', name: 'Cobalt', atomicWeight: 58.933, electronConfiguration: '[Ar] 3d⁷ 4s²', category: 'transition metal' },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel', atomicWeight: 58.693, electronConfiguration: '[Ar] 3d⁸ 4s²', category: 'transition metal' },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper', atomicWeight: 63.546, electronConfiguration: '[Ar] 3d¹⁰ 4s¹', category: 'transition metal' },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc', atomicWeight: 65.38, electronConfiguration: '[Ar] 3d¹⁰ 4s²', category: 'transition metal' },
    { atomicNumber: 31, symbol: 'Ga', name: 'Gallium', atomicWeight: 69.723, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p¹', category: 'post-transition metal' },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium', atomicWeight: 72.63, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p²', category: 'metalloid' },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic', atomicWeight: 74.922, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p³', category: 'metalloid' },
    { atomicNumber: 34, symbol: 'Se', name: 'Selenium', atomicWeight: 78.971, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁴', category: 'nonmetal' },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine', atomicWeight: 79.904, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁵', category: 'nonmetal' },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton', atomicWeight: 83.798, electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁶', category: 'noble gas' },
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium', atomicWeight: 85.468, electronConfiguration: '[Kr] 5s¹', category: 'alkali metal' },
    { atomicNumber: 38, symbol: 'Sr', name: 'Strontium', atomicWeight: 87.62, electronConfiguration: '[Kr] 5s²', category: 'alkaline earth metal' },
    { atomicNumber: 39, symbol: 'Y', name: 'Yttrium', atomicWeight: 88.906, electronConfiguration: '[Kr] 4d¹ 5s²', category: 'transition metal' },
    { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium', atomicWeight: 91.224, electronConfiguration: '[Kr] 4d² 5s²', category: 'transition metal' },
    { atomicNumber: 41, symbol: 'Nb', name: 'Niobium', atomicWeight: 92.906, electronConfiguration: '[Kr] 4d⁴ 5s¹', category: 'transition metal' },
    { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum', atomicWeight: 95.95, electronConfiguration: '[Kr] 4d⁵ 5s¹', category: 'transition metal' },
    { atomicNumber: 43, symbol: 'Tc', name: 'Technetium', atomicWeight: 98, electronConfiguration: '[Kr] 4d⁵ 5s²', category: 'transition metal' },
    { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium', atomicWeight: 101.07, electronConfiguration: '[Kr] 4d⁷ 5s²', category: 'transition metal' },
    { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium', atomicWeight: 102.91, electronConfiguration: '[Kr] 4d⁷ 5s²', category: 'transition metal' },
    { atomicNumber: 46, symbol: 'Pd', name: 'Palladium', atomicWeight: 106.42, electronConfiguration: '[Kr] 4d¹⁰', category: 'transition metal' },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver', atomicWeight: 107.87, electronConfiguration: '[Kr] 4d¹⁰ 5s¹', category: 'transition metal' },
    { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium', atomicWeight: 112.41, electronConfiguration: '[Kr] 4d¹⁰ 5s²', category: 'transition metal' },
    { atomicNumber: 49, symbol: 'In', name: 'Indium', atomicWeight: 114.82, electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p¹', category: 'post-transition metal' },
    { atomicNumber: 50, symbol: 'Sn', name: 'Tin', atomicWeight: 118.71, electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p²', category: 'post-transition metal' },
    { atomicNumber: 51, symbol: 'Sb', name: 'Antimony', atomicWeight: 121.76, electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p³', category: 'metalloid' },
    { atomicNumber: 52, symbol: 'Te', name: 'Tellurium', atomicWeight: 127.60, electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁴', category: 'metalloid' },
    { atomicNumber: 53, symbol: 'I', name: 'Iodine', atomicWeight: 126.90, electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁵', category: 'nonmetal' },
    { atomicNumber: 54, symbol: 'Xe', name: 'Xenon', atomicWeight: 131.29, electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁶', category: 'noble gas' },
    { atomicNumber: 55, symbol: 'Cs', name: 'Cesium', atomicWeight: 132.91, electronConfiguration: '[Xe] 6s¹', category: 'alkali metal' },
    { atomicNumber: 56, symbol: 'Ba', name: 'Barium', atomicWeight: 137.33, electronConfiguration: '[Xe] 6s²', category: 'alkaline earth metal' },
    { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', atomicWeight: 138.91, electronConfiguration: '[Xe] 5d¹ 6s²', category: 'lanthanide' },
    { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', atomicWeight: 140.12, electronConfiguration: '[Xe] 4f¹ 5d¹ 6s²', category: 'lanthanide' },
    { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', atomicWeight: 140.91, electronConfiguration: '[Xe] 4f³ 6s²', category: 'lanthanide' },
    { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', atomicWeight: 144.24, electronConfiguration: '[Xe] 4f⁴ 6s²', category: 'lanthanide' },
    { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', atomicWeight: 145, electronConfiguration: '[Xe] 4f⁵ 6s²', category: 'lanthanide' },
    { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', atomicWeight: 150.36, electronConfiguration: '[Xe] 4f⁶ 6s²', category: 'lanthanide' },
    { atomicNumber: 63, symbol: 'Eu', name: 'Europium', atomicWeight: 151.96, electronConfiguration: '[Xe] 4f⁷ 6s²', category: 'lanthanide' },
    { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', atomicWeight: 157.25, electronConfiguration: '[Xe] 4f⁷ 5d¹ 6s²', category: 'lanthanide' },
    { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', atomicWeight: 158.93, electronConfiguration: '[Xe] 4f⁸ 6s²', category: 'lanthanide' },
    { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', atomicWeight: 162.50, electronConfiguration: '[Xe] 4f⁹ 6s²', category: 'lanthanide' },
    { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', atomicWeight: 164.93, electronConfiguration: '[Xe] 4f¹⁰ 6s²', category: 'lanthanide' },
    { atomicNumber: 68, symbol: 'Er', name: 'Erbium', atomicWeight: 167.26, electronConfiguration: '[Xe] 4f¹¹ 6s²', category: 'lanthanide' },
    { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', atomicWeight: 168.93, electronConfiguration: '[Xe] 4f¹² 6s²', category: 'lanthanide' },
    { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', atomicWeight: 173.04, electronConfiguration: '[Xe] 4f¹³ 6s²', category: 'lanthanide' },
    { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', atomicWeight: 174.97, electronConfiguration: '[Xe] 4f¹⁴ 5d¹ 6s²', category: 'lanthanide' },
    { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium', atomicWeight: 178.49, electronConfiguration: '[Xe] 4f¹⁴ 5d² 6s²', category: 'transition metal' },
    { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum', atomicWeight: 180.95, electronConfiguration: '[Xe] 4f¹⁴ 5d³ 6s²', category: 'transition metal' },
    { atomicNumber: 74, symbol: 'W', name: 'Tungsten', atomicWeight: 183.84, electronConfiguration: '[Xe] 4f¹⁴ 5d⁴ 6s²', category: 'transition metal' },
    { atomicNumber: 75, symbol: 'Re', name: 'Rhenium', atomicWeight: 186.21, electronConfiguration: '[Xe] 4f¹⁴ 5d⁵ 6s²', category: 'transition metal' },
    { atomicNumber: 76, symbol: 'Os', name: 'Osmium', atomicWeight: 190.23, electronConfiguration: '[Xe] 4f¹⁴ 5d⁶ 6s²', category: 'transition metal' },
    { atomicNumber: 77, symbol: 'Ir', name: 'Iridium', atomicWeight: 192.22, electronConfiguration: '[Xe] 4f¹⁴ 5d⁷ 6s²', category: 'transition metal' },
    { atomicNumber: 78, symbol: 'Pt', name: 'Platinum', atomicWeight: 195.08, electronConfiguration: '[Xe] 4f¹⁴ 5d⁸ 6s²', category: 'transition metal' },
    { atomicNumber: 79, symbol: 'Au', name: 'Gold', atomicWeight: 196.97, electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', category: 'transition metal' },
    { atomicNumber: 80, symbol: 'Hg', name: 'Mercury', atomicWeight: 200.59, electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', category: 'transition metal' },
    { atomicNumber: 81, symbol: 'Tl', name: 'Thallium', atomicWeight: 204.38, electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', category: 'post-transition metal' },
    { atomicNumber: 82, symbol: 'Pb', name: 'Lead', atomicWeight: 207.2, electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', category: 'post-transition metal' },
    { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth', atomicWeight: 208.98, electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', category: 'post-transition metal' },
    { atomicNumber: 84, symbol: 'Po', name: 'Polonium', atomicWeight: 209, electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', category: 'metalloid' },
    { atomicNumber: 85, symbol: 'At', name: 'Astatine', atomicWeight: 210, electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', category: 'metalloid' },
    { atomicNumber: 86, symbol: 'Rn', name: 'Radon', atomicWeight: 222, electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', category: 'noble gas' },
    { atomicNumber: 87, symbol: 'Fr', name: 'Francium', atomicWeight: 223, electronConfiguration: '[Rn] 7s¹', category: 'alkali metal' },
    { atomicNumber: 88, symbol: 'Ra', name: 'Radium', atomicWeight: 226, electronConfiguration: '[Rn] 7s²', category: 'alkaline earth metal' },
    { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', atomicWeight: 227, electronConfiguration: '[Rn] 6d¹ 7s²', category: 'actinide' },
    { atomicNumber: 90, symbol: 'Th', name: 'Thorium', atomicWeight: 232.04, electronConfiguration: '[Rn] 6d² 7s²', category: 'actinide' },
    { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', atomicWeight: 231.04, electronConfiguration: '[Rn] 5f² 6d¹ 7s²', category: 'actinide' },
    { atomicNumber: 92, symbol: 'U', name: 'Uranium', atomicWeight: 238.03, electronConfiguration: '[Rn] 5f³ 6d¹ 7s²', category: 'actinide' },
    { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', atomicWeight: 237, electronConfiguration: '[Rn] 5f⁴ 6d¹ 7s²', category: 'actinide' },
    { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', atomicWeight: 244, electronConfiguration: '[Rn] 5f⁶ 7s²', category: 'actinide' },
    { atomicNumber: 95, symbol: 'Am', name: 'Americium', atomicWeight: 243, electronConfiguration: '[Rn] 5f⁷ 7s²', category: 'actinide' },
    { atomicNumber: 96, symbol: 'Cm', name: 'Curium', atomicWeight: 247, electronConfiguration: '[Rn] 5f⁸ 7s²', category: 'actinide' },
    { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', atomicWeight: 247, electronConfiguration: '[Rn] 5f⁹ 7s²', category: 'actinide' },
    { atomicNumber: 98, symbol: 'Cf', name: 'Californium', atomicWeight: 251, electronConfiguration: '[Rn] 5f¹⁰ 7s²', category: 'actinide' },
    { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', atomicWeight: 252, electronConfiguration: '[Rn] 5f¹¹ 7s²', category: 'actinide' },
    { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', atomicWeight: 257, electronConfiguration: '[Rn] 5f¹² 7s²', category: 'actinide' },
    { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', atomicWeight: 258, electronConfiguration: '[Rn] 5f¹³ 7s²', category: 'actinide' },
    { atomicNumber: 102, symbol: 'No', name: 'Nobelium', atomicWeight: 259, electronConfiguration: '[Rn] 5f¹⁴ 7s²', category: 'actinide' },
    { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', atomicWeight: 262, electronConfiguration: '[Rn] 5f¹⁴ 7s² 7p¹', category: 'actinide' },
    { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium', atomicWeight: 267, electronConfiguration: '[Rn] 5f¹⁴ 6d¹ 7s²', category: 'transition metal' },
    { atomicNumber: 105, symbol: 'Db', name: 'Dubnium', atomicWeight: 268, electronConfiguration: '[Rn] 5f¹⁴ 6d³ 7s²', category: 'transition metal' },
    { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium', atomicWeight: 271, electronConfiguration: '[Rn] 5f¹⁴ 6d⁴ 7s²', category: 'transition metal' },
    { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium', atomicWeight: 270, electronConfiguration: '[Rn] 5f¹⁴ 6d⁵ 7s²', category: 'transition metal' },
    { atomicNumber: 108, symbol: 'Hs', name: 'Hassium', atomicWeight: 277, electronConfiguration: '[Rn] 5f¹⁴ 6d⁶ 7s²', category: 'transition metal' },
    { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium', atomicWeight: 278, electronConfiguration: '[Rn] 5f¹⁴ 6d⁷ 7s²', category: 'transition metal' },
    { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium', atomicWeight: 281, electronConfiguration: '[Rn] 5f¹⁴ 6d⁸ 7s²', category: 'transition metal' },
    { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium', atomicWeight: 282, electronConfiguration: '[Rn] 5f¹⁴ 6d⁹ 7s²', category: 'transition metal' },
    { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium', atomicWeight: 285, electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', category: 'transition metal' },
    { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium', atomicWeight: 286, electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', category: 'post-transition metal' },
    { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium', atomicWeight: 289, electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', category: 'post-transition metal' },
    { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium', atomicWeight: 288, electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', category: 'post-transition metal' },
    { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium', atomicWeight: 293, electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', category: 'post-transition metal' },
    { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine', atomicWeight: 294, electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', category: 'metalloid' },
    { atomicNumber: 118, symbol: 'Og', name: 'Oganesson', atomicWeight: 294, electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', category: 'noble gas' }
]


const PeriodicTable = () => {
    const [hoveredElement, setHoveredElement] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");

    const handleElementHover = (element) => {
        setHoveredElement(element);
    };

    const handleElementLeave = () => {
        setHoveredElement(null);
    };


    const handleElementClick = (element) => {
        window.location.href = `/elements/${element.name.toLowerCase()}`;
    };


    const filteredElements = elements.filter((element) =>
        element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        document.title = "Element Exploration"; // Set your custom title here
    }, []);

    return (
        <div className="container mx-auto p-4">

            <div className="mb-4 relative">
                <input
                    type="text"
                    placeholder="Search elements..."
                    className="w-full p-2 pl-8 border border-gray-300 rounded"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-2 top-3 text-gray-400" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
                {filteredElements.map((element) => (
                    <div
                        key={element.atomicNumber}
                        className={`relative p-2 border rounded cursor-pointer transition-all duration-300 ${getCategoryColor(element.category)} hover:z-10 hover:scale-110`}
                        onMouseEnter={() => handleElementHover(element)}
                        onMouseLeave={handleElementLeave}
                        onClick={() => handleElementClick(element)}
                        tabIndex={0}
                        aria-label={`${element.name}, Atomic Number ${element.atomicNumber}`}
                    >
                        <div className="text-xs">{element.atomicNumber}</div>
                        <div className="text-2xl font-bold">{element.symbol}</div>
                        <div className="text-xs truncate">{element.name}</div>
                        {hoveredElement === element && (
                            <div className="absolute left-0 top-full mt-2 p-2 bg-white border rounded shadow-lg z-20 w-48">
                                <h3 className="font-bold">{element.name}</h3>
                                <p>Atomic Number: {element.atomicNumber}</p>
                                <p>Atomic Mass: {element.atomicMass}</p>
                                <p>Category: {element.category}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const getCategoryColor = (category) => {
    switch (category) {
        case "Nonmetal":
            return "bg-green-200";
        case "Noble Gas":
            return "bg-purple-200";
        case "Alkali Metal":
            return "bg-red-200";
        case "Alkaline Earth Metal":
            return "bg-orange-200";
        case "Metalloid":
            return "bg-yellow-200";
        case "Halogen":
            return "bg-blue-200";
        default:
            return "bg-gray-200";
    }
};

export default PeriodicTable;
