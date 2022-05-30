import {useRouter} from 'next/router'

function BuyTicket(){
    const router = useRouter()
    const route = router.query.index
    return(
        <h1>this page is about buying tickets for {route}</h1>
    )
}

export default BuyTicket