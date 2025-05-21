import { ReactNode } from "react";

interface UserProps {
    name: string; // Props é utilizado para passar dados entre componentes
    children?: ReactNode // ?: significa que não é obrigatorio / Children é utilizado para dados mas principalmente para enviar conteudos ou outros componentes.
}

const User = ({name, children}: UserProps ) => {
    return (
        <div>
            <p>Usuário: {name}</p>
            {children && <div>{children}</div>}
        </div>
    )
}

export default User;