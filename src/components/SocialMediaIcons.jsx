const SocialMediaIcons = () => {



    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a 
            className="hover:opacity-50 transition duration-500 "
            href="https://www.linkedin.com/in/zakaria-nachchache-a172ab194/"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="linkedin-link" src="../assets/linkedin.png"/>
            </a>

            <a 
            className="hover:opacity-50 transition duration-500 "
            href="https://web.facebook.com/zakaria.bilal.9081"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="facebook-link" src="../assets/facebook.png"/>
            </a>

            <a 
            className="hover:opacity-50 transition duration-500 "
            href="https://github.com/newbieheretolearn2"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="github-link" src="../assets/github.png"/>
            </a>
           {/*  
            <a 
            className="hover:opacity-50 transition duration-500 "
            href="javascript:myFunction()"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="zakaria.nachchache@gmail.com" src="../assets/email.png"/>
            </a> */}
          

        </div>
    )

}
export default SocialMediaIcons