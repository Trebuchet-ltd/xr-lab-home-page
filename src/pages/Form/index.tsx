import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import {useAuth} from "../../api/auth";
import "../../styles/form.css";

const Form = () =>
{
   const {user, refreshAuth} = useAuth(true);
   console.log(user, refreshAuth());
    return (
        <>
            <Header />
            <div className="main">
                <div className="head">
                   <iframe title="registration" id="table" className="airtable-embed"
                    src="https://airtable.com/embed/shrxVmF8Ve1oQS1wM?backgroundColor=red"
                    frameBorder="0" width="100%" height="1500"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Form;
