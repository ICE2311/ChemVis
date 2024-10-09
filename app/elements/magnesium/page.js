'use client'
import React, { useState, useEffect } from "react";
import { FaAtom, FaWeightHanging, FaLayerGroup, FaTable } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import '@google/model-viewer'
import Image from "next/image";

const MagnesiumExplorationPage = () => {
    const [activeTab, setActiveTab] = useState("properties");
    const [expandedSection, setExpandedSection] = useState(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [answerFeedback, setAnswerFeedback] = useState("");

    const element = {
        name: "Magnesium",
        symbol: "Mg",
        atomicNumber: 12,
        atomicMass: 24.31,
        group: 2,
        period: 3,
        image: "https://images.unsplash.com/photo-1583097221322-bc73610090a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI5fHxtYWdnZW5lc2l1bSUyMGltYWdlfGVufDB8fHx8MTY0OTk3MTg4MQ&ixlib=rb-1.2.1&q=80&w=400",
        properties: [
            { name: "Physical Properties", value: "Magnesium is a shiny gray solid." },
            { name: "Chemical Properties", value: "It reacts with water and acids." }
        ],
        uses: [
            { value: "Used in aircraft and missiles due to its light weight." },
            { value: "Important for human nutrition, involved in over 300 biochemical reactions." },
            { value: "Used in fireworks for bright white flames." }
        ],
        isotopes: [
            { name: "Magnesium-24", value: "Most abundant stable isotope." }
        ],
        funFacts: [
            "Magnesium was discovered in 1808 by Sir Humphry Davy.",
            "It is the eighth most abundant element in the universe.",
            "Magnesium is crucial for photosynthesis in plants."
        ],
        quizQuestions: [
            { question: "What is the atomic number of Magnesium?", options: ["10", "11", "12", "13"], correctAnswer: 2 },
            { question: "In which group is Magnesium located?", options: ["1", "2", "3", "4"], correctAnswer: 1 },
            { question: "What color is Magnesium in its elemental form?", options: ["Gray", "Blue", "Green", "Red"], correctAnswer: 0 }
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
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-green-500 to-blue-500 overflow-hidden">
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
                            src="/public/images/image.png"
                            alt={element.name}
                            width={400} // Specify appropriate width
                            height={256} // Specify appropriate height
                            className="w-full h-64 object-cover rounded-lg"
                            priority // Optional: Add this for images above the fold for better performance
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
                    <div className="bg-gray-200 rounded-lg flex items-center justify-center" style={{ height: '50vh' }} >
                        <model-viewer
                            src="/elements/magnesium.glb" // Ensure the correct path to your model
                            alt="A 3D model of Helium"
                            auto-rotate
                            camera-controls
                            style={{ width: '100%', height: '100%' }}
                        ></model-viewer>
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
                                    className="mb-4 p-4 bg-gray-100 rounded-lg cursor-pointer"
                                    onClick={() => toggleSection(`property-${index}`)}
                                >
                                    <h4 className="font-semibold">{prop.name}</h4>
                                    {expandedSection === `property-${index}` && (
                                        <p className="mt-2">{prop.value}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "uses" && (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Uses</h3>
                            <ul className="list-disc list-inside">
                                {element.uses.map((use, index) => (
                                    <li key={index} className="mb-2">
                                        {use.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {activeTab === "isotopes" && (
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Isotopes</h3>
                            {element.isotopes.map((isotope, index) => (
                                <div
                                    key={index}
                                    className="mb-4 p-4 bg-gray-100 rounded-lg cursor-pointer"
                                    onClick={() => toggleSection(`isotope-${index}`)}
                                >
                                    <h4 className="font-semibold">{isotope.name}</h4>
                                    {expandedSection === `isotope-${index}` && (
                                        <p className="mt-2">{isotope.value}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Fun Facts and Trivia Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-yellow-100 rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-4">Fun Facts and Trivia</h2>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-2">Did You Know?</h3>
                        <p className="text-center">{element.funFacts[currentFactIndex]}</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Quiz Time!</h3>
                        {!quizStarted ? (
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                onClick={startQuiz}
                            >
                                Start Quiz
                            </button>
                        ) : (
                            <div>
                                <p className="mb-4">{element.quizQuestions[currentQuizQuestion].question}</p>
                                {answerFeedback && <p className="font-semibold">{answerFeedback}</p>}
                                <div className="grid grid-cols-2 gap-4">
                                    {element.quizQuestions[currentQuizQuestion].options.map((option, index) => (
                                        <button
                                            key={index}
                                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                            onClick={() => handleQuizAnswer(index)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {!quizStarted && userScore > 0 && (
                            <p className="mt-4">Your score: {userScore}/{element.quizQuestions.length}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Community Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-3xl font-bold mb-4">Community</h2>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Share Your Experience</h3>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            rows="4"
                            placeholder="Share your experiments or practical uses of Magnesium..."
                        ></textarea>
                        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                            Submit
                        </button>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Comments</h3>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <p className="font-semibold">Alice Smith</p>
                            <p>Magnesium is essential for human health!</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="font-semibold">John Doe</p>
                            <p>Fascinating element with so many uses!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MagnesiumExplorationPage;
