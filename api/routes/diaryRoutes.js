const { Router } = require("express")

const diaryController = require("../controllers/diaryController")

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index)
diaryRouter.get("/:id", diaryController.show)
diaryRouter.post("/", diaryController.create);

module.exports = diaryRouter