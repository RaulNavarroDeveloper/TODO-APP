// import React from "react";
// import Layout from "@/components/Layout"

// export async function getStaticProps() {
//     const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/variety')
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     }
// }

// export default function ApiPrueba({data}){
//     return (
//         <Layout>
//             <h1>Página de Prueba</h1>
//             {data.map((data) => (
//                 console.log(data)
//             ))}
//         </Layout>
//     )
// }