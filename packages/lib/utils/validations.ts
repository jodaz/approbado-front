export const USERNAME = {
    rules: {
        required: true,
    },
    messages: {
        required: "Campo requerido.",
    }
}

export const PHONE = {
    rules: {
        required: true,
        pattern: /^\d+$/,
        notfound: true,
        unique: true,
        minLength: 3,
        deleted: true,
    },
    messages: {
        required: "Campo requerido.",
        pattern: "Introduzca un número de teléfono válido",
        notfound: "El usuario no ha sido encontrado.",
        unique: "El teléfono ha sido registrado.",
        minLength: "El teléfono es muy corto.",
        deleted: "La cuenta asociada ha sido eliminada por el usuario.",
    },
};

export const PASSWORD = {
    rules: {
        required: true,
        minLength: 6,
        maxLength: 12,
        invalid: true,
        validate: true,
        wrong: true
    },
    messages: {
        required: "Campo requerido.",
        minLength: "Mínimo 6 caracteres.",
        maxLength: "La contraseña no puede exceder los 12 dígitos.",
        invalid: "Credenciales inválidas.",
        validate: "Las contraseñas no coinciden.",
        wrong: "Contraseña incorrecta.",
    },
};

export const EMAIL = {
    rules: {
        required: true,
        pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        unique: true,
        notfound: true,
        deleted: true,
        verify: true,
        byrrss: true,
    },
    messages: {
        byrrss: "Debe iniciar sesión por una red social.",
        deleted: "La cuenta asociada ha sido eliminada por el usuario.",
        unique: "El correo ha sido registrado.",
        required: "Campo requerido.",
        pattern: "Email inválido",
        verify: "Debe verificar su correo electrónico.",
        notfound: "El usuario no ha sido encontrado.",
    },
};
