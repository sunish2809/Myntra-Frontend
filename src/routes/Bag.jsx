import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Bag = () => {

  const bagItems = useSelector(state => state.bag);
  const Items =useSelector(state =>state.items);
  const finalItems = Items.filter((item) =>{
    const itemindex = bagItems.indexOf(item.id)
    return itemindex>=0;
  })
  
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map(item => <BagItem item={item}></BagItem>)}
            {/* <BagItem item={item}></BagItem> */}
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};
export default Bag;
