const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000; // or any port you prefer

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static('uploads'));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Trust', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define schema and model for User
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String },
  address: { type: String }
});

const User = mongoose.model('User', userSchema);

// Define schema and model for Innovation
const innovationSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  keywords: String,
  dateOfInnovation: Date,
  researchStage: String,
  image: String,
  documents: String,
  contactName: String,
  contactEmail: String,
  organization: String,
  collaborators: String,
  fundingSupport: String,
  impactBenefits: String,
  iprStatus: String,
  demoLink: String,
  approvalStatus: String,
  additionalNotes: String
});

const Innovation = mongoose.model('Innovation', innovationSchema);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// API route to handle innovation form submission
app.post('/submit-innovation', upload.fields([{ name: 'image' }, { name: 'documents' }]), async (req, res) => {
  try {
    // Create a new Innovation instance
    const innovation = new Innovation({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      keywords: req.body.keywords,
      dateOfInnovation: req.body.dateOfInnovation,
      researchStage: req.body.researchStage,
      image: req.files['image'] ? req.files['image'][0].path : '',
      documents: req.files['documents'] ? req.files['documents'][0].path : '',
      contactName: req.body.contactName,
      contactEmail: req.body.contactEmail,
      organization: req.body.organization,
      collaborators: req.body.collaborators,
      fundingSupport: req.body.fundingSupport,
      impactBenefits: req.body.impactBenefits,
      iprStatus: req.body.iprStatus,
      demoLink: req.body.demoLink,
      approvalStatus: req.body.approvalStatus,
      additionalNotes: req.body.additionalNotes
    });

    // Save the innovation document to the database
    await innovation.save();
    res.status(201).json({ message: 'Innovation submitted successfully!' });
  } catch (error) {
    console.error('Error submitting innovation form:', error);
    res.status(500).json({ error: 'Failed to submit innovation' });
  }
});

// Define schema and model for Startup
const startupSchema = new mongoose.Schema({
  startupName: String,
  tagline: String,
  logo: String, // We'll store the file path as a string
  founders: String,
  startupType: String,
  sector: String,
  email: String,
  phoneNumber: String,
  website: String,
  address: String,
  city: String,
  state: String,
  country: String,
  foundedDate: Date,
  employees: Number,
  fundingStage: String,
  totalFunding: Number,
  revenueModel: String
});

const Startup = mongoose.model('Startup', startupSchema);

// API route to handle startup form submission
app.post('/startup', upload.single('logo'), async (req, res) => {
  try {
    // Create a new Startup instance with the submitted form data
    const startup = new Startup({
      startupName: req.body.startupName,
      tagline: req.body.tagline,
      logo: req.file ? req.file.path : '', // Store logo file path
      founders: req.body.founders,
      startupType: req.body.startupType,
      sector: req.body.sector,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      website: req.body.website,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      foundedDate: req.body.foundedDate,
      employees: req.body.employees,
      fundingStage: req.body.fundingStage,
      totalFunding: req.body.totalFunding,
      revenueModel: req.body.revenueModel
    });

    // Save the startup document to the database
    await startup.save();
    res.status(201).json({ message: 'Startup submitted successfully!' });
  } catch (error) {
    console.error('Error submitting startup form:', error);
    res.status(500).json({ error: 'Failed to submit startup form' });
  }
});

// Define schema and model for Fund
const fundSchema = new mongoose.Schema({
  profileName: String,
  email: String,
  category: String,
  projectTitle: String,
  projectDescription: String,
  fundingAmount: Number,
  additionalInfo: String
});

const Fund = mongoose.model('Fund', fundSchema);

// API route to handle fund form submission
app.post('/submit-fund', async (req, res) => {
  try {
    const fund = new Fund(req.body);
    await fund.save();
    res.status(201).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Failed to save form data' });
  }
});

// Define schema and model for Research
const researchSchema = new mongoose.Schema({
  title: String,
  category: String,
  abstract: String,
  keywords: String,
  researchers: String,
  institution: String,
  startDate: Date,
  endDate: Date,
  status: String,
  funding: String,
  researchUrl: String
});

const Research = mongoose.model('Research', researchSchema);

// API route to handle research form submission
app.post('/submit-research', async (req, res) => {
  try {
    const research = new Research(req.body);
    await research.save();
    res.status(201).json({ message: 'Research data saved successfully!' });
  } catch (error) {
    console.error('Error saving research data:', error);
    res.status(500).json({ error: 'Failed to save research data' });
  }
});

// API route for user registration (sign-up)
app.post('/register', async (req, res) => {
  const { username, email, password, phoneNumber, address } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      phoneNumber,
      address
    });

    // Save the user to the database
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// API route for user login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ message: 'Login successful!', token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Failed to log in user' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
