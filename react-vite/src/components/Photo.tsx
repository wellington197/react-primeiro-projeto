type Props = {
    url: string;
    legend:string;
}

/*Criando componente Photo */
export const Photo = ({url,legend}: Props) => {
    return (
        <div>
            <img src={url}/>
            <p>{legend}</p>

        </div>
    );
}