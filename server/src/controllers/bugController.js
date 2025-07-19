import Bug from '../models/Bug.js';

// Get all bugs
export const getBugs = async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
};

// Create a bug
export const createBug = async (req, res) => {
  const { title, description, priority } = req.body;
  const newBug = new Bug({ title, description, priority });
  const savedBug = await newBug.save();
  res.status(201).json(savedBug);
};

// Get bug by ID
export const getBugById = async (req, res) => {
  const bug = await Bug.findById(req.params.id);
  if (bug) {
    res.json(bug);
  } else {
    res.status(404).json({ message: 'Bug not found' });
  }
};

// Update bug
export const updateBug = async (req, res) => {
  const { title, description, priority, status } = req.body;
  const bug = await Bug.findById(req.params.id);
  if (bug) {
    bug.title = title || bug.title;
    bug.description = description || bug.description;
    bug.priority = priority || bug.priority;
    bug.status = status || bug.status;
    const updatedBug = await bug.save();
    res.json(updatedBug);
  } else {
    res.status(404).json({ message: 'Bug not found' });
  }
};

// Delete bug
export const deleteBug = async (req, res) => {
  const bug = await Bug.findById(req.params.id);
  if (bug) {
    await bug.deleteOne();
    res.json({ message: 'Bug deleted' });
  } else {
    res.status(404).json({ message: 'Bug not found' });
  }
};
