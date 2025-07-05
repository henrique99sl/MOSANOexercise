import User from "../models/User.js";

// GET all users
export const getUsers = async (req, res) => {
  try {
    console.log("🟢 [getUsers] Pedido para obter todos os users");
    const users = await User.find();
    console.log(`✅ [getUsers] Enviando ${users.length} users`);
    res.json(users);
  } catch (err) {
    console.error("❌ Failed to fetch users:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// POST create
export const createUser = async (req, res) => {
  try {
    const data = req.body;
    console.log("🟢 [createUser] dados recebidos:", data);

    // Validação para campos obrigatórios
    if (
      !data ||
      !data.name ||
      !data.surname ||
      !data.country ||
      !data.birthday
    ) {
      console.warn("⚠️ Dados incompletos recebidos no POST, rejeitando.");
      return res.status(400).json({ message: "Missing required user data" });
    }

    if (data._id) {
      console.warn("⚠️ Foi recebido _id no POST, removendo para evitar duplicados.");
      delete data._id;
    }

    const newUser = new User(data);
    const saved = await newUser.save();

    console.log("✅ User criado e salvo na base de dados:", saved);
    res.status(201).json(saved);

  } catch (err) {
    if (err.code === 11000) {
      console.warn("⚠️ Tentativa de criar usuário duplicado:", err);
      return res.status(409).json({ message: "User already exists" });
    }
    console.error("❌ ERRO ao criar user:", err);
    res.status(500).json({ message: "Failed to create user" });
  }
};

// DELETE
export const deleteUser = async (req, res) => {
  try {
    console.log(`🟢 [deleteUser] Pedido para apagar user com id=${req.params.id}`);
    await User.findByIdAndDelete(req.params.id);
    console.log(`🗑️ User com id=${req.params.id} apagado.`);
    res.status(204).end();
  } catch (err) {
    console.error("❌ ERRO ao apagar user:", err);
    res.status(500).json({ message: "Failed to delete user" });
  }
};
