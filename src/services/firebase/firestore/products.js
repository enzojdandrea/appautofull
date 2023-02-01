import { getDocs, getDoc, doc, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'

import { creatAdapterProdcutsFormFirestore } from '../../../adapters/productAdapter'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(db, 'bdProductos'), where('categoria', '==', categoryId))
            : collection(db, 'bdProductos')
        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                return creatAdapterProdcutsFormFirestore(doc)
            })
            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        const productRef = doc(db, 'bdProductos', productId)
        getDoc(productRef)
            .then(product => {
                const productAdapted = creatAdapterProdcutsFormFirestore(product)
                resolve(productAdapted)
            }).catch(error => {
                reject(error)
            })
    })
}