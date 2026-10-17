// import Hero from '../components/Hero';
import Layout from '../components/Layout';
import OurSpecs from '../components/OurSpecs';
import Newsletter from '../components/Newsletter';
import BestSelling from '../components/BestSelling';
import LatestProducts from '../components/LatestProducts';

const HomePage = () => {
    return (
        <Layout>
            {/* <Hero /> */}
            <LatestProducts />
            <BestSelling />
            {/* <OurSpecs /> */}
            {/* <Newsletter /> */}
        </Layout>
    )
}

export default HomePage;