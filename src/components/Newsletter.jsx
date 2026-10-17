import { useState } from "react";
import Title from "./Title";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Email:", email);

        // TODO: Call your API here

        setEmail("");
    };

    return (
        <div className="flex flex-col items-center mx-4 my-36">
            <Title
                title="Join Newsletter"
                description="Subscribe to get exclusive deals, new arrivals, and insider updates delivered straight to your inbox every week."
                visibleButton={false}
            />

            <form
                onSubmit={handleSubmit}
                className="flex bg-slate-100 text-sm p-1 rounded-full w-full max-w-xl my-10 border-2 border-white ring ring-slate-200"
            >
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 pl-5 outline-none bg-transparent"
                    required
                />

                <button
                    type="submit"
                    className="font-medium bg-green-500 text-white px-7 py-3 rounded-full hover:scale-105 hover:bg-green-600 active:scale-95 transition-all duration-300"
                >
                    Get Updates
                </button>
            </form>
        </div>
    );
};

export default Newsletter;