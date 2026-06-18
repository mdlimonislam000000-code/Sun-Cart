
import React from 'react';
import Footer from '@/components/shared/Footer';

const MainLayout = ({children}) => {
    return (
        <div>
            
            {children}
            {/* <ProductPage></ProductPage> */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;