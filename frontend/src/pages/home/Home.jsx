import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (

		<div className="flex flex-col items-center">
			<div className="flex items-center justify-center space-x-2 my-4">
				<img src="/msg.png" alt="Icon" className="w-8 h-8" />
				<h1 className="text-3xl font-bold text-white">Chater Box</h1>
			</div>
			<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<Sidebar />
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;
