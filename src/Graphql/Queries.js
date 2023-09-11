import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clm7e96134j4y01tf2e1p5d9u/master')
    // graphcms.setHeaders({
    //     authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    // });

const category = `
     id,
    name,
    products {code}
`
export const QUERY_PROJECTS = gql `
{
projects(){
    id
    createdAt
    name
    projectPicture {
      url
    }
    projectCatagory {
      categoryName
    }
  }
}
`

export const QUERY_CATAGORY = gql `
{
projectCatagories() {
    id
    categoryName
    categoryPicture {
      url
    }
    projects{
        id
        name
    }
  }
}
`

export const QUERY_DESIGNTIP = gql `
{
    designTips(){
        tip
    }
}
`
export const QUERY_BESTSELLER = gql `
{
    bestSellers(){
        description,
    picture {
      url
    }
    }
}
`

export const QUERY_NEWDESIGN = gql `
{
    newDesigns(){
        description,
        picture {url}
    }
}
`
export const QUERY_ALL_HOME = gql `
    query {
        newDesigns{
        description,
        picture {url}
    }

    bestSellers{
        description,
    picture {
      url
    }
    }

    designTips{
        tip
    }
    }
`

export const QUERY_ALL_Event = gql `
    query {
        events (first: 500){
             id,
    publishedAt,
    publishedBy {
      name
    },
    coverPicture {
      url
    },
    description,
    title
        }
    }
`

export const QUERY_ALL_PRODUCT = gql `
    query {
        products (first: 500){
            id,
            code,
            price,
            category {
            name
            },
            productColors {
            color,
            colorPicture {url}
            },
            size,
            stock,
            picture {url},
            detail
        }

        productColors (first: 500){
            color,
            colorPicture {
        url
      },
            id
        }

        categories (first: 500){
            id,
            name,
            products {code},
        }

    }
`