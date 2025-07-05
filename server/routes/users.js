import express from "express";
import { getUsers, createUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

console.log("🟢 [users.js] Definindo rotas para /api/users");

router.get("/", (req, res) => {
  console.log("🟢 [users.js] GET /api/users");
  getUsers(req, res);
});


router.post("/", (req, res) => {
    console.log("🟢 [users.js] POST /api/users");
    createUser(req, res);
  });
  

router.delete("/:id", (req, res) => {
  console.log(`🟢 [users.js] DELETE /api/users/${req.params.id}`);
  deleteUser(req, res);
});

export default router;
