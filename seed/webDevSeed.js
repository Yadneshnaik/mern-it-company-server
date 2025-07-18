const mongoose = require('mongoose');
const dotenv = require('dotenv');
const WebDev = require('../models/WebDev');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const data = [
  {
    title: "Basic Plan",
    price: "₹17,000",
    description: "Ideal for small businesses and startups looking to establish their online presence.",
    features: [
      "Custom-designed 5-page website",
      "Mobile-friendly",
      "Responsive design",
      "Contact form integration",
      "Social media integration (links/icons)",
      "2 rounds of revision"
    ],
    whatIsFree: ["Domain", "4 free logos", "15 royalty free images"]
  },
  {
    title: "Standard Plan",
    price: "₹27,000",
    description: "Suitable for growing businesses that require additional features and functionality.",
    features: [
      "Custom-designed 10-page website.",
      "Image gallery/portfolio showcase.",
      "Blog integration.",
      "Google Maps integration.",
      "Newsletter signup integration.",
      "4 rounds of revisions."
    ],
    whatIsFree: ["Domain", "Basic Plan features Included"]
  },
  {
    title: "Premium Plan",
    price: "₹40,000",
    description: "Designed for established businesses seeking a robust and dynamic online platform.",
    features: [
      "Custom-designed 15-page website.",
      "Advanced on-page SEO optimization.",
      "E-commerce functionality.",
      "Secure payment gateway integration.",
      "User registration and login system.",
      "Advanced forms",
      "Multiple rounds of revisions."
    ],
    whatIsFree: ["Domain", "Standard Plan features Included"]
  }
];

WebDev.insertMany(data)
  .then(() => {
    console.log('Web development plans seeded');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
  