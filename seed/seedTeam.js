const mongoose = require('mongoose');
const dotenv = require('dotenv');
const TeamMember = require('../models/TeamMember');

dotenv.config();

const seedTeam = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await TeamMember.deleteMany();

    const teamData = [
      {
        name: "Yadnesh Naik",
        role: "Founder & CEO",
        position: "Full Stack Developer",
        bio: "Expert in Full Stack Developer and UI design.",
        linkedin: "https://www.linkedin.com/in/yadnesh-naik-286a6b235/",
        email: "naikyadnesh9@gmail.com"
      },
      {
        name: "Vaidehi Naik",
        role: "Co-Founder",
        position: "Full Stack Developer",
        bio: "Expert in Full Stack Developer and UI design.",
        linkedin: "https://www.linkedin.com/in/vaidehi-naik-a67228240/",
        email: "12vaidehinaik@gmail.com"
      },
    ];

    await TeamMember.insertMany(teamData);
    console.log('Team members seeded successfully');
    process.exit();
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedTeam();
