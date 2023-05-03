
interface ICard{
    id: number
    paragraph: string
    details: string
}


export const Card = ({ id, paragraph, details }: ICard) => (

        <div>
            <h1>Tool {id}</h1>
            <p>{paragraph}</p>
            <p>{details}</p>
        </div>


)