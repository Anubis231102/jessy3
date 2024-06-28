// Importar mongoose
const mongoose = require('mongoose');

// URL de la base de datos
const url_bd = 'mongodb://localhost:27017/EmpresaMamalona';

// Conectar a la base de datos
mongoose.connect(url_bd)
.then(() => {
    console.log('Conectado a la base de datos');
})
.catch((err) => {
    console.log(err);
});

// Esquema para la colección empleados
const esquema_Empleado = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    fecha_de_contratacion: {
        type: Date,
        required: true
    },
    departamento: {
        type: String,
        required: true
    },
    correo_electronico: {
        type: String,
        required: true
    },
});

// Modelo para la colección empleados
const Empleado = mongoose.model('Empleado', esquema_Empleado);

// Crear un nuevo documento en la colección empleados
Empleado.create({
    nombre: 'Amintas',
    apellido: 'Omen',
    puesto: 'Desarrollador',
    salario: 60000,
    fecha_de_contratacion: new Date('2020-01-15'),
    departamento: 'IT',
    correo_electronico: 'juan.perez@empresa.com'
})
.then((empleado) => {
    console.log('Empleado creado:', empleado);
})
.catch((err) => {
    console.log(err);
});
