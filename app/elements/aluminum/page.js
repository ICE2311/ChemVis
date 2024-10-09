'use client';
import React, { useState, useEffect } from "react";
import { FaAtom, FaWeightHanging, FaLayerGroup, FaTable } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import Image from 'next/image';
import Head from 'next/head'; // Import Head from next/head

const AluminumExplorationPage = () => {
    const [activeTab, setActiveTab] = useState("properties");
    const [expandedSection, setExpandedSection] = useState(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState("");

    const element = {
        name: "Aluminum",
        symbol: "Al",
        atomicNumber: 13,
        atomicMass: 26.98,
        group: 13,
        period: 3,
        image: "https://media.istockphoto.com/id/538025236/photo/heap-of-shiny-metal-steel-pipes-with-selective-focus-effect.jpg?s=612x612&w=0&k=20&c=NU2vEghQxU77iNNYFwXbt9Q9TRIJUq5TnsUeQjQVMdY=",
        properties: [
            { name: "Physical Properties", value: "Aluminum is a lightweight, silvery-white metal." },
            { name: "Chemical Properties", value: "It is highly reactive and forms a protective oxide coating." }
        ],
        uses: [
            { value: "Widely used in packaging (e.g., aluminum foil)." },
            { value: "Used in construction and automotive industries." },
            { value: "Commonly used in aerospace applications." }
        ],
        isotopes: [
            { name: "Aluminum-27", value: "The only stable isotope of aluminum." }
        ],
        funFacts: [
            "Aluminum was first isolated in 1825 by Hans Christian Ørsted.",
            "It is the most abundant metal in the Earth's crust.",
            "Aluminum can be recycled indefinitely without losing its properties."
        ],
        quizQuestions: [
            { question: "What is the atomic number of Aluminum?", options: ["12", "13", "14", "15"], correctAnswer: 1 },
            { question: "In which group is Aluminum located?", options: ["12", "13", "14", "15"], correctAnswer: 1 },
            { question: "What is a common use for Aluminum?", options: ["Gold mining", "Oil drilling", "Packaging", "Electricity generation"], correctAnswer: 2 }
        ]
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setExpandedSection(null);
    };

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const startQuiz = () => {
        setQuizStarted(true);
        setCurrentQuizQuestion(0);
        setUserScore(0);
        setAnswerFeedback("");
    };

    const handleQuizAnswer = (selectedAnswer) => {
        if (selectedAnswer === element.quizQuestions[currentQuizQuestion].correctAnswer) {
            setUserScore(userScore + 1);
            setAnswerFeedback("Correct!");
        } else {
            setAnswerFeedback("Incorrect, try again!");
        }
        if (currentQuizQuestion < element.quizQuestions.length - 1) {
            setCurrentQuizQuestion(currentQuizQuestion + 1);
        } else {
            setQuizStarted(false);
        }
    };

    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFactIndex((prevIndex) => (prevIndex + 1) % element.funFacts.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [element.funFacts.length]);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Set custom site title */}
            <Head>
                <title>Aluminum Exploration</title>
                <meta name="description" content="Learn about Aluminum, its properties, uses, and fun facts!" />
            </Head>

            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-blue-500 to-gray-500 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-white mb-4 hover:text-blue-300 transition-colors duration-300">
                            {element.name}
                        </h1>
                        <p className="text-4xl font-semibold text-white hover:text-blue-300 transition-colors duration-300">
                            {element.symbol}
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-30"></div>
            </div>

            {/* Element Overview Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <Image
                            src="/elementimage/image.png"
                            alt={element.name}
                            width={400}
                            height={400}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                        <h2 className="text-3xl font-bold mb-4">Basic Information</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <FaAtom className="text-blue-500 mr-2" />
                                <span>Atomic Number: {element.atomicNumber}</span>
                            </div>
                            <div className="flex items-center">
                                <FaWeightHanging className="text-blue-500 mr-2" />
                                <span>Atomic Mass: {element.atomicMass}</span>
                            </div>
                            <div className="flex items-center">
                                <FaLayerGroup className="text-blue-500 mr-2" />
                                <span>Group: {element.group}</span>
                            </div>
                            <div className="flex items-center">
                                <FaTable className="text-blue-500 mr-2" />
                                <span>Period: {element.period}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive 3D Model Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-3xl font-bold mb-4">3D Model</h2>
                    <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                        <iframe
                            className="w-full h-full rounded-lg"
                            title="Aluminum Molecule"
                            frameBorder="0"
                            allowFullScreen
                            src="https://sketchfab.com/models/3b7e1d84707c46aeb6cd7f647cfd66a8/embed?autospin=1&autostart=1&preload=1">
                        </iframe>
                    </div>
                </div>
            </div>

            {/* Detailed Information Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex mb-4">
                        {["properties", "uses", "isotopes"].map((tab) => (
                            <button
                                key={tab}
                                className={`mr-4 px-4 py-2 rounded-lg ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                                onClick={() => handleTabChange(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {activeTab === "properties" && (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Properties</h3>
                            {element.properties.map((prop, index) => (
                                <div
                                    key={index}
                                    className="mb-2 border-b-2 border-gray-300 pb-2"
                                >
                                    <h4 className="font-semibold">{prop.name}</h4>
                                    <p>{prop.value}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "uses" && (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Uses</h3>
                            {element.uses.map((use, index) => (
                                <div
                                    key={index}
                                    className="mb-2 border-b-2 border-gray-300 pb-2"
                                >
                                    <p>{use.value}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "isotopes" && (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Isotopes</h3>
                            {element.isotopes.map((iso, index) => (
                                <div
                                    key={index}
                                    className="mb-2 border-b-2 border-gray-300 pb-2"
                                >
                                    <h4 className="font-semibold">{iso.name}</h4>
                                    <p>{iso.value}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Fun Facts Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-3xl font-bold mb-4">Fun Facts</h2>
                    <p className="text-xl">{element.funFacts[currentFactIndex]}</p>
                </div>
            </div>

            {/* Quiz Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-3xl font-bold mb-4">Quiz</h2>
                    {!quizStarted ? (
                        <button
                            onClick={startQuiz}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors"
                        >
                            Start Quiz
                        </button>
                    ) : (
                        <div>
                            <h3 className="text-xl mb-4">
                                Question {currentQuizQuestion + 1}: {element.quizQuestions[currentQuizQuestion].question}
                            </h3>
                            {element.quizQuestions[currentQuizQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuizAnswer(index)}
                                    className="block bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2 mb-2"
                                >
                                    {option}
                                </button>
                            ))}
                            {answerFeedback && <p className="text-lg mt-2">{answerFeedback}</p>}
                        </div>
                    )}
                    {quizStarted && currentQuizQuestion === element.quizQuestions.length - 1 && (
                        <p className="text-lg mt-4">
                            Your score: {userScore} out of {element.quizQuestions.length}
                        </p>
                    )}
                </div>
            </div>

            {/* Community Comments Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-3xl font-bold mb-4">Community Comments</h2>
                    <p className="text-lg mb-4">Share your thoughts about Aluminum!</p>
                    <textarea className="w-full p-2 border border-gray-300 rounded-lg mb-4" rows="4" placeholder="Add your comment..."></textarea>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors">
                        Submit Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AluminumExplorationPage;
