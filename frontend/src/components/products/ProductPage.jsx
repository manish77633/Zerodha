import Hero from './Hero'
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';



function ProductPage() {
	return (<>
		<Hero />
		<LeftSection
			image="media/kite.png"
			heading="Kite"
			description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices. "
			trydemo="Try demo →"
			learnmore="Learn more →"
			playstore="media/googlePlayBadge.svg"
			appstore="media/appstore-badge.svg"
		/>


		<RightSection
			image="media/console.png"
			heading="Console"
			description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. "
			learnmore="Learn more →"
		/>

		<LeftSection
			image="media/coin.png"
			heading="Coin"
			description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices. "
			learnmore="Coin →"
			
			playstore="media/googlePlayBadge.svg"
			appstore="media/appstore-badge.svg"
		/>

			<RightSection
			image="media/kiteconnect.png"
			heading="Kite Connect API"
			description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.  "
			learnmore="Kite Connect →"
		/>
				<LeftSection
			image="media/varsity.png"
			heading="Varsity mobile"
			description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go. "
			
			playstore="media/googlePlayBadge.svg"
			appstore="media/appstore-badge.svg"
		/>



		<Universe  />

	</>);
}

export default ProductPage;