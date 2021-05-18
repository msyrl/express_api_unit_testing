const { User, Item } = require("../models");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [{ model: Item }],
    });

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
      inclue: [{ model: Item }],
    });

    if (!user) {
      return res
        .status(404)
        .json({ error: "User with the specified ID does not exists" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await User.update(req.body, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await User.findOne({
      where: { id },
    });

    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(204).json({ message: "User deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
