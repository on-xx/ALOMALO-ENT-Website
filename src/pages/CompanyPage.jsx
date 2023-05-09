import CEOGreet from "../components/CEOGreet"
import Footer from "../components/Footer"

const CompanyPage = () => {
    return (
        <>
            <div className="companypage">
                <CEOGreet />
                <div className="companypage-img-wrapper container">
                    <div className="companypage-img">
                        <img src="../img/company-1.png" alt="company-img" />
                    </div>
                    <div className="companypage-img">
                        <img src="../img/company-2.png" alt="company-img" />
                    </div>
                    <div className="companypage-img location">
                        <h1 className="location-title">Contact Us</h1>
                        <img src="../img/location.png" alt="company-img" />
                    </div>
                </div>

            </div>
            <Footer />
        </>


    )
}

export default CompanyPage