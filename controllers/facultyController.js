const { faculty } = require('../models');

exports.index = async (req, res) => {
    const faculties = await faculty.findAll();
    
    const data = { 
        title: 'Data Fakultas',
        content: '../faculty/index',
        faculties
    }
    res.render('layouts/index', data)
}