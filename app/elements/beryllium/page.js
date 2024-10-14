'use client';
import React, { useState, useEffect } from "react";
import { FaAtom, FaWeightHanging, FaLayerGroup, FaTable } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import Image from 'next/image';
import Head from 'next/head';

const BerylliumExplorationPage = () => {
    // Define the element object at the beginning of the component
    const element = {
        name: "Beryllium",
        symbol: "Be",
        atomicNumber: 4,
        atomicMass: 9.0122,
        group: 2,
        period: 2,
        image: "https://example.com/beryllium-image.jpg",
        properties: [
            { name: "Physical Properties", value: "Beryllium is a gray-white metal." },
            { name: "Chemical Properties", value: "It is a strong and lightweight metal." }
        ],
        uses: [
            { value: "Used in aerospace applications." },
            { value: "Commonly used in X-ray equipment." },
            { value: "Used in nuclear reactors." }
        ],
        isotopes: [
            { name: "Beryllium-9", value: "The only stable isotope of beryllium." }
        ],
        funFacts: [
            "Beryllium was discovered in 1798 by Louis-Nicolas Vauquelin.",
            "It is the fourth element in the periodic table.",
            "Beryllium is toxic in its powdered form."
        ],
        quizQuestions: [
            { question: "What is the atomic number of Beryllium?", options: ["3", "4", "5", "6"], correctAnswer: 1 },
            { question: "In which group is Beryllium located?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
            { question: "What is a common use for Beryllium?", options: ["Glass production", "Nuclear reactors", "Construction", "Jewelry"], correctAnswer: 1 }
        ]
    };

    const [activeTab, setActiveTab] = useState("properties");
    const [expandedSection, setExpandedSection] = useState(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState("");

    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    // Moved useEffect after element definition
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentFactIndex((prevIndex) => (prevIndex + 1) % element.funFacts.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [element.funFacts.length]); // This line should now work without errors

    // Your other component logic (functions and return statement) remains unchanged...

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

    return (
        <div className="bg-gray-100 min-h-screen">
            <Head>
                <title>Beryllium Exploration</title>
                <meta name="description" content="Learn about Beryllium, its properties, uses, and fun facts!" />
            </Head>

            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-green-500 to-gray-500 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-white mb-4 hover:text-green-300 transition-colors duration-300">
                            {element.name}
                        </h1>
                        <p className="text-4xl font-semibold text-white hover:text-green-300 transition-colors duration-300">
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
                            src="/elementimage/image copy 2.png"
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
                                <FaAtom className="text-green-500 mr-2" />
                                <span>Atomic Number: {element.atomicNumber}</span>
                            </div>
                            <div className="flex items-center">
                                <FaWeightHanging className="text-green-500 mr-2" />
                                <span>Atomic Mass: {element.atomicMass}</span>
                            </div>
                            <div className="flex items-center">
                                <FaLayerGroup className="text-green-500 mr-2" />
                                <span>Group: {element.group}</span>
                            </div>
                            <div className="flex items-center">
                                <FaTable className="text-green-500 mr-2" />
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
                            title="Beryllium Molecule"
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
                                className={`mr-4 px-4 py-2 rounded-lg ${activeTab === tab ? "bg-green-500 text-white" : "bg-gray-200"}`}
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
                    <p className="text-lg mb-4">Share your thoughts about Beryllium!</p>
                    <textarea className="w-full p-2 border border-gray-300 rounded-lg mb-4" rows="4" placeholder="Add your comment..."></textarea>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors">
                        Submit Comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BerylliumExplorationPage;
