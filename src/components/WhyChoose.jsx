import { FaBus } from "react-icons/fa";

const features = [
  {
    text: "Straight from farms, always fresh.",
    iconColor: "text-primary", // green
    iconPosition: "bottom",
  },
  {
    text: "Fast, on-time delivery to your door.",
    iconColor: "text-secondary", // red
    iconPosition: "top",
  },
  {
    text: "High quality at low prices.",
    iconColor: "text-primary", // green
    iconPosition: "bottom",
  },
  {
    text: "Safe shopping, stress-free always.",
    iconColor: "text-secondary", // red
    iconPosition: "top",
  },
];

const WhyChoose = () => {
  return (
    <div className="py-14 md:py-28 bg-gray-50">
      <div className="container">
        <h1 data-aos="fade" className="pb-16 tracking-wider text-2xl font-semibold text-dark text-center">
          Why Choose Us
        </h1>

        <div data-aos="fade" data-aos-delay="300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
            {features.map((item, index) => (
              <div key={index} className="text-center flex justify-center items-center flex-col gap-1 px-2">
                {item.iconPosition === "top" && (
                  <>
                    <FaBus className={`text-5xl ${item.iconColor}`} />
                    <p className={`text-5xl rotate-90 ${item.iconColor} text-center translate-x-5`}>....</p>
                  </>
                )}

                <p className="text-dark/70 font-semibold">{item.text}</p>

                {item.iconPosition === "bottom" && (
                  <>
                    <p className={`text-5xl rotate-90 ${item.iconColor} text-center translate-x-5`}>....</p>
                    <FaBus className={`text-5xl ${item.iconColor}`} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
