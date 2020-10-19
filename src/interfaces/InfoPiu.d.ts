import User from './User';

interface InfoPiu {
    id: number;
    usuario: User;
    likers: Array<User>;
    favoritado_por: Array<User>;
    texto: string;
    horario: string;
};

export default InfoPiu;
