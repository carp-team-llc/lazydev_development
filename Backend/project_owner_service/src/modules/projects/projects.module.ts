
import { ProjectController } from "@controllers/projects/project.controller";
import express from "express";

const router = express.Router();
const projectController = new ProjectController();

router.post("/create-project", async (req, res) => {
  await projectController.createProjectController(req, res);
})
router.post("/add-repository", async (req, res) => {
  await projectController.addRepo(req, res);
})

router.get("/cannot", async (req, res) => {
  res.json({
    message: "Delete app!"
  })
})

export default router;