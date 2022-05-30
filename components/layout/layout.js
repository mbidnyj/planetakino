import Footer from './footer'
import MainNavigation from './mainNavigation'

function Layout(props){
    return(
        <div>
            <MainNavigation/>
                {props.children}
            <Footer/>  
        </div>
    )
}

export default Layout