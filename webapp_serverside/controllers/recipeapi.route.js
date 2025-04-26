// controllers/testapi.route.js
const express = require('express');
const router = express.Router();
const testRepo = require('../utils/recipe.repository');

// Route GET /api/test
router.get('/', async (req, res) => {
  try {
    const nameexist = await testRepo.fetchallnames();
    if (!nameexist || nameexist.length === 0) {
      return res.status(404).json({ message: "No infos found" });
    }

    console.log(nameexist);
    res.json(nameexist);

  } catch (err) {
    console.error("Error fetching names:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
