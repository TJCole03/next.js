import styles from './style.module.css'

const DocsPage = ({ params }) => {
    console.log({params})
    return <div className={styles.title} >DOCS ;lkjaoienav</div>
}

export default DocsPage

// FROM PREVIOUS LESSONS (BELOW)

// const DocsIdPage = ({params}) => {
//     return <div>asdf asdf asdf THIS IS THE DOCS ID PAGE {params.id} {params.title} </div>
// }

// export default DocsIdPage

// the page that you're on is underneath a dynamic segment
// params are objects that have properties on it but are named the same
// 

//  ...[id] ... is a catch-all route; means every route, no matter how many segments after id, 
// show this page i'm about to make;

//segments, segments, segments; 
// folders have segments and segments are components and components contain fucntions which 
// contains OOP and javascript 