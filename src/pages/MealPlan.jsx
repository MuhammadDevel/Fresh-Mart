import PrimaryButton from "../components/Shared/PrimaryButton";

const MealPlan = () => {
  const plans = [
    {
      id: 1,
      name: "Vegetarian Plan",
      description:
        "A delicious variety of plant-based meals, perfect for vegetarians. Get the nutrients you need with fresh vegetables, grains, and legumes.",
      price: "$99/week",
      image: "/meal-plan/vegetarian.avif",
    },
    {
      id: 2,
      name: "Keto Plan",
      description:
        "Low-carb, high-fat meals designed to support your ketogenic lifestyle. Enjoy the taste while maintaining your health goals.",
      price: "$119/week",
      image: "/meal-plan/keto.jpg",
    },
    {
      id: 3,
      name: "Family Plan",
      description:
        "Wholesome meals that the whole family will love. Balanced nutrition with diverse options to please everyone.",
      price: "$149/week",
      image: "/meal-plan/family.jpg",
    },
  ];

  return (
    <div className="container py-14">
      <h1
        data-aos="fade-up"
        className="py-8 text-3xl sm:text-4xl font-bold text-center text-primary"
      >
        Choose Your Meal Plan
      </h1>
      <p
        data-aos="fade-up"
        className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-10"
      >
        Select from our carefully designed meal plans to suit your lifestyle.
        All meals are freshly prepared and delivered to your doorstep.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((plan) => (
          <div
            key={plan.id}
            data-aos="fade-up"
            className="bg-white shadow-md rounded-lg p-6"
          >
            <img
              src={plan.image}
              alt={plan.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="mt-4 text-xl font-semibold text-dark">
              {plan.name}
            </h2>
            <p className="text-gray-600 my-3">{plan.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-primary text-lg font-bold">{plan.price}</span>
              <PrimaryButton />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;
