const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config();

const services = [
    {
        title: 'Web Development & Management',
        description: 'We build responsive, scalable, and SEO-friendly websites tailored to your business needs.',
    },
    {
        title: 'Digital Marketing',
        description: 'Boost your online presence with our expert SEO, PPC, and social media marketing services.',
    },
    {
        title: 'Mobile App Development',
        description: 'Get custom Android and iOS apps built using the latest frameworks and technologies.',
    },
    {
        title: 'IT Consultancy',
        description: 'We provide strategic IT advice to align technology with your business goals.',
    },
    {
        title: 'Graphic Design',
        description: 'Our creative team delivers stunning logos, branding, and marketing designs.',
    },
];

const seedServices = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        await Service.deleteMany();
        await Service.insertMany(services);
        console.log('✅ Services seeded successfully!');
        process.exit();
    } catch (err) {
        console.error('❌ Error seeding services:', err);
        process.exit(1);
    }
};

seedServices();
