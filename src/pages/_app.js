import Layout from '../app/layout'
import {Poppins} from "next/font/google";
import {Provider} from "react-redux";
import store from "../redux/store"
export const poppins = Poppins({
    weight:['100','200','300','400','500','600','700','800','900'],
    subsets:['latin'],
    display:"swap"
})

export default function MyApp({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <div className={poppins.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </Provider>


    )
}