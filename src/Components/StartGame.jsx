import React from 'react'

function StartGame({ toggle }) {
    return (
        <div className="max-w-[1180px] h-screen flex items-center mx-auto">
            <div>
                <img src="/images/dices.png" alt="Dice" />
            </div>

            <div className="ml-10">
                <h1 className="text-[96px] whitespace-nowrap font-bold">
                    Dice Game
                </h1>

                <button
                    onClick={toggle}
                    className="mt-5 px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                    Play Now
                </button>
            </div>
        </div>
    )
}

export default StartGame
