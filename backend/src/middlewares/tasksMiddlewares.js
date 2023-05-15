//VERIFICAÇÃO DE PREENCHIMENTO DO TITLE (PARA MÉTODO POST E PUT)
const validateFieldTitle = (req, res, next) =>{
    const { body } = req;

    if (body.title === undefined) {
        return res.status(400).json({message: 'The field "title" is required.'});
    };

    if (body.title === '') {
        return res.status(400).json({message: 'The "title" cannot be empty.'});
    };

    next();
};

//VERIFICAÇÃO DE PREENCHIMENTO DO STATUS (PARA MÉTODO PUT)
const validateFieldStatus = (req, res, next) =>{
    const { body } = req;

    if (body.status === undefined) {
        return res.status(400).json({message: 'The field "status" is required.'});
    };

    if (body.status === '') {
        return res.status(400).json({message: 'The "status" cannot be empty.'});
    };

    next();
};

module.exports = {
    validateFieldTitle,
    validateFieldStatus,
};