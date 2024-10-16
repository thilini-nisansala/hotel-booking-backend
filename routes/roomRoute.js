import express from "express";
import {
    createRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom
} from "../controllers/roomController.js";

const router = express.Router();

// Routes for room management
router.post("/", createRoom);            // Create a new room (admin-only)
router.get("/", getRooms);               // Get all rooms (public)
router.get("/:id", getRoomById);         // Get room by ID (public)
router.put("/:id", updateRoom);          // Update a room by ID (admin-only)
router.delete("/:id", deleteRoom);       // Delete a room by ID (admin-only)

export default router;
