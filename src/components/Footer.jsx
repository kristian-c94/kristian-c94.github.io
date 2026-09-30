function Footer (){

var currentYear = (new Date()).getFullYear()

    return (
        <footer>
            {currentYear}
            Copyright
        </footer>
    )

}

export default Footer