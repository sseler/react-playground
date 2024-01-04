import { FC } from "react"
import { ListData } from "../static/ListData"

/*
1. Show every item from the ListData;
2. Create filtering option by type of product
3. Create search bar to searching by word. 

const handleSearch = (event) => {

    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
*/
export const List:FC = () => {
    return (
        <>
          <ul>

          </ul>
        </>
    )
}