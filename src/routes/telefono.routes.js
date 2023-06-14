import { Router } from "express";
import { methods as telefonoController } from "./../controllers/telefono.controller";

const router = Router();

router.get("/", telefonoeController.getTelefono);
router.get("/:id", telefonoController.getTelefono);
router.post("/", telefonoController.addTelefono);
router.put("/:id", telefonoController.updateTelefono);
router.delete("/:id", telefonoController.deleteTelefono);

export default router;