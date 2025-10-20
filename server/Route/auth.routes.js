const express = require("express");
const { login, logout, register } = require("../Controller/auth.controller");
const { protect } = require("../Middleware/protectauth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Protected Route Example
router.get("/me", protect, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
