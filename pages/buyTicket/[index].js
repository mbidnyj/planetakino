import {useRouter} from 'next/router'
import Layout from '../../components/layout/layout'

function BuyTicket(){
    const router = useRouter()
    const route = router.query.index
    return(
        <Layout>
            <h1>this page is about buying tickets for {route}</h1>
        </Layout>
    )
}

export default BuyTicket