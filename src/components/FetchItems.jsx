import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

// import itemSlice from "../store/itemSlice";


const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if(fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    // dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {

        // dispatch(fetchStatusActions.markFetchDone());
        // dispatch(fetchStatusActions.fetchingFinished());
        dispatch(itemsActions.addInitialItems(items));
      });

    return () => {

      controller.abort();
    };
  }, [fetchStatus]);
  
  return (
    <>
      
    </>
  );
};
export default FetchItems;
