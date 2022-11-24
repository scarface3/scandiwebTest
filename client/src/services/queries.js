import { gql } from '@apollo/client';

export const LOAD_ALl = gql`
query{
    categories{
        name
        products{
            id
            name
            inStock
            gallery
            description
            category
            attributes{
                id
                name
                type
                items{
                    displayValue
                    value
                    id
                }
            }
            prices{
                currency{
                    label
                    symbol
                }
                amount
            }
            brand
        }
    }
}
`

export const LOAD_CATEGORIES = gql`
query{
    categories{
        name
    }
}
`
export const LOAD_CATEGORY = gql`
query{
    category{
        name
        products{
            id
            name
            inStock
            gallery
            description
            category
            attributes{
                id
                name
                type
                items{
                    displayValue
                    value
                    id
                }
            }
            prices{
                currency{
                    label
                    symbol
                }
                amount
            }
            brand
        }
    }
}
`
export const LOAD_CURRENCIES = gql`
{
currencies{
        label
        symbol
    }
}
`
// export const GET_CATEGORY = gql`
// query getCategory($input: {
//         $title: String!
//     }){
//        category($input: {
//         title: $title
//     }){
//         name}
//     }
// `
