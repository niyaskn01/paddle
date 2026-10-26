const orderMessage = `Hi MacroMatch, I'd like to order the ${meal.name} (₹${meal.price}). It has ${meal.calories} kcal and ${meal.protein}g protein. Please confirm availability.`;
const contactUrl = `https://wa.me/918089352660?text=${encodeURIComponent(orderMessage)}`;
