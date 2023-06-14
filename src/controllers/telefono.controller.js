import { getConnection } from "./../database/database";

const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM telefono");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getTelefono = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, Modelo, programmers FROM telefono WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addTelefono = async (req, res) => {
    try {
        const { name, programmers } = req.body;

        if (name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const telefono = { name, programmers };
        const connection = await getConnection();
        await connection.query("INSERT INTO telefono SET ?", telefono);
        res.json({ message: "Telefono added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateTelefono = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, programmers } = req.body;

        if (id === undefined || name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const telefono = { name, programmers };
        const connection = await getConnection();
        const result = await connection.query("UPDATE telefono SET ? WHERE id = ?", [telefono, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteTelefono = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM telefono WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getTelefonos,
    getTelefono,
    addTelefono,
    updateTelefono,
    deleteTelefono
};