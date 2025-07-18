// seedOurStory.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const OurStory = require('../models/OurStory');

dotenv.config();

const seedStory = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await OurStory.deleteMany(); // Optional: clear existing entries

    const story = {
      title: "Our Journey in IT Innovation",
      subtitle: "Empowering Businesses with Technology",
      content:
        "Founded in 2023, our IT company began with a mission to deliver robust, scalable, and modern digital solutions to businesses worldwide. With a passionate team of developers, designers, and strategists, we specialize in transforming ideas into powerful digital experiences. Whether it's web development, mobile apps, digital marketing, or IT consulting, we are committed to driving innovation and delivering measurable results for our clients..",
      imageUrl: "https://i.postimg.cc/g0h455vV/Vista-Developer.png",
    };

    await OurStory.create(story);
    console.log('Our Story data seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedStory();
