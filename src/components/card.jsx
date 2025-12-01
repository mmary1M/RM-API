import s from './card.module.css'

// esport const Card = (props) =>{
//   return(
//       <>
//          <img src={image} alt={name} />
//            <h2>{name}</h2>
//            <p>{species}</p>
//      
//     </>
//  )
// }
//pode usar esse doois tipos mais esse com image, name, species é mais usado em empresas
export const Card = ({image, name, species}) => {
    return(
        <div className={s.cardBackground}>
        <img className={s.cardImage} src={image} alt={name} />
        <h2 className={s.cardTitle}>{name}</h2>
         <p className={s.cardText}>{species}</p>
        </div>
    )
}