const Presenca = require('../models/Presenca');

exports.getPresencas = async (req, res) => {
    try {
        const presencas = await Presenca.find();
        res.json(presencas);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createPresenca = async (req, res) => {
    const { nome, resumo, localizacao, foto } = req.body;
    const newPresenca = new Presenca({ nome, resumo, localizacao, foto });

    try {
        const savedPresenca = await newPresenca.save();
        res.status(201).json(savedPresenca);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updatePresenca = async (req, res) => {
    try {
        const updatedPlantation = await Plantation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPlantation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deletePresenca = async (req, res) => {
    try {
        await Presenca.findByIdAndDelete(req.params.id);
        res.json({ message: 'Presenca delada' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
