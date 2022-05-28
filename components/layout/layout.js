import Footer from './footer'
import Header from './header'

function Layout(props){
    return(
        <div>
            <Header/>
                {props.children}
            <Footer/>  
        </div>
    )
}

export default Layout