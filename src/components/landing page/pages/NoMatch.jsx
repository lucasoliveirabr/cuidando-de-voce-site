import LinkButton from "../layouts/LinkButton";

export default function NoMatch() {
    return (
        <div>
            <h1>Ops, parece que você está no lugar errado.</h1><br />
            <p>Deseja voltar para a tela inicial?</p><br />
            <LinkButton to="/" text="Voltar" />
        </div>
    )
}