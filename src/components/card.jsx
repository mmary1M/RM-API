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
export const card = (image, name, species) => {
    return(
        <>
            <img src={image} alt={name} />
              <h2>{name}</h2>
              <p>{species}</p>
        
        </>
    )
   
}