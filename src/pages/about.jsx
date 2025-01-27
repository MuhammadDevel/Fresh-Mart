import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="min-h-screen bg-pink-50 text-gray-800">
            {/* Header Section */}
            <div className="text-center py-10 bg-pink-100 shadow-md">
                <h1 className="text-4xl font-bold text-pink-600">About Us</h1>
                <p className="mt-2 text-lg">
                    Discover the story behind Fresh & Healthy and our mission to deliver wholesome meals to Miami.
                </p>
            </div>

            {/* Mission and Vision Section */}
            <div className="max-w-6xl mx-auto py-10 px-6">
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <img
                            src="/mission.jpg"
                            alt="Our Mission"
                            className="rounded-md shadow-md w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            At Fresh & Healthy, our mission is to revolutionize the way Miami eats by providing
                            delicious, nutritious, and convenient meal plans. We’re here to help you prioritize
                            your health and enjoy every bite along the way.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-10">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-pink-600 mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-700">
                            We envision a world where eating healthy is effortless and accessible to everyone.
                            With our expertly crafted meal plans, we strive to make Miami healthier, one plate at a time.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/vission.webp"
                            alt="Our Vision"
                            className="rounded-md shadow-md w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-pink-100 py-10">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 shadow-md rounded-md">
                            <h3 className="text-xl font-semibold text-gray-700">Fresh Ingredients</h3>
                            <p className="mt-2 text-gray-600">
                                We source only the freshest, locally grown ingredients to ensure top-notch
                                quality and taste.
                            </p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-md">
                            <h3 className="text-xl font-semibold text-gray-700">Expertly Crafted</h3>
                            <p className="mt-2 text-gray-600">
                                Our chefs and nutritionists create balanced meals that are both healthy and
                                satisfying.
                            </p>
                        </div>
                        <div className="bg-white p-6 shadow-md rounded-md">
                            <h3 className="text-xl font-semibold text-gray-700">Convenient Delivery</h3>
                            <p className="mt-2 text-gray-600">
                                Enjoy fresh meals delivered straight to your doorstep, right when you need them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="max-w-6xl mx-auto py-10 px-6">
                <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="text-center">
                        <img
                            src="/chef.jpg"
                            alt="Team Member"
                            className="w-40 h-40 mx-auto rounded-full shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 mt-4">Sarah Johnson</h3>
                        <p className="text-gray-600">Head Chef</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="/nutritionist.jpg"
                            alt="Team Member"
                            className="w-40 h-40 mx-auto rounded-full shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 mt-4">David Martinez</h3>
                        <p className="text-gray-600">Nutrition Expert</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="/manager.jpeg"
                            alt="Team Member"
                            className="w-40 h-40 mx-auto rounded-full shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 mt-4">Emily Smith</h3>
                        <p className="text-gray-600">Operations Manager</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="text-center py-10 bg-pink-100">
                <h2 className="text-3xl font-bold text-pink-600">Join Us on Our Mission</h2>
                <p className="mt-2 text-lg">
                    Ready to start your journey to a healthier lifestyle? Browse our meal plans today!
                </p>
                <Link to="/MealPlan">
                <button
                    // href="/mealPlan.jsx"
                    className="inline-block mt-6 bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300"
                >
                    View Meal Plans
                </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
