import { useState, useEffect } from "react";

const Home = () => {

    const [greeting, setGreeting] = useState<string>("");

    useEffect(() => {
        getGreeting();
    }, []);

    function getGreeting() {
        const date = new Date();
        const hour = date.getHours();
        if (hour < 12) {
            setGreeting("Good Morning");
        } else if (hour < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }

    }

    return (
        <div>
            <div>
                <h1>
                    {greeting}
                </h1>
            </div>

                <div>
                    <h1>
                        Last Played
                    </h1>
                    <div className="flex bg-stone-900 p-3 rounded-3xl text-center justify-center items-center w-52 h-60 text-white">
                        <h2>Mapped Data</h2>
                    </div>
                </div>

                <div>
                    <h1>
                        Recommended
                    </h1>
                    <div className="flex bg-stone-900 p-3 rounded-3xl text-center justify-center items-center w-52 h-60 text-white">
                        <h2>Mapped Data</h2>
                    </div>
                </div>

                <div>
                    <h1>
                        Podcasts
                    </h1>
                    <div className="flex bg-stone-900 p-3 rounded-3xl text-center justify-center items-center w-52 h-60 text-white">
                        <h2>Mapped Data</h2>
                    </div>
                </div>

                <div>
                    <h1>
                        Concerts
                    </h1>
                    <div className="flex bg-stone-900 p-3 rounded-3xl text-center justify-center items-center w-52 h-60 text-white">
                        <h2>Mapped Data</h2>
                    </div>
                </div>

                <div>
                    <h1>
                        New Releases
                    </h1>
                    <div className="flex bg-stone-900 p-3 rounded-3xl text-center justify-center items-center w-52 h-60 text-white">
                        <h2>Mapped Data</h2>
                    </div>
                </div>

        </div>

    )
}

export default Home;