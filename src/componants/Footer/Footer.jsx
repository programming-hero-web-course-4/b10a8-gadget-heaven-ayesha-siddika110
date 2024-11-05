

const Footer = () => {
    return (
        <div className="bg-slate-100 py-6">
            <div className="border-b py-5 text-center space-y-2 w-[80%] m-auto">
                <h1 className="text-3xl font-semibold">Gadget Heaven</h1>
                <p className="text-sm text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="flex w-[50%] m-auto justify-between  text-center py-4">
                <div className="space-y-1">
                    <h1 className="text-2xl">Services</h1>
                    <div className=" text-gray-500 space-y-1">
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                    </div>
                    
                </div>
                <div className="space-y-1  text-center">
                    <h1 className="text-2xl">Company</h1>
                    <div className=" text-gray-500 space-y-1">
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                    </div>
                    
                </div>
                <div className="space-y-1 text-center">
                    <h1 className="text-2xl">Legal</h1>
                    <div className="space-y-1 text-gray-500 ">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    );
};

export default Footer;