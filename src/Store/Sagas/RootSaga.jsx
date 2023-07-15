import {all} from "redux-saga/effects"

import maincategorySaga from "./MaincategorySagas"
import subcategorySaga from "./SubcategorySagas"
import brandSaga from "./BrandSagas"
import productSaga from "./ProductSagas"

export default function* RootSaga(){
    yield all([
        maincategorySaga(),
        subcategorySaga(),
        brandSaga(),
        productSaga()
    ])
}