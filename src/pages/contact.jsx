const Contact = () => {
    return (
        <div className="min-h-screen bg-pink-50 text-gray-800">
            {/* Header Section */}
            <div className="text-center py-10 bg-pink-100 shadow-md">
                <h1 className="text-4xl font-bold text-pink-600">Contact Us</h1>
                <p className="mt-2 text-lg">We’d love to hear from you! Reach out for any inquiries or feedback.</p>
            </div>

            {/* Main Contact Section */}
            <div className="max-w-6xl mx-auto py-10 px-6">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-pink-600 mb-4">Send Us a Message</h2>
                        <form className="bg-white p-6 shadow-md rounded-md">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Your Name</label>
                                <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Your Email</label>
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Subject</label>
                                <input type="text" placeholder="Enter the subject" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold">Your Message</label>
                                <textarea placeholder="Enter your message" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" rows="5"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h2 className="text-2xl font-bold text-pink-600 mb-4">Get in Touch</h2>
                        <p className="mb-6">Feel free to reach out to us using the following contact details or visit us at our location.</p>
                        <div className="bg-white p-6 shadow-md rounded-md space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">Our Location</h3>
                                <p className="mt-2">123 Healthy Street, Miami, FL 33101</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
                                <p className="mt-2">+1 (305) 123-4567</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">Email</h3>
                                <p className="mt-2">support@freshhealthymeals.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-700">Working Hours</h3>
                                <p className="mt-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-pink-100 py-10">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <details className="bg-white p-4 shadow-md rounded-md">
                            <summary className="font-semibold cursor-pointer text-gray-700">How do I place an order?</summary>
                            <p className="mt-2 text-gray-600">You can place an order by visiting our website and selecting your desired meal plan. Simply follow the checkout process to confirm your order.</p>
                        </details>
                        <details className="bg-white p-4 shadow-md rounded-md">
                            <summary className="font-semibold cursor-pointer text-gray-700">What areas do you deliver to?</summary>
                            <p className="mt-2 text-gray-600">We currently deliver to Miami and surrounding areas. Check our delivery map for more details.</p>
                        </details>
                        <details className="bg-white p-4 shadow-md rounded-md">
                            <summary className="font-semibold cursor-pointer text-gray-700">Can I customize my meal plan?</summary>
                            <p className="mt-2 text-gray-600">Yes, you can customize your meal plan based on dietary preferences or specific requirements.</p>
                        </details>
                        <details className="bg-white p-4 shadow-md rounded-md">
                            <summary className="font-semibold cursor-pointer text-gray-700">What payment methods do you accept?</summary>
                            <p className="mt-2 text-gray-600">We accept all major credit cards, PayPal, and online bank transfers.</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
