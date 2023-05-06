import { Router } from "express"
import { getEmployees, getEmployee, createEmployes, updateEmployees, deleteEmployees } from "../controllers/employees.controllers.js";

const router = Router()

router.get('/employees', getEmployees )

router.get('/employees/:id', getEmployee )

router.post('/employees', createEmployes)

router.patch('/employees/:id', updateEmployees)

router.delete('/employees/:id', deleteEmployees)

export default router