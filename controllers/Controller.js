exports.homePage = (req, res) => {
    res.render('PaginaPrincipal'); 
  };
  
  exports.showForm = (req, res) => {
    res.render('Formulario'); 
  };
  
  exports.submitForm = (req, res) => {
    const { name, age, email } = req.body;
    res.redirect(`/confirm?name=${name}&age=${age}&email=${email}`);
  };
  
  exports.confirmationPage = (req, res) => {
    const { name, age, email } = req.query;
    res.render('PaginaConfirmacion', { name, age, email }); 
  };
  